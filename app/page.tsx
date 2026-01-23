import ContactPanel from "../components/home/ContactPanel";
import EvolutionLog from "../components/home/EvolutionLog";
import Hero from "../components/home/Hero";
import IdeasVault from "../components/home/IdeasVault";
import SpecimenCarousel from "../components/home/SpecimenCarousel";
import Footer from "../components/layout/Footer";
import TopNav from "../components/layout/TopNav";
import { ideas } from "../lib/data/ideas";
import { specimens } from "../lib/data/specimens";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-900 overflow-x-hidden bg-[#f5f7fb]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/backgrounds/liquid-waves.svg'), url('/backgrounds/aurora-mist.svg')",
          backgroundSize: "140% 140%, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(248,250,252,0.45))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),rgba(255,255,255,0))]" />

      <TopNav />

      <div className="relative z-10">
        <Hero />
        <SpecimenCarousel specimens={specimens} />
        <IdeasVault ideas={ideas} />
        <EvolutionLog />
        <ContactPanel />
        <div className="max-w-6xl mx-auto px-6 pb-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}
