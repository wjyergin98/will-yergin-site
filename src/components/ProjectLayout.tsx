import React from "react";
import Link from "next/link";

export default function ProjectLayout(props: {
  title: string;
  oneLiner: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{props.title}</h1>
      <p className="pt-2 text-neutral-600">{props.oneLiner}</p>

      <div className="pt-10 space-y-12">
        {React.Children.map(props.children, (child, i) => (
          <section key={i}>
            {child}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-marina via-transparent to-transparent" />
          </section>
        ))}
      </div>

      {/* Footer navigation for all project pages */}
      <div className="mt-12 flex flex-wrap gap-3 border-t border-neutral-200 pt-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg border border-marina/40 bg-marina/10 px-3 py-2 text-sm font-medium text-marina transition hover:border-marina hover:bg-marina/15"
        >
          <span aria-hidden>←</span>
          Back to projects
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-lava/40 bg-lava/10 px-3 py-2 text-sm font-medium text-lava transition hover:border-lava hover:bg-lava/15"
        >
          <span aria-hidden>←</span>
          Back to home
        </Link>
      </div>
    </main>
  );
}
