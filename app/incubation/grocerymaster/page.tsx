import type { Metadata } from "next";
import Inc_GroceryMaster from "@/components/incubation/Inc_GroceryMaster";
import { getSpecimen, specimenPath } from "@/lib/specimens/registry";

export function generateMetadata(): Metadata {
  const specimen = getSpecimen("grocerymaster");
  if (!specimen) throw new Error("GroceryMaster specimen record is missing");
  const title = `${specimen.name} — Specimen ${specimen.number} | GAMA Dynamics`;
  const url = `https://gamadynamics.com.au${specimenPath(specimen)}`;
  return {
    title,
    description: specimen.summary,
    alternates: { canonical: url },
    openGraph: { title, description: specimen.summary, url, type: "article", images: [{ url: `https://gamadynamics.com.au${specimen.artwork.hero.src}`, width: specimen.artwork.hero.width, height: specimen.artwork.hero.height, alt: specimen.artwork.hero.alt }] },
    twitter: { card: "summary_large_image", title, description: specimen.summary, images: [`https://gamadynamics.com.au${specimen.artwork.hero.src}`] },
  };
}

export default function Page() {
  return <Inc_GroceryMaster />;
}
