import Link from "next/link";
import GlassPanel from "../ui/GlassPanel";

export default function ContactPanel() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pb-24">
      <GlassPanel className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Contact
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl leading-relaxed">
              Want to collaborate, test an experiment, or talk systems? This is a
              placeholder for now - we'll wire it into your real contact flow
              next.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="rounded-full bg-indigo-600 text-white px-7 py-3 text-sm font-medium hover:bg-indigo-700 transition text-center"
              href="mailto:hello@gamadynamics.com.au"
            >
              Email the Lab
            </a>

            <Link
              className="rounded-full border border-slate-200 bg-white/70 px-7 py-3 text-sm font-medium hover:bg-white transition text-center"
              href="#specimens"
            >
              Back to Specimens
            </Link>
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
