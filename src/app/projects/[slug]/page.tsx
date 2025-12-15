import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

const SECTION = "rounded-2xl border border-neutral-200 p-5";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{p.title}</h1>
      <p className="pt-2 text-neutral-600">{p.oneLiner}</p>

      <div className="space-y-6 pt-8">
        <section className={SECTION}>
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="pt-2 text-neutral-700">
            This page is intentionally structured for fast scanning by hiring managers: outcomes first, then constraints,
            then what was built, then test/validation, then manufacturing considerations.
          </p>
        </section>

        <section className={SECTION}>
          <h2 className="text-lg font-semibold">Outcomes</h2>
          <ul className="list-disc space-y-1 pl-5 pt-2 text-neutral-700">
            <li>Add quantified pilot metrics and deployment footprint.</li>
            <li>Add patent / production / reliability notes as applicable.</li>
          </ul>
        </section>

        <section className={SECTION}>
          <h2 className="text-lg font-semibold">Constraints</h2>
          <ul className="list-disc space-y-1 pl-5 pt-2 text-neutral-700">
            <li>Environment (store/warehouse), cleaning/abuse, uptime expectations.</li>
            <li>Installation and service constraints.</li>
            <li>Sensor/optics placement constraints (if applicable).</li>
          </ul>
        </section>

        <section className={SECTION}>
          <h2 className="text-lg font-semibold">What I built</h2>
          <ul className="list-disc space-y-1 pl-5 pt-2 text-neutral-700">
            <li>Mechanical design scope, key assemblies, interfaces, and integration points.</li>
            <li>Prototyping approach and iteration loops.</li>
            <li>Vendor/CM touchpoints where relevant.</li>
          </ul>
        </section>

        <section className={SECTION}>
          <h2 className="text-lg font-semibold">Test & validation</h2>
          <ul className="list-disc space-y-1 pl-5 pt-2 text-neutral-700">
            <li>Bench tests, fit checks, field validation, and acceptance criteria.</li>
            <li>Key failure modes discovered and design responses.</li>
          </ul>
        </section>

        <section className={SECTION}>
          <h2 className="text-lg font-semibold">Media</h2>
          <p className="pt-2 text-neutral-700">
            Drop photos and diagrams into <code className="rounded bg-neutral-100 px-1 py-0.5">/public/projects/{params.slug}/</code> and reference them here.
          </p>
        </section>
      </div>
    </main>
  );
}
