import Link from "next/link";
import PhotoCarousel from "../../../components/specimens/PhotoCarousel";
import SpecimenDetailCard from "../../../components/specimens/SpecimenDetailCard";
import { specimens } from "../../../lib/data/specimens";

type SpecimenDetailPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function SpecimenDetailPage({ params }: SpecimenDetailPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const normalizedSlug = decodeURIComponent(resolvedParams.slug ?? "").toLowerCase();
  const specimen = specimens.find(
    (item) => item.slug.toLowerCase() === normalizedSlug
  );

  if (!specimen) {
    return (
      <main className="relative min-h-screen px-6 py-16 text-slate-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/backgrounds/bg-details.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/55 backdrop-blur-[6px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link className="text-sm text-slate-500 hover:text-slate-900" href="/specimens">
            Back to specimens
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Specimen not found
          </h1>
          <p className="mt-4 text-slate-600">
            The specimen you requested does not exist yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen px-6 py-16 text-slate-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/backgrounds/bg-details.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[6px]" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <Link className="text-sm text-slate-500 hover:text-slate-900" href="/specimens">
          Back to specimens
        </Link>

        <div className="mt-6 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-indigo-600">
            Specimen {specimen.index}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight">
            {specimen.title}
          </h1>
          <p className="text-slate-600">{specimen.subtitle}</p>
        </div>

        <PhotoCarousel items={specimen.gallery} />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SpecimenDetailCard title="Mission">
            {specimen.mission}
          </SpecimenDetailCard>
          <SpecimenDetailCard title="Current build">
            {specimen.currentBuild}
          </SpecimenDetailCard>
          <SpecimenDetailCard title="Signals">
            {specimen.signals}
          </SpecimenDetailCard>
        </div>
      </div>
    </main>
  );
}
