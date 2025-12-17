import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

const SECTION = "rounded-2xl border border-neutral-200 p-5";
const SECTION_ACCENT = "rounded-2xl border border-neutral-200 p-5 bg-neutral-50";
const TAG =
  "inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700";

function StatCard(props: { label: string; value: string; note?: string; accent?: "marina" | "lava" }) {
  const accent =
    props.accent === "marina"
      ? "border-marina/40 bg-marina/10"
      : props.accent === "lava"
        ? "border-lava/40 bg-lava/10"
        : "border-neutral-200 bg-white";

  const valueColor =
    props.accent === "marina" ? "text-marina" : props.accent === "lava" ? "text-lava" : "text-neutral-900";

  return (
    <div className={`rounded-2xl border p-4 ${accent}`}>
      <div className="text-sm text-neutral-700">{props.label}</div>
      <div className={`pt-1 text-2xl font-semibold ${valueColor}`}>{props.value}</div>
      {props.note ? <div className="pt-1 text-sm text-neutral-700">{props.note}</div> : null}
    </div>
  );
}

export default function ElementScienceAdhesiveTestingPage() {
  const media = {
    setup: {
      src: "/projects/element-science-adhesive-testing/elementsetup.png",
      cap: "Dispensing + validation setup for adhesive evaluation",
    },
    dispensing: {
      src: "/projects/element-science-adhesive-testing/elementdispensing.png",
      cap: "Controlled adhesive dispensing path",
    },
    closedUnit: {
      src: "/projects/element-science-adhesive-testing/elementenclosedunit.png",
      cap: "Closed unit — sealed housing configuration",
    },
    finalResult: {
      src: "/projects/element-science-adhesive-testing/elementfinalresult.png",
      cap: "Final dispensing result after cure",
    },
    ingress: {
      src: "/projects/element-science-adhesive-testing/elementingresstest.png",
      cap: "Ingress test — IP67 water ingress validation setup",
    },
    strength: {
      src: "/projects/element-science-adhesive-testing/elementstrengthtest.png",
      cap: "Strength test — tensile pull validation setup",
    },
    code: {
      src: "/projects/element-science-adhesive-testing/elementcode.png",
      cap: "Dispensing controls and process logic",
    },
  };

  return (
    <ProjectLayout
      title="Element Science – Adhesive Testing"
      oneLiner="Data-driven adhesive selection, precision dispensing, and validation testing for sealed injection-molded device housings."
    >
      {/* HERO */}
      <section className={SECTION_ACCENT}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Adhesive selection under a{" "}
              <span className="font-semibold text-marina">three-way constraint</span>
            </h2>

            <p className="pt-2 text-neutral-700">
              I was tasked with selecting an adhesive for sealed injection-molded housings that had to meet{" "}
              <span className="font-semibold">tensile strength</span>,{" "}
              <span className="font-semibold">IP67 ingress</span>, and{" "}
              <span className="font-semibold">reworkability</span> requirements simultaneously.
            </p>

            <p className="pt-3 text-neutral-700">
              The existing solution (VHB tape) met strength and sealing needs but created excessive peel strength and cleanup
              cycle time, blocking efficient component recovery and reuse.
            </p>

            <div className="pt-4">
              <div className="text-sm font-semibold text-neutral-900">My role</div>
              <p className="pt-1 text-neutral-700">
                <span className="font-semibold">Test & Process Engineer (Mechanical / Controls)</span> — developed the
                dispensing workflow, executed strength + ingress validation, and made the final adhesive recommendation
                based on measured performance.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className={TAG}>Test design</span>
              <span className={TAG}>Precision dispensing</span>
              <span className={TAG}>Ingress validation (IP67)</span>
              <span className={TAG}>Tensile + peel trade space</span>
              <span className={TAG}>Data-driven selection</span>
            </div>
          </div>

          <figure className="space-y-2">
            <Image
              src={media.setup.src}
              alt={media.setup.cap}
              width={1400}
              height={900}
              priority
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media.setup.cap}</figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOME */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Outcome</h2>
        <p className="pt-2 text-neutral-700">
          The program’s definition of done was a defensible, test-backed recommendation that met the strength + IP67
          requirements while reducing rework friction versus VHB.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Selected adhesive" value="Dowsil 832" note="best overall performer" accent="lava" />
          <StatCard label="Strength requirement" value="≥ 50 lb" note="tensile pull threshold" accent="marina" />
          <StatCard label="Ingress requirement" value="IP67" note="water ingress compliance" accent="marina" />
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Objective</h2>
        <p className="pt-2 text-neutral-700">
          Replace VHB tape with a silicone adhesive that maintained sealing and tensile performance while lowering peel
          strength and cleanup time to enable component harvesting and reuse.
        </p>
      </section>

      {/* CONTEXT */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Context</h2>
        <p className="pt-2 text-neutral-700">
          The housings were injection-molded plastic enclosures designed to protect expensive internal components. While the
          existing VHB approach sealed well and held strong, it created a painful downstream issue: removing residue added
          significant cycle time and made reuse/recycling workflows inefficient.
        </p>
      </section>

      {/* CONSTRAINTS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• Tensile strength: adhesive joint must withstand ≥ 50 lb pull force</li>
          <li>• Sealing performance: IP67 ingress compliance</li>
          <li>• Reworkability: peel strength low enough to enable fast cleanup and reuse</li>
          <li>• Process feasibility: controlled dispensing and cure behavior suitable for operations</li>
        </ul>
      </section>

      {/* PROCESS DEVELOPMENT */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Process development <span className="text-marina">repeatable dispensing</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          To ensure evaluation reflected adhesive performance (not process variation), I established a stable dispensing
          workflow and validated consistency through controlled setups and repeatable application geometry.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <figure className="space-y-2">
            <Image
              src={media.dispensing.src}
              alt={media.dispensing.cap}
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media.dispensing.cap}</figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src={media.finalResult.src}
              alt={media.finalResult.cap}
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media.finalResult.cap}</figcaption>
          </figure>

          <figure className="space-y-2 sm:col-span-2">
            <Image
              src={media.code.src}
              alt={media.code.cap}
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media.code.cap}</figcaption>
          </figure>
        </div>
      </section>

      {/* SEALED UNIT */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Sealed configuration</h2>
        <p className="pt-2 text-neutral-700">
          Candidate adhesives were evaluated in the same sealed configuration used in production workflows to ensure test
          results mapped to real operating conditions and rework requirements.
        </p>

        <figure className="mt-4 space-y-2">
          <Image
            src={media.closedUnit.src}
            alt={media.closedUnit.cap}
            width={1400}
            height={900}
            className="w-full rounded-xl border border-neutral-200 object-contain"
          />
          <figcaption className="text-sm text-neutral-600">{media.closedUnit.cap}</figcaption>
        </figure>
      </section>

      {/* VALIDATION */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Validation <span className="text-marina">strength + ingress</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          Adhesives were tested against the full requirement stack. If multiple candidates passed, the final decision was
          made using the best overall performance across strength, sealing, and practical reworkability.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <figure className="space-y-2">
            <Image
              src={media.strength.src}
              alt={media.strength.cap}
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media.strength.cap}</figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src={media.ingress.src}
              alt={media.ingress.cap}
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media.ingress.cap}</figcaption>
          </figure>
        </div>

        <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="text-sm font-semibold text-neutral-900">Selection logic</div>
          <ul className="pt-2 space-y-2 text-neutral-700">
            <li>• Must pass tensile threshold (≥ 50 lb)</li>
            <li>• Must pass IP67 ingress compliance</li>
            <li>• Among passing candidates, prioritize lower peel strength and faster cleanup for reuse</li>
          </ul>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">One-line takeaway</h2>
        <p className="pt-2 text-neutral-700">
          I translate ambiguous material/process constraints into a repeatable test plan, generate clean validation signal,
          and make an engineering recommendation that balances performance with real operational cost.
        </p>
      </section>
    </ProjectLayout>
  );
}
