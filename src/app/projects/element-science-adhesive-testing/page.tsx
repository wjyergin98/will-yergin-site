import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

const SECTION = "rounded-2xl border border-neutral-200 p-5";

export default function ElementSciencePage() {
  return (
    <ProjectLayout
      title="Element Science – Adhesive Testing"
      oneLiner="Adhesive selection, precision dispensing, and validation testing for sealed medical device housings."
    >
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Media</h2>
        <p className="pt-2 text-neutral-700">
          Adhesive dispensing development, test setup, and final validation.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <figure className="space-y-2 sm:col-span-2">
            <Image
              src="/projects/element-science-adhesive-testing/elementsetup.png"
              alt="Element Science adhesive test setup"
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">
              Adhesive dispensing and validation test setup
            </figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src="/projects/element-science-adhesive-testing/elementdispensing.png"
              alt="Precision adhesive dispensing path"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">
              Controlled adhesive dispensing path
            </figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src="/projects/element-science-adhesive-testing/elementfinalresult.png"
              alt="Final sealed housing after adhesive cure"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">
              Final dispensing result
            </figcaption>
          </figure>

          <figure className="space-y-2 sm:col-span-2">
            <Image
              src="/projects/element-science-adhesive-testing/elementcode.png"
              alt="Controls and logic for precision dispensing"
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">
              Dispensing controls and process path
            </figcaption>
          </figure>
        </div>
      </section>
    </ProjectLayout>
  );
}

