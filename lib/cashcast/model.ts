/**
 * An illustrative browser model, not a port of CASH CAST or a bank integration.
 * All money is integer AUD cents. Dates are fictional UTC calendar days.
 * Same-day income is assumed available before expenses; banks may settle differently.
 */
export const BASE_DATE = '2030-05-04';
export const SAME_DAY_POLICY = 'Income before expenses; stable event ID breaks ties.';

export type EventDirection = 'income' | 'expense';
export type EventCategory = 'salary' | 'rent' | 'utilities' | 'living' | 'card' | 'extra-income' | 'unexpected' | 'goal';
export interface CashEvent {
  id: string;
  day: number;
  amountCents: number;
  direction: EventDirection;
  description: string;
  category: EventCategory;
  movable: boolean;
  moveWindow?: [number, number];
  note?: string;
  /** This prior statement belongs to the hypothetical goal card, not another card. */
  requiredForInterestFree?: boolean;
}
export interface CashScenario {
  openingBalanceCents: number;
  horizonDays: number;
  events: CashEvent[];
  nextSequence: number;
}
export interface ForecastEntry extends CashEvent {
  deltaCents: number;
  balanceBeforeCents: number;
  balanceCents: number;
}
export interface BalancePoint {
  day: number;
  balanceCents: number;
  eventId: string | null;
  description: string;
}
export interface ForecastDay {
  day: number;
  openingCents: number;
  closingCents: number;
  lowestCents: number;
  eventIds: string[];
}
export interface CashForecast {
  openingBalanceCents: number;
  endBalanceCents: number;
  totalIncomeCents: number;
  totalExpenseCents: number;
  entries: ForecastEntry[];
  days: ForecastDay[];
  firstShortfall: BalancePoint | null;
  lowestPoint: BalancePoint;
  nextEvent: ForecastEntry | null;
}

const baseEvents: CashEvent[] = [
  { id: 'rent-01', day: 4, amountCents: 120000, direction: 'expense', description: 'Rent', category: 'rent', movable: true, moveWindow: [4, 18], note: 'This fictional landlord has agreed to a date change within this window, with no fee. Real obligations need an agreement.' },
  { id: 'living-01', day: 6, amountCents: 20000, direction: 'expense', description: 'Living allowance', category: 'living', movable: false },
  { id: 'utilities-01', day: 8, amountCents: 18000, direction: 'expense', description: 'Utilities', category: 'utilities', movable: true, moveWindow: [8, 16], note: 'An agreed, fee-free date change is assumed only for this mock bill.' },
  { id: 'card-01', day: 11, amountCents: 77000, direction: 'expense', description: 'Existing card statement', category: 'card', movable: false, requiredForInterestFree: true, note: 'Full prior statement on the hypothetical goal card. Payment by this fixed deadline is part of its assumed interest-free conditions.' },
  { id: 'salary-01', day: 14, amountCents: 320000, direction: 'income', description: 'Salary', category: 'salary', movable: false },
  { id: 'living-02', day: 17, amountCents: 22000, direction: 'expense', description: 'Living allowance', category: 'living', movable: false },
  { id: 'rent-02', day: 20, amountCents: 120000, direction: 'expense', description: 'Next rent', category: 'rent', movable: false },
  { id: 'utilities-02', day: 23, amountCents: 18000, direction: 'expense', description: 'Next utilities', category: 'utilities', movable: false },
  { id: 'living-03', day: 27, amountCents: 22000, direction: 'expense', description: 'Living allowance', category: 'living', movable: false },
  { id: 'salary-02', day: 28, amountCents: 320000, direction: 'income', description: 'Next salary', category: 'salary', movable: false },
  { id: 'card-02', day: 31, amountCents: 35000, direction: 'expense', description: 'Next existing card payment', category: 'card', movable: false, note: 'Full payment on a separate, unrelated card. It remains a cash commitment but does not set the goal card’s interest-free eligibility.' },
  { id: 'living-04', day: 34, amountCents: 22000, direction: 'expense', description: 'Living allowance', category: 'living', movable: false },
];

