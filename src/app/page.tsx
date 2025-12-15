import Link from "next/link";
import { projects } from "@/content/projects";

const proof = [
  { kpi: "+20% throughput", note: "Gulfstream pilot" },
  { kpi: "+15% NPS", note: "Gulfstream pilot" },
  { kpi: "17% shrink reduction", note: "Hardtail pilot" },
  { kpi: "2× U.S. design patents", note: "Checkout station" },
];

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Mechanical Design Engineer building robotics, mechatronics, and camera hardware from concept to pilot.
        </h1>
        <p className="max-w-3xl text-lg text-neutral-600">
          I specialize in CAD/DFM, rapid prototyping, and electromechanical integration—turning early concepts into manufacturable hardware.
          I’ve delivered pilot systems at Walmart with measurable performance gains and hold two U.S. design patents.
        </p>

        <div className="flex gap-3 pt-2">
          <Link className="rounded-xl bg-neutral-900 px-4 py-2 text-white" href="/projects">
            View Projects
          </Link>
          <Link className="rounded-xl border border-neutral-300 px-4 py-2" href="/resume">
            Resume
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((x) => (
            <div key={x.kpi} className="rounded-2xl border border-neutral-200 p-4">
              <div className="text-xl font-semibold">{x.kpi}</div>
              <div className="text-sm text-neutral-600">{x.note}</div>
            </div>
          ))}
        </div>
      </header>

      <section className="pt-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link className="text-sm text-neutral-600 hover:underline" href="/projects">
            All projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl border border-neutral-200 p-5 hover:border-neutral-300"
            >
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="pt-1 text-neutral-600">{p.oneLiner}</div>
              <div className="flex flex-wrap gap-2 pt-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-200 px-2 py-1 text-xs text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
