"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Specimen = {
  id: string;
  name: string;
  subtitle: string;
  status: "live" | "incubating";
  tone: string;
  href: string;
  incubationHref: string;
  summary: string;
  features: string[];
  principles: string[];
  difference: string;
  cardImage?: string;
  detailImages?: string[];
  videoSrc?: string;
  heroLine?: string;
  origin?: string;
  buildStory?: string;
  challenges?: string[];
  evolution?: string[];
  currentStage?: string;
  whatItDoes?: string;
  whoItHelps?: string;
  uniqueAdvantages?: string[];
};

type VisibleCard = {
  specimen: Specimen;
  layer: "hiddenLeft" | "active" | "next" | "third" | "hiddenRight";
};

const specimens: Specimen[] = [
  {
    id: "SPECIMEN 001",
    name: "GroceryMaster",
    subtitle: "Shared Family Shopping System",
    status: "live",
    href: "https://grocerymaster.gamadynamics.com.au",
    incubationHref: "/incubation/grocerymaster",
    summary:
      "A real-time shared grocery system designed for households that shop together across multiple devices.",
    features: ["Shared living list", "Shopping mode", "Pantry magnets"],
    principles: ["One living list", "Family first", "Reduce forgotten items"],
    difference:
      "Built around household collaboration rather than individual shopping.",
    cardImage: "/GroceryMaster/GroceryMaster.webp",
    detailImages: [
      "/GroceryMaster/GroceryMaster1.webp",
      "/GroceryMaster/GroceryMaster2.webp",
      "/GroceryMaster/GroceryMaster3.webp",
    ],
    videoSrc: "/GroceryMaster/GroceryMasterVID.mp4",
    heroLine: "One living list. Everyone synced.",
    origin:
      "GroceryMaster was born from a real household problem: grocery lists do not live in one place. One person remembers milk, another person buys eggs, someone forgets nappies, and the list becomes scattered across memory, messages, and last-minute calls.",
    buildStory:
      "The first version started as a simple shared list. Then it evolved into a family shopping system with groups, one home list, country-based shops, Shopping Mode, pantry magnets, duplicate warnings, and real-time syncing across devices.",
    challenges: [
      "Making the list feel alive across multiple family devices.",
      "Handling Apple review feedback around iPad layouts and crowded screens.",
      "Designing a subscription model where one sponsor can cover the household.",
    ],
    evolution: [
      "V0.00001: simple grocery list concept.",
      "V0.1: shared household group and real-time list syncing.",
      "V0.5: Shopping Mode, shops, pantry magnets, duplicate detection.",
      "V1.0: iPhone, iPad, StoreKit, Firestore, and App Store deployment path.",
    ],
    currentStage:
      "Deployed system. GroceryMaster is the first family-facing specimen to escape the lab and become a real product.",
    whatItDoes:
      "GroceryMaster gives a household one shared grocery list that updates in real time. Family members can add items, organise them by shop, use pantry magnets for common essentials, and switch into Shopping Mode when someone is actually at the store.",
    whoItHelps:
      "It helps busy families, couples, parents, shared homes, and anyone who has ever asked: did we already buy that? Instead of sending messages, screenshots, or reminders, everyone works from the same living list.",
    uniqueAdvantages: [
      "One household list instead of multiple personal lists.",
      "Shopping Mode shows when someone is actively shopping.",
      "Pantry magnets turn repeated essentials into fast taps.",
      "Duplicate detection helps avoid buying or adding the same thing again.",
      "The subscription is designed around the family group, not only one user.",
    ],
    tone:
      "bg-[linear-gradient(180deg,rgba(34,197,94,0.72),rgba(21,128,61,0.60))] border border-green-300/30",
  },
  {
    id: "SPECIMEN 002",
    name: "PVD Assistant",
    subtitle: "Industrial Coating Intelligence",
    status: "live",
    href: "https://pvdassistant.gamadynamics.com.au",
    incubationHref: "/incubation/pvdassistant",
    summary:
      "A manufacturing assistant built to improve color matching, process tracking, historical analysis, and machine operation in PVD coating environments.",
    features: ["Run history", "Color Lab", "Machine intelligence"],
    principles: ["Capture knowledge", "Reduce rework", "Learn from history"],
    difference:
      "Designed from real factory experience instead of theoretical manufacturing workflows.",
    cardImage: "/PVDAssistant/PVDAssistant.webp",
    detailImages: [
      "/PVDAssistant/PVDAssistant1.webp",
      "/PVDAssistant/PVDAssistant2.webp",
      "/PVDAssistant/PVDAssistant3.webp",
    ],
    videoSrc: "/PVDAssistant/PVDAssistantVID.mp4",
    heroLine: "Factory knowledge captured before it disappears.",
    origin:
      "PVD Assistant came from the factory floor. The problem was not only color matching; it was the loss of process knowledge. Runs, machine conditions, cleaning history, gas changes, rework, and operator experience were happening every day, but most of that information was not being captured in a useful way.",
    buildStory:
      "The app grew from run logging into a stronger historical engine. It now treats every run as data: machine, color, time bucket, oven state, cleaning state, chamber fullness, LAB values, and process notes. The goal is to turn daily manufacturing experience into a memory system for better decisions.",
    challenges: [
      "Turning messy real-world factory conditions into structured data.",
      "Building recommendations without pretending the process is perfectly predictable.",
      "Separating UI experiments from the historical engine so the app can keep evolving.",
    ],
    evolution: [
      "V0.00001: basic PVD run notes and machine tracking.",
      "V0.2: machine workspaces for M3 and M4.",
      "V0.5: Color Lab, LAB comparison, thresholds, and historical matching.",
      "V1.0: deployed internal manufacturing assistant with stronger engine direction.",
    ],
    currentStage:
      "Deployed system. PVD Assistant proves Gama Dynamics can build software from real industrial pain, not only consumer ideas.",
    whatItDoes:
      "PVD Assistant records coating runs, machine conditions, color data, cleaning events, and historical outcomes. It is designed to make the invisible knowledge of a PVD process easier to capture, compare, and reuse.",
    whoItHelps:
      "It helps operators, supervisors, and small manufacturing teams who depend on experience, memory, and handwritten notes to understand why a color passed, failed, shifted, or repeated successfully.",
    uniqueAdvantages: [
      "Built from real PVD factory work, not generic production theory.",
      "Connects color results with machine history and process conditions.",
      "Treats every run as future training data for better decisions.",
      "Supports shop-floor reality: cleaning, oven time, chamber state, gas changes, and rework.",
      "Designed to preserve operator knowledge before it disappears.",
    ],
    tone:
      "bg-[linear-gradient(180deg,rgba(59,130,246,0.72),rgba(29,78,216,0.60))] border border-blue-300/30",
  },
  {
    id: "SPECIMEN 003",
    name: "Memoir",
    subtitle: "AI-Assisted Memory Book",
    status: "incubating",
    href: "https://memoir.gamadynamics.com.au",
    incubationHref: "/incubation/memoir",
    summary:
      "Memoir helps people record spoken memories and transform them into polished personal stories that can grow into a private life book.",
    features: ["Voice-to-memory creation", "AI-polished Echoes", "Personal memoir structure"],
    principles: ["User-owned memories", "Story over transcript", "Private by design"],
    difference:
      "Memoir is not a social network. It is a private place for memories to become a book.",
    tone:
      "bg-[linear-gradient(180deg,rgba(244,114,182,0.64),rgba(157,23,77,0.56))] border border-pink-300/30",
  },
  {
    id: "SPECIMEN 004",
    name: "CashCast",
    subtitle: "Financial Forecasting Engine",
    status: "incubating",
    href: "https://cashcast.gamadynamics.com.au",
    incubationHref: "/incubation/cashcast",
    summary:
      "CashCast is a forward-looking money simulator for families and individuals who want to test financial decisions before they become real-life pressure.",
    features: ["Long-term cash-flow projection", "What-if financial scenarios", "Goals, purchases, and life-event simulation"],
    principles: ["Future over past", "Clarity over spreadsheets", "Planning before panic"],
    difference:
      "Most finance apps explain what already happened. CashCast focuses on what could happen next.",
    tone:
      "bg-[linear-gradient(180deg,rgba(16,185,129,0.88),rgba(5,150,105,0.72))] border border-emerald-300/30",
  },
  {
    id: "SPECIMEN 005",
    name: "GamaRepair",
    subtitle: "Repair Workflow Assistant",
    status: "incubating",
    href: "https://gamarepair.gamadynamics.com.au",
    incubationHref: "/incubation/gamarepair",
    summary:
      "GamaRepair explores how repair jobs, parts, notes, photos, customer updates, and workflow history can be organized into one practical system.",
    features: ["Repair job tracking", "Photo and note history", "Workflow status updates"],
    principles: ["Every repair has a story", "Reduce forgotten details", "Make progress visible"],
    difference:
      "GamaRepair is designed around the messy reality of repair work, not a perfect office workflow.",
    tone:
      "bg-[linear-gradient(180deg,rgba(250,204,21,0.62),rgba(180,83,9,0.54))] border border-amber-300/30",
  },
  {
    id: "SPECIMEN 006",
    name: "ExpenseTrackWatch",
    subtitle: "Fast Expense Capture",
    status: "incubating",
    href: "https://expensetrackwatch.gamadynamics.com.au",
    incubationHref: "/incubation/expensetrackwatch",
    summary:
      "ExpenseTrackWatch is a lightweight expense capture idea focused on speed, habit, and reducing friction when recording small daily spending.",
    features: ["Quick expense entry", "Watch-first interaction ideas", "Small spending awareness"],
    principles: ["Capture before forgetting", "Speed beats complexity", "Small habits reveal patterns"],
    difference:
      "Instead of asking users to manage a full finance system, ExpenseTrackWatch focuses on the instant of spending.",
    tone:
      "bg-[linear-gradient(180deg,rgba(129,140,248,0.66),rgba(67,56,202,0.58))] border border-indigo-300/30",
  },
  {
    id: "SPECIMEN 007",
    name: "Tensland",
    subtitle: "Strategy World Builder",
    status: "incubating",
    href: "https://tensland.gamadynamics.com.au",
    incubationHref: "/incubation/tensland",
    summary:
      "Tensland is a world-building and strategy experiment focused on turning maps, resources, factions, and decisions into a playable system.",
    features: ["World and map concepts", "Faction and resource systems", "Strategy simulation ideas"],
    principles: ["Systems create stories", "Simple rules can grow complexity", "Make strategy visual"],
    difference:
      "Tensland starts with systems first, then lets the world grow from the rules.",
    tone:
      "bg-[linear-gradient(180deg,rgba(217,70,239,0.66),rgba(126,34,206,0.58))] border border-fuchsia-300/30",
  },
  {
    id: "SPECIMEN 008",
    name: "VOID",
    subtitle: "Experimental AI System",
    status: "incubating",
    href: "https://void.gamadynamics.com.au",
    incubationHref: "/incubation/void",
    summary:
      "VOID is an experimental space for testing artificial intelligence interfaces, strange workflows, and systems that do not fit inside normal productivity software.",
    features: ["AI-assisted experiments", "Interface prototypes", "System behavior testing"],
    principles: ["Explore the unknown", "Prototype before polishing", "Use mystery with purpose"],
    difference:
      "VOID is not built to look normal first. It is built to discover what might become useful later.",
    tone:
      "bg-[linear-gradient(180deg,rgba(56,189,248,0.65),rgba(14,116,144,0.58))] border border-cyan-300/30",
  },
];

