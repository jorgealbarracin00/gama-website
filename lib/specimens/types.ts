export type SpecimenStatus = "concept" | "experimental" | "incubating" | "deployed" | "paused" | "archived";
export type SpecimenType = "app" | "system" | "sdk" | "framework" | "tool" | "demo" | "experiment";
export type ChapterId = "origin" | "experiment" | "system" | "problems" | "solutions" | "evolution";

export type SpecimenArtwork = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SpecimenChapter = {
  id: ChapterId;
  title: string;
  heading: string;
  paragraphs: string[];
  annotation?: string;
};

export type SpecimenMutation = {
  id: string;
  numeral: string;
  title: string;
  summary: string;
  form: string;
  meaning: string;
  artifact: "list" | "sync" | "household" | "shopping" | "pantry" | "catalogue" | "release";
  artwork: SpecimenArtwork;
};

// Approved public content only. Private evidence and repository relationships do
// not belong in this record: it is also consumed by client-rendered cards.
export type PublicSpecimen = {
  id: string;
  number: string;
  slug: string;
  name: string;
  epithet: string;
  type: SpecimenType;
  status: SpecimenStatus;
  statusLabel: string;
  generation: string;
  classification: string;
  summary: string;
  narrative: string;
  mission: string;
  platforms: string[];
  technologySummary: string[];
  featuredOrder: number;
  accent: "green";
  productLink: { url: string; label: string };
  heroLines: string[];
  chapters: SpecimenChapter[];
  systemSurfaces: { id: string; name: string; description: string }[];
  catalogue: { approximateItemCount: number; languages: string[]; note: string };
  problems: { id: string; title: string; body: string }[];
  solutions: { id: string; title: string; body: string }[];
  mutations: SpecimenMutation[];
  artwork: Record<"hero" | "origin" | "experiment" | "system" | "catalogue" | "solutions" | "final", SpecimenArtwork>;
  failureSpecimens: { problemId: string; artwork: SpecimenArtwork }[];
  sceneCaptures: { system: string; solutions: string };
  captures: (SpecimenArtwork & { id: string; title: string })[];
  evidence: { receipt: string[]; conclusion: string; syncNote: string; testing: string };
  currentStage: { heading: string; body: string };
  closingLines: string[];
};
