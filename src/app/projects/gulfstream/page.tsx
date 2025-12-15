import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

const SECTION = "rounded-2xl border border-neutral-200 p-5";

export default function GulfstreamPage() {
  return (
    <ProjectLayout
      title="Project Gulfstream"
      oneLiner="Automated multi-signal checkout platform from prototype to 10-store pilot."
    >
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Media</h2>
        <p className="pt-2 text-neutral-700">
          Iteration timeline from early prototype to pilot-ready unit.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { src: "/projects/gulfstream/gulfstreamv0.png", cap: "Gulfstream v0" },
            { src: "/projects/gulfstream/gulfstreamv1.png", cap: "Gulfstream v1" },
            { src: "/projects/gulfstream/gulfstreamv2.png", cap: "Gulfstream v2" },
            { src: "/projects/gulfstream/gulfstreamv3.png", cap: "Gulfstream v3" },
          ].map((x) => (
            <figure key={x.src} className="space-y-2">
              <Image
                src={x.src}
                alt={x.cap}
                width={1200}
                height={800}
                className="w-full rounded-xl border border-neutral-200 object-contain"
              />
              <figcaption className="text-sm text-neutral-600">{x.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </ProjectLayout>
  );
}