function integer(value: number, name: string, minimum = 0) {
  if (!Number.isSafeInteger(value) || value < minimum) throw new RangeError(`${name} must be a safe integer of at least ${minimum}.`);
}
function moneySum(a: number, b: number) {
  const sum = a + b;
  if (!Number.isSafeInteger(sum)) throw new RangeError('The calculated amount exceeds integer-cent precision.');
  return sum;
}
function cloneScenario(scenario: CashScenario): CashScenario {
  return { ...scenario, events: scenario.events.map(event => event.moveWindow ? { ...event, moveWindow: [...event.moveWindow] } : { ...event }) };
}
function validateScenario(scenario: CashScenario) {
  if (!Number.isSafeInteger(scenario.openingBalanceCents)) throw new RangeError('Opening balance must use integer cents.');
  integer(scenario.horizonDays, 'Forecast horizon');
  if (scenario.horizonDays > 366) throw new RangeError('This illustrative forecast supports at most 366 days.');
  integer(scenario.nextSequence, 'Next event sequence', 1);
  const ids = new Set<string>();
  for (const event of scenario.events) {
    if (!event.id || ids.has(event.id)) throw new Error('Each event must have a unique stable ID.');
    ids.add(event.id);
    integer(event.day, 'Event day');
    integer(event.amountCents, 'Event amount', 1);
    if (event.direction !== 'income' && event.direction !== 'expense') throw new Error('Event direction must be income or expense.');
  }
}

export function createScenario(): CashScenario {
  return cloneScenario({ openingBalanceCents: 200000, horizonDays: 35, events: baseEvents, nextSequence: 1 });
}

export function forecast(scenario: CashScenario, todayDay = 0): CashForecast {
  validateScenario(scenario);
  integer(todayDay, 'Today day');
  const events = cloneScenario(scenario).events.filter(event => event.day <= scenario.horizonDays).sort((a, b) => a.day - b.day || (a.direction === b.direction ? a.id.localeCompare(b.id, 'en') : a.direction === 'income' ? -1 : 1));
  let balance = scenario.openingBalanceCents;
  let income = 0;
  let expenses = 0;
  const opening: BalancePoint = { day: 0, balanceCents: balance, eventId: null, description: 'Opening balance' };
  let lowestPoint = opening;
  let firstShortfall: BalancePoint | null = balance < 0 ? opening : null;
  const entries: ForecastEntry[] = [];
  const days: ForecastDay[] = [];
  let eventIndex = 0;
  for (let day = 0; day <= scenario.horizonDays; day++) {
    const daily: ForecastDay = { day, openingCents: balance, closingCents: balance, lowestCents: balance, eventIds: [] };
    while (eventIndex < events.length && events[eventIndex].day === day) {
      const event = events[eventIndex++];
      const deltaCents = event.direction === 'income' ? event.amountCents : -event.amountCents;
      const balanceBeforeCents = balance;
      balance = moneySum(balance, deltaCents);
      if (event.direction === 'income') income = moneySum(income, event.amountCents);
      else expenses = moneySum(expenses, event.amountCents);
      const entry = { ...event, deltaCents, balanceBeforeCents, balanceCents: balance };
      entries.push(entry);
      daily.eventIds.push(event.id);
      daily.lowestCents = Math.min(daily.lowestCents, balance);
      const point = { day, balanceCents: balance, eventId: event.id, description: event.description };
      if (balance < lowestPoint.balanceCents) lowestPoint = point;
      if (balance < 0 && firstShortfall === null) firstShortfall = point;
    }
    daily.closingCents = balance;
    days.push(daily);
  }
  return { openingBalanceCents: scenario.openingBalanceCents, endBalanceCents: balance, totalIncomeCents: income, totalExpenseCents: expenses, entries, days, firstShortfall, lowestPoint, nextEvent: entries.find(event => event.day > todayDay) ?? null };
}

