import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

const SECTION = "rounded-2xl border border-neutral-200 p-5";

export default function LightfootPage() {
  return (
    <ProjectLayout
      title="Project Lightfoot"
      oneLiner="Self-powering cart wheel with gearbox + alternator + power validation."
    >
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Media</h2>
        <p className="pt-2 text-neutral-700">Concept CAD, prototype build, and pilot installation.</p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <figure className="space-y-2 sm:col-span-2">
            <Image
              src="/projects/lightfoot/lightfootcad.png"
              alt="Lightfoot CAD concept"
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">Lightfoot CAD concept</figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src="/projects/lightfoot/lightfootproto.png"
              alt="Lightfoot prototype build"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">Prototype build</figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src="/projects/lightfoot/lightfootpilot.png"
              alt="Lightfoot pilot installation"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">Pilot installation</figcaption>
          </figure>
        </div>
      </section>
    </ProjectLayout>
  );
}
