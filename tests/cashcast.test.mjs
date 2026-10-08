import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../lib/cashcast/model.ts', import.meta.url), 'utf8');
const compiled = ts.transpile(source, { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 });
const {
  createScenario, forecast, balanceAtDay, movePayment, addIncome, addUnexpectedExpense, addGoal,
  compareFutures, compareGoalPaths, assessCreditEligibility, defaultGoalTerms, defaultGoalStress,
} = await import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'));

function conservation(scenario, result = forecast(scenario)) {
  assert.equal(result.endBalanceCents, scenario.openingBalanceCents + result.totalIncomeCents - result.totalExpenseCents);
  let expected = scenario.openingBalanceCents;
  for (const event of result.entries) {
    assert.equal(event.balanceBeforeCents, expected);
    expected += event.direction === 'income' ? event.amountCents : -event.amountCents;
    assert.equal(event.balanceCents, expected);
    assert.ok(Number.isSafeInteger(expected));
  }
  assert.equal(new Set(result.entries.map(event => event.id)).size, result.entries.length);
  assert.equal(Math.min(scenario.openingBalanceCents, ...result.entries.map(event => event.balanceCents)), result.lowestPoint.balanceCents);
}

test('default sequence creates the actual -$350 shortfall before salary, and conserves every cent', () => {
  const scenario = createScenario();
  const result = forecast(scenario);
  conservation(scenario, result);
  assert.equal(result.openingBalanceCents, 200000);
  assert.deepEqual(result.firstShortfall, { day: 11, balanceCents: -35000, eventId: 'card-01', description: 'Existing card statement' });
  assert.equal(result.lowestPoint.balanceCents, -35000);
  assert.equal(result.endBalanceCents, 366000);
  assert.equal(result.nextEvent.id, 'rent-01');
  assert.equal(forecast(scenario, 11).nextEvent.id, 'salary-01');
  assert.equal(balanceAtDay(result, 13), -35000);
  assert.equal(balanceAtDay(result, 14), 285000);
  assert.equal(result.days.length, 36);
});

test('same-day policy is deterministic and checks every event, not just the closing balance', () => {
  const scenario = { openingBalanceCents: 0, horizonDays: 2, nextSequence: 1, events: [
    { id: 'a-expense', day: 1, amountCents: 101, direction: 'expense', description: 'Expense', category: 'living', movable: false },
    { id: 'z-income', day: 1, amountCents: 100, direction: 'income', description: 'Income', category: 'salary', movable: false },
    { id: 'b-expense', day: 1, amountCents: 1, direction: 'expense', description: 'Other expense', category: 'living', movable: false },
  ] };
  const result = forecast(scenario);
  assert.deepEqual(result.entries.map(event => event.id), ['z-income', 'a-expense', 'b-expense']);
  assert.equal(result.firstShortfall.balanceCents, -1);
  assert.equal(result.lowestPoint.balanceCents, -2);
  assert.equal(result.days[1].closingCents, -2);
  assert.deepEqual(forecast({ ...scenario, events: scenario.events.toReversed() }), result);
  conservation(scenario, result);
});

test('cent amounts remain exact and invalid money, dates, duplicate IDs, and overflow are rejected', () => {
  const small = { openingBalanceCents: 99, horizonDays: 1, nextSequence: 1, events: [
    { id: 'cent-in', day: 1, amountCents: 1, direction: 'income', description: 'One cent', category: 'salary', movable: false },
    { id: 'cent-out', day: 1, amountCents: 100, direction: 'expense', description: 'One dollar', category: 'living', movable: false },
  ] };
  assert.equal(forecast(small).endBalanceCents, 0);
  assert.equal(forecast(small).firstShortfall, null);
  assert.throws(() => addIncome(createScenario(), 10.5), /safe integer/);
  assert.throws(() => addIncome(createScenario(), 100, -1), /safe integer/);
  assert.throws(() => addIncome(createScenario(), 100, 36), /horizon/);
  const duplicate = createScenario(); duplicate.events.push({ ...duplicate.events[0] });
  assert.throws(() => forecast(duplicate), /unique stable ID/);
  assert.throws(() => forecast({ ...small, openingBalanceCents: Number.MAX_SAFE_INTEGER }), /precision/);
  const empty = { openingBalanceCents: Number.MAX_SAFE_INTEGER, horizonDays: 0, nextSequence: 1, events: [] };
  assert.throws(() => compareFutures(empty, { ...empty, openingBalanceCents: -Number.MAX_SAFE_INTEGER }), /precision/);
});

test('moving only an agreed payment keeps its ID and amount, recalculates the shortfall, and leaves source intact', () => {
  const baseline = createScenario();
  const before = structuredClone(baseline);
  const alternative = movePayment(baseline, 'rent-01', 15);
  assert.deepEqual(baseline, before);
  assert.equal(alternative.events.find(event => event.id === 'rent-01').amountCents, 120000);
  assert.equal(alternative.events.find(event => event.id === 'rent-01').day, 15);
  assert.deepEqual(alternative.events.map(event => event.id), baseline.events.map(event => event.id));
  assert.equal(forecast(alternative).firstShortfall, null);
  assert.equal(forecast(alternative).lowestPoint.balanceCents, 85000);
  assert.equal(forecast(alternative).endBalanceCents, forecast(baseline).endBalanceCents);
  assert.throws(() => movePayment(baseline, 'card-01', 15), /agreed date-change/);
  assert.throws(() => movePayment(baseline, 'rent-01', 19), /agreed window/);
  conservation(alternative);
});