const cardLayerClasses: Record<VisibleCard["layer"], string> = {
  hiddenLeft:
    "left-[-7%] top-[68%] z-0 h-[266px] w-[152px] -translate-x-1/2 -translate-y-1/2 opacity-0 md:h-[334px] md:w-[190px] xl:h-[378px] xl:w-[214px] pointer-events-none",
  active:
    "left-[34%] top-[68%] z-30 h-[286px] w-[164px] -translate-x-1/2 -translate-y-1/2 opacity-100 md:h-[360px] md:w-[204px] xl:h-[412px] xl:w-[232px]",
  next:
    "left-[54%] top-[68%] z-20 h-[252px] w-[146px] -translate-x-1/2 -translate-y-1/2 opacity-84 md:h-[316px] md:w-[180px] xl:h-[360px] xl:w-[204px]",
  third:
    "left-[71%] top-[68%] z-10 h-[220px] w-[126px] -translate-x-1/2 -translate-y-1/2 opacity-60 md:h-[272px] md:w-[154px] xl:h-[310px] xl:w-[176px]",
  hiddenRight:
    "left-[89%] top-[68%] z-0 h-[202px] w-[116px] -translate-x-1/2 -translate-y-1/2 opacity-0 md:h-[244px] md:w-[138px] xl:h-[276px] xl:w-[158px] pointer-events-none",
};

