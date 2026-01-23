import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
  return (
    <header className="relative z-10">
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.12)] ring-1 ring-white/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo+text.png"
              alt="Gama Dynamics"
              width={170}
              height={60}
              priority
            />
            <span
              className="flex-1 text-center sm:text-left font-semibold tracking-[0.2em] text-slate-800 uppercase [font-family:var(--font-brand)]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw + 0.5rem, 1.6rem)" }}
            >
              GAMA Dynamics
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link className="hover:text-slate-900 transition" href="#specimens">
              Specimens
            </Link>
            <Link className="hover:text-slate-900 transition" href="#ideas">
              App Ideas
            </Link>
            <Link className="hover:text-slate-900 transition" href="#log">
              Evolution Log
            </Link>
            <Link
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-slate-800 hover:bg-white transition"
              href="#contact"
            >
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <Link
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800"
              href="#specimens"
            >
              Enter
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