test('added mock income, surprise expenses, and goals have unique stable IDs and real forecast effects', () => {
  const baseline = createScenario();
  const extraIncome = addIncome(baseline);
  assert.equal(forecast(extraIncome).firstShortfall, null);
  assert.equal(forecast(extraIncome).lowestPoint.balanceCents, 15000);
  assert.equal(forecast(extraIncome).endBalanceCents, 416000);
  const expense = addUnexpectedExpense(baseline);
  assert.equal(forecast(expense).firstShortfall.day, 9);
  assert.equal(forecast(expense).lowestPoint.balanceCents, -80000);
  const goal = addGoal(baseline);
  assert.equal(forecast(goal).lowestPoint.balanceCents, -97000);
  assert.equal(forecast(goal).endBalanceCents, 166000);
  const twice = addIncome(extraIncome);
  assert.equal(new Set(twice.events.map(event => event.id)).size, twice.events.length);
  assert.equal(twice.events.at(-2).id, extraIncome.events.at(-1).id);
  assert.notEqual(twice.events.at(-1).id, twice.events.at(-2).id);
  for (const scenario of [extraIncome, expense, goal, twice]) conservation(scenario);
});

test('comparison derives equality and changes from calculated futures', () => {
  const baseline = createScenario();
  const same = compareFutures(baseline, createScenario());
  assert.equal(same.unchanged, true);
  assert.equal(same.lowestDeltaCents, 0);
  assert.equal(same.endDeltaCents, 0);
  assert.equal(same.shortfallResolved, false);
  const moved = compareFutures(baseline, movePayment(baseline, 'rent-01', 15));
  assert.equal(moved.unchanged, false);
  assert.equal(moved.lowestDeltaCents, 120000);
  assert.equal(moved.endDeltaCents, 0);
  assert.equal(moved.shortfallResolved, true);
});

test('WAIT preserves the stated buffer after buying and considers subsequent commitments', () => {
  const scenario = createScenario();
  const result = compareGoalPaths(scenario);
  // Cash reaches $2,850 on day14, but buying then would miss later commitments.
  assert.equal(result.wait.purchaseDay, 28);
  assert.equal(result.wait.forecast.endBalanceCents, 166000);
  assert.equal(result.wait.minimumAfterPurchaseCents, 166000);
  assert.equal(result.wait.bufferPreserved, true);
  // Waiting to buy does not erase an existing, earlier shortfall.
  assert.equal(result.wait.forecast.firstShortfall.balanceCents, -35000);
  assert.equal(result.wait.forecast.entries.find(event => event.id === 'goal-wait').amountCents, 200000);
  conservation(result.wait.scenario, result.wait.forecast);
  const unavailable = compareGoalPaths(scenario, { ...defaultGoalTerms, goalCostCents: 9999999 });
  assert.equal(unavailable.wait.purchaseDay, null);
  assert.equal(unavailable.wait.bufferPreserved, false);
  assert.deepEqual(unavailable.wait.forecast, forecast(scenario));
});

test('ACCELERATE reserves credit and debits the full purchase plus fee at its explicit deadline', () => {
  const result = compareGoalPaths(createScenario());
  assert.equal(result.eligibility.eligible, true);
  assert.equal(result.eligibility.remainingCreditCents, 49000);
  assert.equal(result.accelerate.purchaseDay, 2);
  const repayment = result.accelerate.forecast.entries.find(event => event.id === 'goal-accelerate-repayment');
  assert.equal(repayment.day, 33);
  assert.equal(repayment.amountCents, 201000);
  assert.equal(repayment.balanceBeforeCents, 388000);
  assert.equal(result.accelerate.forecast.endBalanceCents, 165000);
  assert.equal(result.accelerate.repaymentCovered, true);
  assert.equal(result.accelerate.existingObligationsCovered, false);
  assert.equal(result.accelerate.linkedStatementsCovered, false);
  assert.equal(result.accelerate.planCovered, false);
  assert.equal(result.accelerate.interestFreeConditionsMet, false);
  assert.equal(result.accelerate.bufferPreserved, false);
  conservation(result.accelerate.scenario, result.accelerate.forecast);
});

