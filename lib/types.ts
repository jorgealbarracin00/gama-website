export type SpecimenGalleryItem = {
  title: string;
  subtitle?: string;
};

export type Specimen = {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  mission: string;
  currentBuild: string;
  signals: string;
  gallery: SpecimenGalleryItem[];
  statusLabel: string;
  statusDot: "emerald" | "amber" | "violet" | "slate";
  tags: string[];
  hrefPrimary?: string;
  hrefSecondary?: string;
};

export type Idea = {
  title: string;
  blurb: string;
  stage: string;
};
