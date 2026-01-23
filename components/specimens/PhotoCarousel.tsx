type PhotoCarouselProps = {
  items: { title: string; subtitle?: string }[];
};

export default function PhotoCarousel({ items }: PhotoCarouselProps) {
  return (
    <div className="mt-6">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="snap-center shrink-0 w-[78vw] sm:w-[60vw] lg:w-[34rem]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 backdrop-blur shadow-[0_18px_35px_rgba(15,23,42,0.12)] ring-1 ring-white/60">
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 via-white to-indigo-100" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),rgba(255,255,255,0))]" />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.25),rgba(255,255,255,0))]" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="text-sm font-medium text-slate-900">
                  {item.title}
                </div>
                {item.subtitle ? (
                  <div className="text-xs text-slate-600">{item.subtitle}</div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-slate-500">Swipe to browse images.</div>
    </div>
  );
}
