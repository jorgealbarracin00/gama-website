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

// Shared archive identity; each specimen keeps its own narrative model and art
// direction instead of inheriting another product's domain-specific fields.
export type SpecimenIdentity = Pick<PublicSpecimen,
  "id" | "number" | "slug" | "name" | "epithet" | "type" | "status" | "statusLabel" |
  "generation" | "classification" | "summary" | "narrative" | "mission" | "platforms" |
  "technologySummary" | "featuredOrder" | "productLink" | "chapters" | "closingLines"
>;

export type MemoirSpecimen = SpecimenIdentity & {
  accent: "amber";
  question: string;
  artwork: Record<"hero" | "origin" | "experiment" | "capture" | "reflection" | "solutions" | "final", SpecimenArtwork>;
  captures: (SpecimenArtwork & { id: string; title: string; platform: "iPhone" | "iPad" })[];
  workflow: { title: string; body: string }[];
  systemSurfaces: { title: string; body: string }[];
  failures: { id: string; title: string; body: string; artwork: SpecimenArtwork; lesson: string }[];
  solutions: { title: string; body: string }[];
  validation: { heading: string; body: string; source: string };
  privacy: { heading: string; paragraphs: string[]; details: { title: string; body: string }[]; url: string };
  mutations: Omit<SpecimenMutation, "artifact">[];
  currentStage: { heading: string; body: string };
};

export type CanonicalSpecimen = PublicSpecimen | MemoirSpecimen;
