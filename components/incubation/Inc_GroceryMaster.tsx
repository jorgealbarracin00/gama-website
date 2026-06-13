

import Image from "next/image";
import Link from "next/link";

const labTabs = ["Origin", "Experiment", "System", "Problems", "Solutions", "Evolution"];

const labStats = [
  ["Status", "Deployed"],
  ["Specimen", "GroceryMaster"],
  ["Platform", "iPhone + iPad"],
  ["Core Stack", "SwiftUI / Firebase / StoreKit"],
  ["Mission", "One living list"],
];

const problems = [
  "Families often use scattered notes, memory, screenshots, and messages instead of one shared list.",
  "Shared groceries are not only a list problem. They are a timing, ownership, and communication problem.",
  "The app needed to work on small iPhones, large iPads, and review devices without the interface feeling crowded.",
  "Apple review exposed layout and clarity issues that had to be solved before deployment.",
];

const solutions = [
  "A single shared home list became the center of the app instead of supporting many confusing lists.",
  "Shopping Mode made the app aware of the real-life moment when someone is actively at the store.",
  "Pantry magnets turned repeated essentials into fast actions instead of repeated typing.",
  "The iPad interface was rebuilt around scrollable, safer layouts so content could breathe on every screen.",
];

const evolution = [
  ["V0.00001", "A simple idea: one list that everyone in the household can see."],
  ["V0.1", "Real-time syncing, household groups, and the first shared-list structure."],
  ["V0.5", "Shopping Mode, shop filters, pantry magnets, duplicate warnings, and family testing."],
  ["V0.8", "Subscription logic, sponsor model, iPad fixes, compact iPhone layout, and App Store review iteration."],
  ["V1.0", "Deployed system: GroceryMaster becomes a real product instead of only a lab idea."],
];

