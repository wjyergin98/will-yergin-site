import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

const SECTION = "rounded-2xl border border-neutral-200 p-5";

export default function WiliotMDKPage() {
  return (
    <ProjectLayout
      title="Wiliot MDK"
      oneLiner="Cart-mounted mobile development kit with Bluetooth sensing."
    >
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Media</h2>

        <div className="mt-4">
          <figure className="space-y-2">
            <Image
              src="/projects/wiliot-mdk/MDKcad.png"
              alt="Wiliot MDK CAD"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">MDK CAD</figcaption>
          </figure>
        </div>
      </section>
    </ProjectLayout>
  );
}
