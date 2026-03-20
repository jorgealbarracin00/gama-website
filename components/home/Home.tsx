import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#050b16] text-white"
      style={{
        backgroundImage: "url('/backgrounds/home-hero-hd.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,180,255,0.18),rgba(0,0,0,0)_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,20,0.32),rgba(3,9,20,0.55)_55%,rgba(3,9,20,0.72))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,18,0.7),rgba(2,7,18,0.22)_30%,rgba(2,7,18,0.22)_70%,rgba(2,7,18,0.7))]" />

      <header className="relative z-20 flex items-center justify-between px-8 md:px-12 pt-7">
        <div className="flex items-center gap-4">
          <div className="group relative flex items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.03] hover:bg-white/15">
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(120,180,255,0.25),transparent_70%)]" />

            {/* pulse effect */}
            <div className="pointer-events-none absolute inset-0 rounded-xl animate-[pulse_6s_ease-in-out_infinite] opacity-[0.08] bg-[radial-gradient(circle,rgba(120,180,255,0.6),transparent_70%)]" />

            <Image
              src="/brand/logo-transp.png"
              alt="GAMA Dynamics"
              width={210}
              height={56}
              className="relative h-10 md:h-12 w-auto object-contain brightness-110 transition duration-500 group-hover:brightness-125"
              priority
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-white/80 text-lg">
          <Link href="#specimens" className="transition hover:text-white">
            Specimens
          </Link>
          <Link href="#ideas" className="transition hover:text-white">
            Incubation Chamber
          </Link>
          <Link href="#evolution" className="transition hover:text-white">
            Evolution Log
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-white/20"
          >
            Contact
          </Link>
        </nav>
      </header>

      <div className="relative z-10 flex min-h-screen items-start justify-center px-6 pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-semibold tracking-[0.08em] text-white md:text-7xl">
            GAMA DYNAMICS
          </h1>

          <p className="mt-5 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-3xl">
            Experimental Systems Lab
          </p>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-white/82 md:text-2xl">
            Digital systems grown, tested, and deployed for real life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#specimens"
              className="min-w-[270px] rounded-full border border-cyan-300/70 bg-cyan-400/14 px-10 py-4 text-lg font-semibold text-white shadow-[0_0_35px_rgba(56,189,248,0.25)] backdrop-blur-md transition hover:bg-cyan-400/22"
            >
              Inspect Active Specimens
            </Link>

            <Link
              href="#ideas"
              className="min-w-[250px] rounded-full border border-white/45 bg-white/10 px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:bg-white/18"
            >
              View Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
