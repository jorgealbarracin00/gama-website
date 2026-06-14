

import Image from "next/image";
import Link from "next/link";

const memoirStats = [
  { label: "Echoes", value: "VOICE" },
  { label: "Ownership", value: "PRIVATE" },
  { label: "Structure", value: "BOOK" },
  { label: "Status", value: "INCUBATING" },
];

const memoirNotes = [
  {
    title: "Why it started",
    body: "Most people never write a memoir. Their stories live in conversations, family gatherings, and memories that slowly fade. Memoir was created to preserve those stories before they disappear.",
  },
  {
    title: "The Echo concept",
    body: "Instead of asking someone to write an entire book, Memoir focuses on one memory at a time. Each memory becomes an Echo, and each Echo becomes part of something larger.",
  },
  {
    title: "Legacy over engagement",
    body: "The project is intentionally moving away from social-media thinking. The goal is not likes, followers, or feeds. The goal is preserving a life story.",
  },
];

const featureCards = [
  "Voice recording",
  "Echo generation",
  "Chapter organisation",
  "People and places",
  "Narrator profile",
  "Future PDF memoir export",
];

export default function IncMemoir() {
  return (
    <main className="min-h-screen bg-[#050b16] text-white">
      <section className="relative overflow-hidden px-5 py-8 md:px-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(244,114,182,0.18),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(168,85,247,0.16),transparent_32%),linear-gradient(180deg,rgba(5,11,22,0.2),#050b16_78%)]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/incubation"
            className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/62"
          >
            ← Incubation Chamber
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-pink-200/24 bg-pink-300/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-pink-100">
                Specimen 003 · Incubating
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-[0.05em] md:text-6xl">
                Memoir
              </h1>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-300">
                AI-Assisted Memory Book
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg">
                A system designed to transform spoken memories into Echoes and gradually build a personal memoir that can be preserved for future generations.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {memoirStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/12 bg-white/[0.055] p-4">
                    <p className="text-xl font-semibold text-pink-100">{item.value}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/42">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-pink-200/16 bg-white/[0.045] p-3">
              <Image
                src="/Memoir/memoir-hero.webp"
                alt="Memoir hero"
                width={1600}
                height={1000}
                priority
                className="rounded-[26px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {memoirNotes.map((note) => (
            <article key={note.title} className="rounded-[28px] border border-white/12 bg-white/[0.045] p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-pink-300">
                Incubation note
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{note.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/62">{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-white/12 bg-white/[0.045] p-5 md:p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-pink-300">
            The memoir process
          </p>
          <h2 className="mt-3 text-3xl font-semibold">From memory to book</h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black/24">
              <Image src="/Memoir/memoir-phone.webp" alt="Memoir phone" width={900} height={1400} className="h-full max-h-[520px] w-full object-contain bg-[#020617]" />
            </div>
            <div className="space-y-4 md:col-span-2">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black/24">
                <Image src="/Memoir/memoir-book.webp" alt="Memoir book" width={1600} height={1000} className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black/24">
                <Image src="/Memoir/memoir-echoes.webp" alt="Memoir echoes" width={1600} height={1000} className="w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <div key={feature} className="rounded-2xl border border-pink-200/12 bg-pink-300/[0.055] px-4 py-4 text-sm font-semibold text-pink-50/82">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}