import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="max-w-3xl pt-2 text-neutral-600">
        Selected work focused on mechanical design, electromechanical integration, and pilot deployments.
      </p>

      <div className="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-2xl border border-neutral-200 p-5 hover:border-neutral-300"
          >
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="pt-1 text-neutral-600">{p.oneLiner}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
