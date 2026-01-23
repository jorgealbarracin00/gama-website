import type { Specimen } from "../types";

export const specimens: Specimen[] = [
  {
    index: "001",
    slug: "kasu-finance",
    title: "KASU Finance",
    subtitle: "Time-based financial intelligence",
    description:
      "Weekly cash-flow simulation, goal feasibility under constraints, and credit behavior modeling - powered by ChronoFlow.",
    mission:
      "Turn weekly time into a financial planning advantage with simulations that show what is possible before decisions are made.",
    currentBuild:
      "Building a goals timeline that rebalances budgets automatically and flags policy conflicts early.",
    signals:
      "Sample signals: forecast accuracy, weekly cash delta, and risk score stability.",
    gallery: [
      { title: "Projection canvas", subtitle: "Cashflow week map" },
      { title: "Goal feasibility", subtitle: "Constraint coverage" },
      { title: "Policy effects", subtitle: "Credit behavior" },
    ],
    statusLabel: "Actively evolving",
    statusDot: "emerald",
    tags: ["iOS", "ChronoFlow", "AI Reports"],
    hrefPrimary: "#kasu",
    hrefSecondary: "#log",
  },
  {
    index: "002",
    slug: "tensland",
    title: "Tensland",
    subtitle: "Stigma-free social discovery",
    description:
      "A gamified map of zones where people meet through rooms, games, and peer-rated traits - designed to feel safe and positive.",
    mission:
      "Create a safe social layer that encourages real-life connection without pressure or stigma.",
    currentBuild:
      "Designing the zone map and community rules engine with layered moderation flows.",
    signals:
      "Sample signals: trust score lift, report resolution time, and repeat visit rate.",
    gallery: [
      { title: "Zone map", subtitle: "Live discovery" },
      { title: "Room layer", subtitle: "Social games" },
      { title: "Safety core", subtitle: "Moderation tools" },
    ],
    statusLabel: "Incubating",
    statusDot: "amber",
    tags: ["Community", "Moderation", "Live Events"],
    hrefPrimary: "#ideas",
    hrefSecondary: "#contact",
  },
  {
    index: "003",
    slug: "void",
    title: "VOID",
    subtitle: "Voice-first command interface",
    description:
      "A windowless assistant for structured organizations. Speak tasks, get actions. Minimal UI. Maximum intent.",
    mission:
      "Replace cluttered dashboards with a voice-first workflow that translates intent into action.",
    currentBuild:
      "Prototyping the intent grammar and audit trail for verified actions.",
    signals:
      "Sample signals: task completion time, command accuracy, and audit approval rate.",
    gallery: [
      { title: "Command loop", subtitle: "Intent to action" },
      { title: "Voice stack", subtitle: "Recognition layer" },
      { title: "Audit trail", subtitle: "Verified actions" },
    ],
    statusLabel: "Concept phase",
    statusDot: "violet",
    tags: ["Voice", "Automation", "Workflows"],
    hrefPrimary: "#ideas",
    hrefSecondary: "#contact",
  },
  {
    index: "004",
    slug: "chronoflow",
    title: "ChronoFlow",
    subtitle: "Temporal simulation engine",
    description:
      "The engine behind time-based planning across multiple systems. Consistent weeks, consistent truth.",
    mission:
      "Provide a single time model that keeps projections, budgets, and operations consistent across products.",
    currentBuild:
      "Finalizing the week-based ledger model and multi-system sync pipeline.",
    signals:
      "Sample signals: projection variance, sync latency, and model convergence.",
    gallery: [
      { title: "Ledger core", subtitle: "Time model" },
      { title: "System sync", subtitle: "Multi-app data" },
      { title: "Forecast engine", subtitle: "Scenario stack" },
    ],
    statusLabel: "Internal engine",
    statusDot: "slate",
    tags: ["Engine", "Projections", "Ledger"],
    hrefPrimary: "#log",
    hrefSecondary: "#contact",
  },
];