const cardLayerStyles: Record<VisibleCard["layer"], React.CSSProperties> = {
  hiddenLeft: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(14deg) rotateZ(2deg) scale(0.92)",
    filter: "blur(1.4px) saturate(0.72)",
  },
  active: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(-2deg) rotateZ(-0.8deg) scale(1.07)",
    filter: "blur(0px) saturate(1.04)",
  },
  next: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(-9deg) rotateZ(-1.8deg) scale(0.98)",
    filter: "blur(0.28px) saturate(0.94)",
  },
  third: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(-14deg) rotateZ(-3.5deg) scale(0.93)",
    filter: "blur(0.9px) saturate(0.8)",
  },
  hiddenRight: {
    transform: "translate(-50%, -50%) perspective(1200px) rotateY(-20deg) rotateZ(-5deg) scale(0.84)",
    filter: "blur(1.6px) saturate(0.66)",
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedSpecimen = specimens[selectedIndex];

  const visibleCards = useMemo<VisibleCard[]>(() => {
    const previous = specimens[selectedIndex - 1];
    const active = specimens[selectedIndex];
    const next = specimens[selectedIndex + 1];
    const third = specimens[selectedIndex + 2];
    const incomingRight = specimens[selectedIndex + 3];

    return [
      previous ? { specimen: previous, layer: "hiddenLeft" } : null,
      active ? { specimen: active, layer: "active" } : null,
      next ? { specimen: next, layer: "next" } : null,
      third ? { specimen: third, layer: "third" } : null,
      incomingRight ? { specimen: incomingRight, layer: "hiddenRight" } : null,
    ].filter(Boolean) as VisibleCard[];
  }, [selectedIndex]);

  function selectPrevious() {
    setSelectedIndex((current) => clamp(current - 1, 0, specimens.length - 1));
  }

  function selectNext() {
    setSelectedIndex((current) => clamp(current + 1, 0, specimens.length - 1));
  }

  const canGoLeft = selectedIndex > 0;
  const canGoRight = selectedIndex < specimens.length - 1;

  return (
    <>
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
          <div className="group relative flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:bg-white/15">
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(120,180,255,0.25),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 rounded-xl animate-[pulse_6s_ease-in-out_infinite] bg-[radial-gradient(circle,rgba(120,180,255,0.6),transparent_70%)] opacity-[0.08]" />

            <Image
              src="/brand/logo-transp.png"
              alt="GAMA Dynamics"
              width={210}
              height={56}
              className="relative h-10 w-auto object-contain brightness-110 transition duration-500 group-hover:brightness-125 md:h-12"
              priority
            />
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-lg text-white/80 md:flex xl:gap-10">
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

      <div className="relative z-10 flex h-[calc(100vh-92px)] items-center px-6 pb-8 pt-6 md:h-[calc(100vh-96px)] md:px-10 md:pb-10 md:pt-4 xl:px-14">
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-[0.9fr_2.1fr] md:gap-8 xl:grid-cols-[0.85fr_2.15fr] xl:gap-10">
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-2xl font-semibold tracking-[0.08em] text-white md:text-3xl xl:text-4xl">
              GAMA DYNAMICS
            </h1>

            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300 md:text-sm xl:text-base">
              Experimental Systems Lab
            </p>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/78 md:text-sm xl:text-base">
              Digital systems grown, tested, and deployed for real life.
            </p>
          </div>

          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="mb-4 flex w-full max-w-[760px] items-center gap-4 text-white/90 md:mb-6">
              <div className="h-px flex-1 bg-white/18" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/92 md:text-xs xl:text-sm">
                Active Specimens
              </p>
              <div className="h-px flex-1 bg-white/18" />
            </div>

            <div className="relative z-10 flex w-full items-center justify-center pb-2 md:pb-0">
              <div className="relative mt-3 h-[360px] w-full max-w-[1080px] md:mt-5 md:h-[450px] xl:mt-6 xl:h-[510px]">
                {visibleCards.map(({ specimen, layer }) => (
                  <div
                    key={specimen.name}
                    className={`absolute ${cardLayerClasses[layer]}`}
                    style={{
                      ...cardLayerStyles[layer],
                      transition:
                        "left 520ms cubic-bezier(0.22, 1, 0.36, 1), top 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms cubic-bezier(0.22, 1, 0.36, 1), filter 520ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {layer === "active" && (
                      <div className="pointer-events-none absolute inset-[-18px] rounded-[36px] bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_62%)] blur-[18px]" />
                    )}
                    <a
                      href={specimen.status === "live" ? specimen.href : specimen.incubationHref}
                      target={specimen.status === "live" ? "_blank" : undefined}
                      rel={specimen.status === "live" ? "noopener noreferrer" : undefined}
                      className={`group relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] text-white shadow-[0_0_40px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] ${specimen.tone} ${layer === "active" ? "animate-[pulse_4.8s_ease-in-out_infinite] shadow-[0_0_65px_rgba(255,255,255,0.14)]" : ""}`}
                    >
                      {specimen.cardImage && (
                        <>
                          <Image
                            src={specimen.cardImage}
                            alt={`${specimen.name} preview`}
                            fill
                            className="object-cover opacity-92 brightness-[1.08] contrast-[1.08]"
                            sizes="(max-width: 768px) 164px, (max-width: 1280px) 204px, 232px"
                            quality={70}
                            priority={layer === "active"}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,18,0.03),rgba(2,7,18,0.08)_52%,rgba(2,7,18,0.22))]" />
                        </>
                      )}
                      {specimen.name === "CashCast" && (
                        <>
                          <Image
                            src="/backgrounds/cashcast-PREVIEW.webp"
                            alt="CashCast preview"
                            fill
                            className="object-cover opacity-90 brightness-[1.1] contrast-[1.08]"
                            sizes="(max-width: 768px) 164px, (max-width: 1280px) 204px, 232px"
                            quality={70}
                            priority={layer === "active"}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,20,0.04),rgba(3,9,20,0.10)_52%,rgba(3,9,20,0.25))]" />
                        </>
                      )}
                      {specimen.name === "VOID" && (
                        <>
                          <Image
                            src="/backgrounds/void-PREVIEW.webp"
                            alt="VOID preview"
                            fill
                            className="object-cover opacity-92 brightness-[1.06] contrast-[1.08]"
                            sizes="(max-width: 768px) 164px, (max-width: 1280px) 204px, 232px"
                            quality={70}
                            priority={layer === "active"}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.02),rgba(8,10,18,0.06)_52%,rgba(8,10,18,0.18))]" />
                        </>
                      )}
                      {specimen.name === "Tensland" && (
                        <>
                          <Image
                            src="/backgrounds/tensland-PREVIEW.webp"
                            alt="Tensland preview"
                            fill
                            className="object-cover opacity-92 brightness-[1.06] contrast-[1.08]"
                            sizes="(max-width: 768px) 164px, (max-width: 1280px) 204px, 232px"
                            quality={70}
                            priority={layer === "active"}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.02),rgba(8,10,18,0.06)_52%,rgba(8,10,18,0.18))]" />
                        </>
                      )}
                      {specimen.name === "GamaRepair" && (
                        <>
                          <Image
                            src="/backgrounds/gamarepair-PREVIEW.webp"
                            alt="GamaRepair preview"
                            fill
                            className="object-cover opacity-92 brightness-[1.08] contrast-[1.1]"
                            sizes="(max-width: 768px) 164px, (max-width: 1280px) 204px, 232px"
                            quality={70}
                            priority={layer === "active"}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,18,0.03),rgba(2,7,18,0.08)_52%,rgba(2,7,18,0.22))]" />
                        </>
                      )}
                      {specimen.name === "ExpenseTrackWatch" && (
                        <>
                          <Image
                            src="/backgrounds/expense_PREVIEW.webp"
                            alt="ExpenseTrackWatch preview"
                            fill
                            className="object-cover opacity-92 brightness-[1.08] contrast-[1.1]"
                            sizes="(max-width: 768px) 164px, (max-width: 1280px) 204px, 232px"
                            quality={70}
                            priority={layer === "active"}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,18,0.03),rgba(2,7,18,0.08)_52%,rgba(2,7,18,0.22))]" />
                        </>
                      )}
                      {specimen.name === "Memoir" && (
                        <>
                          <Image
                            src="/backgrounds/memoir-PREVIEW.webp"
                            alt="Memoir preview"
                            fill
                            className="object-cover opacity-92 brightness-[1.06] contrast-[1.08]"
                            sizes="(max-width: 768px) 164px, (max-width: 1280px) 204px, 232px"
                            quality={70}
                            priority={layer === "active"}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,12,0.03),rgba(6,6,12,0.08)_52%,rgba(6,6,12,0.22))]" />
                        </>
                      )}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_52%)]" />
                      <div className="absolute inset-x-3 top-3 h-10 rounded-2xl border border-white/12 bg-white/6" />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.34))]" />
                      <div className="absolute inset-0 rounded-[28px] border border-white/14" />

                      <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 md:p-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.24em] text-white/86 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] md:text-[11px]">
                            {specimen.id}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] md:text-xl xl:text-2xl">
                            {specimen.name}
                          </h3>
                          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/72 drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)] md:text-[10px]">
                            {specimen.status === "live" ? "Open app site" : "Open incubation"}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}

                <div className="pointer-events-none absolute inset-x-[16%] bottom-5 h-16 rounded-full bg-cyan-400/10 blur-[48px] md:bottom-10" />

                <button
                  type="button"
                  aria-label="Previous specimen"
                  onClick={selectPrevious}
                  disabled={!canGoLeft}
                  className="absolute left-[12%] top-[82%] z-50 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/12 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 md:h-16 md:w-16 md:text-2xl"
                >
                  <span className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full">
                    <Image
                      src="/arrow1.png"
                      alt="Previous"
                      fill
                      className="object-contain scale-[1.25] opacity-95"
                      sizes="40px"
                    />
                  </span>
                </button>

                <button
                  type="button"
                  aria-label="Next specimen"
                  onClick={selectNext}
                  disabled={!canGoRight}
                  className="absolute left-[82%] top-[82%] z-50 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/12 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 md:h-16 md:w-16 md:text-2xl"
                >
                  <span className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full">
                    <Image
                      src="/arrow1.png"
                      alt="Next"
                      fill
                      className="object-contain scale-[1.25] opacity-95"
                      sizes="40px"
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </span>
                </button>

                <div className="absolute bottom-[14%] left-[50%] z-40 flex -translate-x-1/2 items-center gap-2 md:bottom-[11%]">
                  {specimens.map((specimen, index) => (
                    <button
                      key={specimen.name}
                      type="button"
                      aria-label={`Select ${specimen.name}`}
                      onClick={() => setSelectedIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === selectedIndex ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/55"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#050b16] px-6 py-16 text-white md:px-10 md:py-20 xl:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0),rgba(5,11,22,0.9)_35%,rgba(5,11,22,1))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Selected Specimen Briefing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-wide text-white md:text-5xl">
              {selectedSpecimen.name}
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/48 md:text-sm">
              {selectedSpecimen.subtitle}
            </p>
            {selectedSpecimen.heroLine && (
              <p className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                {selectedSpecimen.heroLine}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={selectPrevious}
              disabled={!canGoLeft}
              className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/78 transition hover:bg-white/14 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={selectNext}
              disabled={!canGoRight}
              className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300/16 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
            </button>
          </div>
        </div>

        <div className="space-y-12">
          {selectedSpecimen.cardImage && (
            <div className="relative min-h-[360px] overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.32)] md:min-h-[520px]">
              <Image
                src={selectedSpecimen.cardImage}
                alt={`${selectedSpecimen.name} main preview`}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 1180px"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,20,0.18),rgba(3,9,20,0.02)_45%,rgba(3,9,20,0.34))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/18 bg-black/28 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/82 backdrop-blur-md">
                {selectedSpecimen.status === "live" ? "Deployed system" : "Incubating system"}
              </div>
            </div>
          )}

          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                {selectedSpecimen.id}
              </span>
              <span className="rounded-full border border-white/16 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                {selectedSpecimen.status === "live" ? "Live" : "Incubating"}
              </span>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/76 md:text-xl">
              {selectedSpecimen.summary}
            </p>

            {selectedSpecimen.origin && (
              <div className="mt-10 border-l border-cyan-200/24 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
                  Why it was born
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.origin}
                </p>
              </div>
            )}

            {selectedSpecimen.buildStory && (
              <div className="mt-10 border-l border-white/14 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/86">
                  How it was built
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.buildStory}
                </p>
              </div>
            )}

            {selectedSpecimen.detailImages?.[0] && (
              <div className="my-12 relative min-h-[720px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.045] shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:ml-[-4rem] md:mr-[12rem]">
                <Image
                  src={selectedSpecimen.detailImages[0]}
                  alt={`${selectedSpecimen.name} phone portrait screenshot`}
                  fill
                  className="object-contain bg-black/10"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            )}


            {selectedSpecimen.whatItDoes && (
              <div className="mt-10 border-l border-emerald-200/20 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-100/90">
                  What it does
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.whatItDoes}
                </p>
              </div>
            )}

            {selectedSpecimen.detailImages?.[1] && (
              <div className="my-12 relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.045] shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:ml-[8rem] md:mr-[-4rem]">
                <Image
                  src={selectedSpecimen.detailImages[1]}
                  alt={`${selectedSpecimen.name} iPad landscape screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
              </div>
            )}

            {selectedSpecimen.whoItHelps && (
              <div className="mt-10 border-l border-white/14 pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/86">
                  Who it helps
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                  {selectedSpecimen.whoItHelps}
                </p>
              </div>
            )}

            {selectedSpecimen.detailImages?.[2] && (
              <div className="my-12 relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.045] shadow-[0_18px_55px_rgba(0,0,0,0.24)] md:ml-[-6rem] md:mr-[6rem]">
                <Image
                  src={selectedSpecimen.detailImages[2]}
                  alt={`${selectedSpecimen.name} second iPad landscape screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
              </div>
            )}

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                  Features
                </p>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/66">
                  {selectedSpecimen.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                  Principles
                </p>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/66">
                  {selectedSpecimen.principles.map((principle) => (
                    <li key={principle}>• {principle}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-l border-cyan-200/24 pl-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
                What makes it different
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68 md:text-lg">
                {selectedSpecimen.difference}
              </p>
            </div>

            {selectedSpecimen.uniqueAdvantages && selectedSpecimen.uniqueAdvantages.length > 0 && (
              <div className="mt-10 rounded-[28px] border border-emerald-200/16 bg-emerald-300/8 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-100/90">
                  What we have that others usually do not
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/68 md:grid-cols-2 md:text-base">
                  {selectedSpecimen.uniqueAdvantages.map((advantage) => (
                    <li key={advantage}>• {advantage}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedSpecimen.challenges && selectedSpecimen.challenges.length > 0 && (
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/12 bg-white/[0.045] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                    Problems faced
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/66 md:text-base">
                    {selectedSpecimen.challenges.map((challenge) => (
                      <li key={challenge}>• {challenge}</li>
                    ))}
                  </ul>
                </div>

                {selectedSpecimen.evolution && selectedSpecimen.evolution.length > 0 && (
                  <div className="rounded-[28px] border border-white/12 bg-white/[0.045] p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92">
                      Evolution path
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/66 md:text-base">
                      {selectedSpecimen.evolution.map((step) => (
                        <li key={step}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {selectedSpecimen.currentStage && (
              <div className="mt-10 rounded-[28px] border border-cyan-200/18 bg-cyan-300/8 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/90">
                  Current stage
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                  {selectedSpecimen.currentStage}
                </p>
              </div>
            )}

            {selectedSpecimen.videoSrc && (
              <div className="mt-14 overflow-hidden rounded-[34px] border border-white/12 bg-black/24 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <video
                  src={selectedSpecimen.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full rounded-[26px] bg-black object-cover"
                />
                <p className="mt-3 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/48">
                  Available on AppStore
                </p>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={selectedSpecimen.incubationHref}
                className="rounded-full border border-white/18 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/88 transition hover:bg-white/18"
              >
                Incubation chamber
              </Link>
              <a
                href={selectedSpecimen.status === "live" ? selectedSpecimen.href : selectedSpecimen.incubationHref}
                target={selectedSpecimen.status === "live" ? "_blank" : undefined}
                rel={selectedSpecimen.status === "live" ? "noopener noreferrer" : undefined}
                className="rounded-full border border-cyan-200/24 bg-cyan-300/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300/16"
              >
                {selectedSpecimen.status === "live" ? "Open app site" : "View build notes"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