test('interest-free assumptions require qualifying purchases, prior full statements, credit, and in-horizon deadlines', () => {
  for (const change of [
    { qualifyingPurchase: false }, { priorStatementsPaidInFull: false },
    { availableCreditCents: 200000 }, { statementCloseDay: 1 },
    { fullRepaymentDay: 21 }, { fullRepaymentDay: 36 },
  ]) {
    const terms = { ...defaultGoalTerms, ...change };
    assert.equal(assessCreditEligibility(terms).eligible, false);
    const result = compareGoalPaths(createScenario(), terms);
    assert.equal(result.accelerate.purchaseDay, null);
    assert.equal(result.accelerate.interestFreeConditionsMet, false);
    assert.equal(result.accelerate.forecast.entries.some(event => event.id === 'goal-accelerate-repayment'), false);
    assert.ok(result.eligibility.reasons.length > 0);
  }
  assert.equal(assessCreditEligibility({ ...defaultGoalTerms, availableCreditCents: 201000 }).eligible, true);
  assert.throws(() => assessCreditEligibility({ ...defaultGoalTerms, feeCents: -1 }), /safe integer/);
});

test('covered obligations and buffer are assessed separately from contractual eligibility', () => {
  const resolved = movePayment(createScenario(), 'rent-01', 15);
  const result = compareGoalPaths(resolved);
  assert.equal(result.accelerate.repaymentCovered, true);
  assert.equal(result.accelerate.existingObligationsCovered, true);
  assert.equal(result.accelerate.bufferPreserved, true);
  assert.equal(result.accelerate.interestFreeConditionsMet, true);
  assert.equal(result.accelerate.planCovered, true);
  const highBuffer = compareGoalPaths(resolved, { ...defaultGoalTerms, bufferCents: 100000 });
  assert.equal(highBuffer.accelerate.interestFreeConditionsMet, true);
  assert.equal(highBuffer.accelerate.bufferPreserved, false);
});

test('an unrelated card shortfall affects plan coverage, not the goal card’s contractual conditions', () => {
  let scenario = movePayment(createScenario(), 'rent-01', 15);
  scenario.events.find(event => event.id === 'card-02').amountCents = 500000;
  scenario = addIncome(scenario, 400000, 32);
  const result = compareGoalPaths(scenario);
  assert.equal(result.accelerate.forecast.firstShortfall.eventId, 'card-02');
  assert.equal(result.accelerate.linkedStatementsCovered, true);
  assert.equal(result.accelerate.repaymentCovered, true);
  assert.equal(result.accelerate.interestFreeConditionsMet, true);
  assert.equal(result.accelerate.existingObligationsCovered, false);
  assert.equal(result.accelerate.cashCommitmentsCovered, false);
  assert.equal(result.accelerate.planCovered, false);
  conservation(result.accelerate.scenario, result.accelerate.forecast);
});

test('delayed salary and extra expense expose a full repayment failure without inventing interest costs', () => {
  const original = createScenario();
  const before = structuredClone(original);
  const result = compareGoalPaths(original);
  assert.deepEqual(original, before);
  assert.equal(result.accelerate.stressForecast.entries.find(event => event.id === 'salary-02').day, 35);
  assert.equal(result.accelerate.stressForecast.entries.find(event => event.id === 'goal-accelerate-repayment').amountCents, 201000);
  assert.equal(result.accelerate.stressOutcome.repaymentCovered, false);
  assert.equal(result.accelerate.stressOutcome.interestFreeConditionsMet, false);
  assert.equal(result.accelerate.stressForecast.lowestPoint.balanceCents, -235000);
  assert.equal(result.accelerate.stressForecast.endBalanceCents, 85000);
  assert.equal(result.wait.stressBufferPreserved, false);
  assert.equal(result.wait.stressReplannedPurchaseDay, 35);
  assert.equal(result.wait.stressForecast.endBalanceCents, 86000);
  const noStress = compareGoalPaths(original, defaultGoalTerms, { ...defaultGoalStress, salaryDelayDays: 0, unexpectedExpenseCents: 0 });
  assert.deepEqual(noStress.accelerate.stressForecast, noStress.accelerate.forecast);
  assert.deepEqual(noStress.wait.stressForecast, noStress.wait.forecast);
});

test('horizon boundaries and a negative opening balance are explicit', () => {
  const scenario = createScenario();
  scenario.events.push({ id: 'beyond-horizon', day: 36, amountCents: 99999, direction: 'income', description: 'Outside this view', category: 'salary', movable: false });
  assert.equal(forecast(scenario).endBalanceCents, 366000);
  assert.equal(forecast({ ...scenario, openingBalanceCents: -1 }).firstShortfall.eventId, null);
  assert.equal(forecast({ ...scenario, horizonDays: 0 }).entries.length, 0);
  assert.throws(() => forecast({ ...scenario, horizonDays: 367 }), /366 days/);
});

test('WAIT only promises a buffer within the selected finite forecast, and keeps every original commitment', () => {
  const scenario = createScenario();
  const terms = { ...defaultGoalTerms, goalCostCents: 170000 };
  // Today alone can cover this purchase and $300; including rent cannot.
  assert.equal(compareGoalPaths({ ...scenario, horizonDays: 0 }, terms).wait.purchaseDay, 0);
  assert.equal(compareGoalPaths({ ...scenario, horizonDays: 4 }, terms).wait.purchaseDay, null);
  const result = compareGoalPaths(scenario);
  for (const path of [result.wait.scenario, result.accelerate.scenario]) {
    for (const existing of scenario.events) assert.deepEqual(path.events.find(event => event.id === existing.id), existing);
  }
});
