import React from "react";

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
    </main>
  );
}
