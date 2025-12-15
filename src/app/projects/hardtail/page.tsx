import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

const SECTION = "rounded-2xl border border-neutral-200 p-5";

export default function HardtailPage() {
  return (
    <ProjectLayout
      title="Project Hardtail"
      oneLiner="Multisignal receipt checker supporting shrink reduction in pilot."
    >
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Media</h2>

        <div className="mt-4">
          <figure className="space-y-2">
            <Image
              src="/projects/hardtail/hardtail.png"
              alt="Hardtail pilot unit"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">Hardtail pilot unit</figcaption>
          </figure>
        </div>
      </section>
    </ProjectLayout>
  );
}