export default function Inc_GroceryMaster() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b16] text-white">
      <section className="relative px-6 py-16 md:px-10 md:py-20 xl:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_36%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.2),rgba(5,11,22,1)_82%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:bg-white/14"
              >
                ← Return to lab entrance
              </Link>

              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Incubation Chamber / Specimen 001
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-wide md:text-7xl">
                GroceryMaster
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/72 md:text-2xl">
                The family shopping system that grew from chaos, notes, and forgotten groceries into one living list.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/12 bg-black/24 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:min-w-[330px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                Lab Metadata
              </p>
              <div className="mt-4 space-y-3">
                {labStats.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-5 border-b border-white/8 pb-3 text-sm">
                    <span className="text-white/42">{label}</span>
                    <span className="font-semibold text-white/84">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-b border-white/12">
            {labTabs.map((tab, index) => (
              <a
                key={tab}
                href={`#${tab.toLowerCase()}`}
                className={`rounded-t-2xl border border-b-0 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  index === 0
                    ? "border-emerald-200/24 bg-emerald-300/10 text-emerald-100"
                    : "border-white/12 bg-white/[0.035] text-white/52 hover:bg-white/[0.07]"
                }`}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 xl:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[420px] overflow-hidden rounded-[40px] border border-white/12 bg-white/[0.045] shadow-[0_30px_90px_rgba(0,0,0,0.36)] md:min-h-[620px]">
            <Image
              src="/GroceryMaster/GM_EvolutionTimeline.webp"
              alt="GroceryMaster evolution timeline inside a laboratory"
              fill
              priority
              className="object-cover opacity-92"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,20,0.02),rgba(3,9,20,0.44))]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/14 bg-black/34 p-6 backdrop-blur-md md:left-8 md:right-auto md:max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                Case Study Overview
              </p>
              <p className="mt-3 text-lg leading-relaxed text-white/78">
                This chamber records the specimen history: why GroceryMaster was born, what failed, what changed, and how it became a deployed product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="origin" className="px-6 py-14 md:px-10 xl:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Origin</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Why it was born</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              GroceryMaster started from a normal household problem: grocery lists were living everywhere except in one reliable place. Someone remembered milk. Someone else added eggs. Someone forgot nappies. The family list was scattered across memory, messages, and last-minute calls.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/62">
              The mission became simple: one list, one home, everyone synced. The app was not designed as a productivity toy. It was designed for real family friction.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:min-h-[500px]">
            <Image
              src="/GroceryMaster/GM_Origin.webp"
              alt="GroceryMaster origin lab concept"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 620px"
            />
          </div>
        </div>
      </section>

      <section id="experiment" className="px-6 py-14 md:px-10 xl:px-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Experiment 0001</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">The first hypothesis</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            The early hypothesis was that a shared grocery list would reduce household chaos if it was fast enough, simple enough, and visible to everyone. That sounds obvious, but the real experiment was not the list. The experiment was behavior.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/62">
            Would people actually use it? Would they remember to add items? Would family members understand shared ownership? Could the interface stay simple while supporting shops, people, pantry habits, and live shopping sessions?
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-7xl">
          <div className="relative min-h-[420px] overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.32)] md:min-h-[620px]">
            <Image
              src="/GroceryMaster/GM_Experiment001.webp"
              alt="GroceryMaster early experiment hologram lab"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section id="system" className="px-6 py-14 md:px-10 xl:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:min-h-[560px]">
            <Image
              src="/GroceryMaster/GM_SyncEngine.webp"
              alt="GroceryMaster sync engine laboratory illustration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 660px"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">System</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">How the engine thinks</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              GroceryMaster uses a shared household model. A user belongs to a home group, the group owns the living list, and devices listen for changes in real time.
            </p>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-emerald-200/16 bg-black/32 p-5 font-mono text-sm leading-relaxed text-emerald-100/82">
              <p>User → Home Group → Living List</p>
              <p>Living List → Items → Shops → Shopping Session</p>
              <p>One change → Sync → Everyone sees it</p>
            </div>

            <p className="mt-6 text-base leading-relaxed text-white/58">
              This is not the full implementation. It is the readable version: enough for regular people to understand the technicality without exposing the exact internals.
            </p>
          </div>
        </div>
      </section>

      <section id="problems" className="px-6 py-14 md:px-10 xl:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">Problems</p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">What went wrong</h2>
              <div className="mt-8 grid gap-4">
                {problems.map((problem) => (
                  <div key={problem} className="rounded-[24px] border border-white/12 bg-white/[0.045] p-5 text-white/68">
                    {problem}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[380px] overflow-hidden rounded-[36px] border border-red-200/16 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:min-h-[560px]">
              <Image
                src="/GroceryMaster/GM_AppleReview.webp"
                alt="GroceryMaster Apple review lab rejection scene"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 660px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-14 md:px-10 xl:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:min-h-[560px]">
            <Image
              src="/GroceryMaster/GM_FamilyNetwork.webp"
              alt="GroceryMaster family network laboratory illustration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 660px"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Solutions</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">How the specimen evolved</h2>
            <div className="mt-8 grid gap-4">
              {solutions.map((solution) => (
                <div key={solution} className="rounded-[24px] border border-emerald-200/14 bg-emerald-300/8 p-5 text-white/70">
                  {solution}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="evolution" className="px-6 py-14 md:px-10 xl:px-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Evolution</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">From V0.00001 to V1.0</h2>
          <div className="mt-10 space-y-5">
            {evolution.map(([version, note]) => (
              <div key={version} className="grid gap-4 rounded-[28px] border border-white/12 bg-white/[0.045] p-6 md:grid-cols-[180px_1fr]">
                <p className="font-mono text-lg font-semibold text-emerald-200">{version}</p>
                <p className="text-lg leading-relaxed text-white/68">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl">
          <div className="relative min-h-[420px] overflow-hidden rounded-[40px] border border-emerald-200/16 bg-white/[0.045] shadow-[0_30px_90px_rgba(0,0,0,0.36)] md:min-h-[640px]">
            <Image
              src="/GroceryMaster/GM_Deployment.webp"
              alt="GroceryMaster deployment chamber launch scene"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 xl:px-14">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-cyan-200/18 bg-cyan-300/8 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/90">Current Stage</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Deployed, but still evolving.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            GroceryMaster is a deployed specimen, but Gama Dynamics treats shipped software as alive. The mission continues: more polish, stronger family workflows, better device support, and fewer forgotten groceries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/18 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/88 transition hover:bg-white/18"
            >
              Back to Home
            </Link>
            <a
              href="https://grocerymaster.gamadynamics.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-200/24 bg-emerald-300/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-300/16"
            >
              Open app site
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}