/** End-of-day balance, including every event on that fictional day. */
export function balanceAtDay(result: CashForecast, day: number): number {
  integer(day, 'Day');
  return result.days[Math.min(day, result.days.length - 1)].closingCents;
}
export function formatDay(day: number, long = false): string {
  integer(day, 'Day');
  const date = new Date(`${BASE_DATE}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + day);
  return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: long ? 'long' : 'short', ...(long ? { year: 'numeric' as const } : {}), timeZone: 'UTC' }).format(date);
}
export function formatMoney(cents: number): string {
  if (!Number.isSafeInteger(cents)) throw new RangeError('Money must use integer cents.');
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: cents % 100 === 0 ? 0 : 2 }).format(cents / 100);
}

export function movePayment(scenario: CashScenario, eventId: string, day: number): CashScenario {
  validateScenario(scenario);
  integer(day, 'New payment day');
  const event = scenario.events.find(entry => entry.id === eventId);
  if (!event || event.direction !== 'expense' || !event.movable || !event.moveWindow) throw new Error('This mock payment does not have an agreed date-change option.');
  if (day < event.moveWindow[0] || day > event.moveWindow[1]) throw new RangeError('The new day is outside this mock payment’s agreed window.');
  const next = cloneScenario(scenario);
  next.events.find(entry => entry.id === eventId)!.day = day;
  return next;
}
function addMockEvent(scenario: CashScenario, event: Omit<CashEvent, 'id' | 'movable'>): CashScenario {
  validateScenario(scenario);
  integer(event.day, 'Event day');
  integer(event.amountCents, 'Event amount', 1);
  if (event.day > scenario.horizonDays) throw new RangeError('Choose a mock event inside this forecast horizon.');
  const next = cloneScenario(scenario);
  let id: string;
  do { id = `mock-${event.category}-${String(next.nextSequence++).padStart(3, '0')}`; } while (next.events.some(entry => entry.id === id));
  next.events.push({ ...event, id, movable: false });
  return next;
}
export function addIncome(scenario: CashScenario, amountCents = 50000, day = 10): CashScenario {
  return addMockEvent(scenario, { amountCents, day, direction: 'income', description: 'Hypothetical extra income', category: 'extra-income' });
}
export function addUnexpectedExpense(scenario: CashScenario, amountCents = 45000, day = 9): CashScenario {
  return addMockEvent(scenario, { amountCents, day, direction: 'expense', description: 'Unexpected expense', category: 'unexpected' });
}
export function addGoal(scenario: CashScenario, amountCents = 200000, day = 16): CashScenario {
  return addMockEvent(scenario, { amountCents, day, direction: 'expense', description: 'Hypothetical goal purchase', category: 'goal' });
}
export function compareFutures(baseline: CashScenario, modified: CashScenario) {
  const original = forecast(baseline);
  const alternative = forecast(modified);
  return {
    baseline: original,
    modified: alternative,
    lowestDeltaCents: moneySum(alternative.lowestPoint.balanceCents, -original.lowestPoint.balanceCents),
    endDeltaCents: moneySum(alternative.endBalanceCents, -original.endBalanceCents),
    shortfallResolved: original.firstShortfall !== null && alternative.firstShortfall === null,
    unchanged: original.openingBalanceCents === alternative.openingBalanceCents && original.days.length === alternative.days.length && JSON.stringify(original.entries.map(event => [event.day, event.deltaCents])) === JSON.stringify(alternative.entries.map(event => [event.day, event.deltaCents])),
  };
}

export interface GoalTerms {
  goalCostCents: number;
  purchaseDay: number;
  statementCloseDay: number;
  fullRepaymentDay: number;
  availableCreditCents: number;
  feeCents: number;
  bufferCents: number;
  qualifyingPurchase: boolean;
  /** Already-due statements were paid in full. card-01 is still due in the forecast. */
  priorStatementsPaidInFull: boolean;
}
export const defaultGoalTerms: GoalTerms = {
  goalCostCents: 200000, purchaseDay: 2, statementCloseDay: 21, fullRepaymentDay: 33,
  availableCreditCents: 250000, feeCents: 1000, bufferCents: 30000,
  qualifyingPurchase: true, priorStatementsPaidInFull: true,
};
export interface GoalStress {
  salaryEventId: string;
  salaryDelayDays: number;
  unexpectedExpenseCents: number;
  unexpectedExpenseDay: number;
}
export const defaultGoalStress: GoalStress = { salaryEventId: 'salary-02', salaryDelayDays: 7, unexpectedExpenseCents: 80000, unexpectedExpenseDay: 30 };

function validateTerms(terms: GoalTerms) {
  integer(terms.goalCostCents, 'Goal cost', 1);
  for (const [name, value] of Object.entries(terms)) if (typeof value === 'number' && name !== 'goalCostCents') integer(value, name);
}
export function assessCreditEligibility(terms: GoalTerms = defaultGoalTerms, horizonDays = 35) {
  validateTerms(terms);
  const repaymentCents = moneySum(terms.goalCostCents, terms.feeCents);
  const reasons: string[] = [];
  if (!terms.qualifyingPurchase) reasons.push('This purchase does not qualify under the hypothetical interest-free terms.');
  if (!terms.priorStatementsPaidInFull) reasons.push('Prior statements are not paid in full, so the assumed eligibility condition is not met.');
  if (terms.availableCreditCents < repaymentCents) reasons.push('Available credit does not cover the purchase and its fee.');
  if (terms.statementCloseDay < terms.purchaseDay) reasons.push('The purchase is outside the stated statement period.');
  if (terms.fullRepaymentDay <= terms.statementCloseDay) reasons.push('The full repayment deadline must follow the stated statement close.');
  if (terms.fullRepaymentDay > horizonDays) reasons.push('The forecast ends before the full repayment deadline.');
  return { eligible: reasons.length === 0, reasons, repaymentCents, remainingCreditCents: terms.availableCreditCents - repaymentCents };
}
function withGoalEvent(scenario: CashScenario, id: string, day: number, amountCents: number, description: string): CashScenario {
  const next = cloneScenario(scenario);
  if (next.events.some(event => event.id === id)) throw new Error('This scenario already contains the reserved goal-path ID.');
  next.events.push({ id, day, amountCents, direction: 'expense', description, category: 'goal', movable: false });
  return next;
}
function minimumFromDay(result: CashForecast, day: number) {
  return Math.min(...result.days.filter(entry => entry.day >= day).map(entry => entry.lowestCents));
}
function minimumAfterEvent(result: CashForecast, eventId: string) {
  const index = result.entries.findIndex(event => event.id === eventId);
  if (index < 0) throw new Error('The planned purchase is missing from the forecast.');
  return Math.min(...result.entries.slice(index).map(event => event.balanceCents));
}
function earliestWaitDay(scenario: CashScenario, terms: GoalTerms): number | null {
  for (let day = 0; day <= scenario.horizonDays; day++) {
    const candidate = forecast(withGoalEvent(scenario, 'goal-wait', day, terms.goalCostCents, 'Goal purchased with cash'));
    // Earlier, pre-existing cash shortfalls remain visible, but cannot be repaired by waiting to buy.
    if (minimumAfterEvent(candidate, 'goal-wait') >= terms.bufferCents) return day;
  }
  return null;
}
function applyStress(scenario: CashScenario, stress: GoalStress): CashScenario {
  integer(stress.salaryDelayDays, 'Salary delay');
  integer(stress.unexpectedExpenseCents, 'Stress expense');
  integer(stress.unexpectedExpenseDay, 'Stress expense day');
  const next = cloneScenario(scenario);
  const salary = next.events.find(event => event.id === stress.salaryEventId && event.direction === 'income' && event.category === 'salary');
  if (!salary) throw new Error('The stress test must identify an existing salary event.');
  salary.day += stress.salaryDelayDays;
  if (stress.unexpectedExpenseCents > 0) next.events.push({ id: 'goal-stress-expense', day: stress.unexpectedExpenseDay, amountCents: stress.unexpectedExpenseCents, direction: 'expense', description: 'Stress test: unexpected expense', category: 'unexpected', movable: false });
  return next;
}
function creditOutcome(result: CashForecast, terms: GoalTerms, eligible: boolean) {
  const repayment = result.entries.find(event => event.id === 'goal-accelerate-repayment');
  const repaymentCovered = Boolean(repayment && repayment.balanceBeforeCents >= repayment.amountCents);
  const existingObligationsCovered = result.entries.filter(event => event.category === 'card').every(event => event.balanceBeforeCents >= event.amountCents);
  const linkedStatementsCovered = result.entries.filter(event => event.category === 'card' && event.requiredForInterestFree).every(event => event.balanceBeforeCents >= event.amountCents);
  const cashCommitmentsCovered = result.firstShortfall === null;
  const interestFreeConditionsMet = eligible && repaymentCovered && linkedStatementsCovered;
  const minimumAfterPurchaseCents = minimumFromDay(result, terms.purchaseDay);
  return { repaymentCovered, existingObligationsCovered, linkedStatementsCovered, cashCommitmentsCovered, planCovered: interestFreeConditionsMet && cashCommitmentsCovered, minimumAfterPurchaseCents, bufferPreserved: minimumAfterPurchaseCents >= terms.bufferCents, interestFreeConditionsMet };
}

/**
 * Two explicit hypothetical plans. WAIT searches for a date preserving the cash
 * buffer through this finite horizon. ACCELERATE schedules the full purchase
 * plus fee at the stated deadline; it never substitutes a minimum payment.
 * Stress keeps the chosen plans fixed, then delays one salary and adds an expense.
 * No interest/default/overdraft amount is invented when a condition fails.
 */
export function compareGoalPaths(scenario: CashScenario, terms: GoalTerms = defaultGoalTerms, stress: GoalStress = defaultGoalStress) {
  validateScenario(scenario);
  validateTerms(terms);
  const eligibility = assessCreditEligibility(terms, scenario.horizonDays);
  const waitDay = earliestWaitDay(scenario, terms);
  const waitScenario = waitDay === null ? cloneScenario(scenario) : withGoalEvent(scenario, 'goal-wait', waitDay, terms.goalCostCents, 'Goal purchased with cash');
  const waitForecast = forecast(waitScenario);
  // An ineligible arrangement is blocked; no fictional loan or repayment is added.
  const acceleratedScenario = eligibility.eligible ? withGoalEvent(scenario, 'goal-accelerate-repayment', terms.fullRepaymentDay, eligibility.repaymentCents, 'Full goal repayment + stated fee') : cloneScenario(scenario);
  const acceleratedForecast = forecast(acceleratedScenario);
  const stressedBase = applyStress(scenario, stress);
  const stressedWait = forecast(applyStress(waitScenario, stress));
  const stressedAccelerated = forecast(applyStress(acceleratedScenario, stress));
  return {
    terms: { ...terms }, stress: { ...stress }, eligibility,
    baseline: forecast(scenario), stressedBaseline: forecast(stressedBase),
    wait: {
      purchaseDay: waitDay, scenario: waitScenario, forecast: waitForecast,
      minimumAfterPurchaseCents: waitDay === null ? null : minimumAfterEvent(waitForecast, 'goal-wait'),
      bufferPreserved: waitDay !== null && minimumAfterEvent(waitForecast, 'goal-wait') >= terms.bufferCents,
      stressForecast: stressedWait,
      stressBufferPreserved: waitDay !== null && minimumAfterEvent(stressedWait, 'goal-wait') >= terms.bufferCents,
      stressReplannedPurchaseDay: earliestWaitDay(stressedBase, terms),
    },
    accelerate: {
      purchaseDay: eligibility.eligible ? terms.purchaseDay : null,
      scenario: acceleratedScenario, forecast: acceleratedForecast,
      repaymentDay: terms.fullRepaymentDay, repaymentCents: eligibility.repaymentCents,
      ...creditOutcome(acceleratedForecast, terms, eligibility.eligible),
      stressForecast: stressedAccelerated,
      stressOutcome: creditOutcome(stressedAccelerated, terms, eligibility.eligible),
    },
  };
}
