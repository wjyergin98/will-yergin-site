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
      <div className="space-y-6 pt-8">{props.children}</div>
    </main>
  );
}
