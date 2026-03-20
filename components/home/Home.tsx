import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-[#050b16] text-white"
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

      <header className="relative z-20 flex items-center justify-between px-8 pt-5 md:px-12 md:pt-6">
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

      <div className="relative z-10 flex h-[calc(100vh-92px)] flex-col items-center justify-start px-6 pt-10 md:h-[calc(100vh-96px)] md:pt-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-semibold tracking-[0.08em] text-white md:text-6xl xl:text-7xl">
            GAMA DYNAMICS
          </h1>

          <p className="mt-4 text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-2xl xl:text-3xl">
            Experimental Systems Lab
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/82 md:text-xl xl:text-2xl">
            Digital systems grown, tested, and deployed for real life.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-3xl items-center gap-5 text-white/90 md:mt-10">
            <div className="h-px flex-1 bg-white/18" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/92 md:text-sm xl:text-base">
              Active Specimens
            </p>
            <div className="h-px flex-1 bg-white/18" />
          </div>
        </div>

        {/* Specimen Pods (fake 3D stage) */}
        <div className="relative z-10 mt-4 flex w-full flex-1 items-start justify-center px-6 pb-8 md:mt-5 md:pb-10">
          <div className="relative h-[300px] w-full max-w-5xl md:h-[360px] xl:h-[400px]">

            {/* Center pod */}
            <div
              className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2"
              style={{ transform: "translate(-50%, -50%) scale(1.1)", zIndex: 30 }}
            >
              <div className="flex h-[150px] w-[250px] items-center justify-center rounded-2xl bg-green-500/80 text-black font-semibold shadow-[0_0_40px_rgba(34,197,94,0.4)] md:h-[150px] md:w-[250px] xl:h-[160px] xl:w-[260px]">
                CashCast
              </div>
            </div>

            {/* Left pod */}
            <div
              className="absolute left-[7%] top-[44%]"
              style={{ transform: "scale(0.85)", opacity: 0.7, zIndex: 20 }}
            >
              <div className="flex h-[126px] w-[220px] items-center justify-center rounded-2xl bg-green-500/60 text-black font-semibold shadow-[0_0_25px_rgba(34,197,94,0.25)] md:h-[132px] md:w-[230px] xl:h-[140px] xl:w-[240px]">
                VOID
              </div>
            </div>

            {/* Right pod */}
            <div
              className="absolute right-[7%] top-[44%]"
              style={{ transform: "scale(0.85)", opacity: 0.7, zIndex: 20 }}
            >
              <div className="flex h-[126px] w-[220px] items-center justify-center rounded-2xl bg-green-500/60 text-black font-semibold shadow-[0_0_25px_rgba(34,197,94,0.25)] md:h-[132px] md:w-[230px] xl:h-[140px] xl:w-[240px]">
                Tensland
              </div>
            </div>

            {/* Back pod */}
            <div
              className="absolute left-1/2 top-[18%] -translate-x-1/2"
              style={{ transform: "scale(0.7)", opacity: 0.5, zIndex: 10 }}
            >
              <div className="flex h-[108px] w-[200px] items-center justify-center rounded-2xl bg-green-500/50 text-black font-semibold shadow-[0_0_20px_rgba(34,197,94,0.2)] md:h-[114px] md:w-[210px] xl:h-[120px] xl:w-[220px]">
                ChronoFlow
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
