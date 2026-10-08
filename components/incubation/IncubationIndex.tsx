import Link from "next/link";
import Image from "next/image";
import { getSpecimenCard, specimenGroups, specimenCount } from "@/lib/specimens/registry";

const groups = specimenGroups().map(group => ({ ...group, cards: group.specimens.map(record => {
  const card = getSpecimenCard(record.slug);
  return { id: `SPECIMEN ${card.id}`, name: card.name, status: card.statusLabel,
    classification: card.classification, href: card.incubationHref, image: card.image,
    summary: card.summary, stack: card.technologySummary.join(" / "),
    tone: card.accent === "green" ? "border-emerald-200/18 bg-emerald-300/8 text-emerald-100" : card.accent === "lavender" ? "border-purple-200/18 bg-purple-300/8 text-purple-100" : card.accent === "coral" ? "border-rose-200/20 bg-rose-300/8 text-rose-100" : (card.accent === "aqua" || card.accent === "electric") ? "border-cyan-200/20 bg-cyan-300/8 text-cyan-100" : card.accent === "titanium" ? "border-slate-200/20 bg-slate-300/8 text-slate-100" : "border-amber-200/18 bg-amber-300/8 text-amber-100" };
}) }));

export default function IncubationIndex() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b16] text-white">
      <section className="relative px-6 py-16 md:px-10 md:py-20 xl:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.14),rgba(5,11,22,1)_80%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:bg-white/14"
          >
            ← Return to lab entrance
          </Link>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Gama Dynamics / Incubation Chamber
              </p>
              <h1 className="mt-4 max-w-5xl text-5xl font-bold tracking-wide md:text-7xl">
                Specimen files, build notes and product evolution.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/68 md:text-xl">
                This chamber stores the stories behind each system: why it was born, what failed, what changed, how it works, and where it is going next.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/12 bg-black/24 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                Chamber Index
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/64">
                <div className="flex justify-between border-b border-white/8 pb-3">
                  <span>Total specimens</span>
                  <span className="font-semibold text-white">{specimenCount()}</span>
                </div>
                <div className="flex justify-between border-b border-white/8 pb-3">
                  <span>Deployed</span>
                  <span className="font-semibold text-emerald-200">{specimenCount("deployed")}</span>
                </div>
                <div className="flex justify-between border-b border-white/8 pb-3">
                  <span>Incubating</span>
                  <span className="font-semibold text-cyan-200">{specimenCount("incubating")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Experimental</span>
                  <span className="font-semibold text-fuchsia-200">{specimenCount("experimental")}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 border-b border-white/12 pb-4 text-xs uppercase tracking-[0.18em] text-cyan-100">Official specimen archive</p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 xl:px-14">
        <div className="mx-auto max-w-7xl space-y-12">
          {groups.map(group => <section key={group.status} aria-label={`${group.label} specimens`}>
          <h2 className="mb-5 text-xs uppercase tracking-[0.18em] text-white/60">{group.label}{group.status === 'deployed' ? ' · Oldest first' : ''}</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {group.cards.map((specimen) => (
            <Link
              key={specimen.name}
              href={specimen.href}
              className="group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-cyan-200/26 hover:bg-white/[0.065]"
            >
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-cyan-300/8 blur-2xl transition group-hover:bg-cyan-300/18" />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                      {specimen.id}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-wide text-white">
                      {specimen.name}
                    </h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                      {specimen.classification}
                    </p>
                  </div>

                  <span className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${specimen.tone}`}>
                    {specimen.status}
                  </span>
                </div>

                <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-black/24">
                  <Image
                    src={specimen.image}
                    alt={`${specimen.name} incubation preview`}
                    width={1200}
                    height={800}
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                </div>

                <p className="mt-5 min-h-[96px] text-sm leading-relaxed text-white/64">
                  {specimen.summary}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    System stack
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/74">
                    {specimen.stack}
                  </p>
                </div>

                <div className="mt-6 inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/84 transition group-hover:bg-cyan-300/12 group-hover:text-cyan-100">
                  Open specimen file
                </div>
              </div>
            </Link>
          ))}
          </div></section>)}
        </div>
      </section>
    </main>
  );
}