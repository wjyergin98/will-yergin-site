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

export default function HardtailPage() {
  const media = [
    { src: "/projects/hardtail/hardtailproto.png", cap: "Prototype — early mechanism and integration concept" },
    { src: "/projects/hardtail/hardtailinstore.png", cap: "In-store deployment — installed and evaluated in real conditions" },
    { src: "/projects/hardtail/hardtailhardened.png", cap: "Hardened build — improved robustness and serviceability" },
  ];

  return (
    <ProjectLayout
      title="Project Hardtail"
      oneLiner="Product design engineering for a shrink-reduction pilot—mechanism development, field hardening, and store deployment."
    >
      {/* HERO */}
      <section className={SECTION_ACCENT}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Mechanical-forward case study{" "}
              <span className="font-semibold text-marina">from prototype to pilot hardware</span>
            </h2>

            <p className="pt-2 text-neutral-700">
              Hardtail focused on reducing shrink by introducing a durable, store-ready physical solution that could be
              deployed quickly and iterated under real retail constraints. My work emphasized product design engineering:
              mechanism development, integration, field hardening, and serviceability.
            </p>

            <div className="pt-4">
              <div className="text-sm font-semibold text-neutral-900">My role</div>
              <p className="pt-1 text-neutral-700">
                <span className="font-semibold">Product Design Engineer (Mechanical / Systems)</span> — owned mechanical
                architecture and iteration loop from prototype builds through pilot-ready hardware; coordinated fabrication
                and deployment support while partnering with cross-functional teams to ensure reliability in-store.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className={TAG}>Mechanism design</span>
              <span className={TAG}>DFM + serviceability</span>
              <span className={TAG}>Field hardening</span>
              <span className={TAG}>Pilot deployment</span>
              <span className={TAG}>Vendor & fabrication</span>
            </div>
          </div>

          <figure className="space-y-2">
            <Image
              src={media[1].src}
              alt={media[1].cap}
              width={1400}
              height={900}
              priority
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media[1].cap}</figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Outcomes</h2>
        <p className="pt-2 text-neutral-700">
          The objective was to deliver a mechanically reliable pilot that generated clear shrink-reduction signal in real
          store conditions—without adding operational friction.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Shrink reduction signal" value="~17% ↓" note="pilot estimate / observed impact" accent="lava" />
          <StatCard label="Pilot readiness" value="Field-hardened" note="robustness + maintainability upgrades" accent="marina" />
          <StatCard label="Deployment mode" value="In-store pilot" note="validated under real constraints" />
        </div>

        {/*<div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="text-sm font-semibold text-neutral-900">Note</div>
          <p className="pt-1 text-neutral-700">
            If you’d like, we can tighten the wording around the ~17% figure (e.g., “estimated” vs “measured”) to match how
            you want to present confidence and attribution.
          </p>
        </div>*/}
      </section>

      {/* OBJECTIVE */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Objective</h2>
        <p className="pt-2 text-neutral-700">
          Design and deploy a mechanically robust shrink-reduction solution that could be installed in existing retail
          environments, withstand continuous use, and provide actionable pilot data.
        </p>
      </section>

      {/* CONTEXT */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Context</h2>
        <p className="pt-2 text-neutral-700">
          Shrink is driven by a combination of human behavior, process gaps, and store-level operational realities. Hardtail
          targeted a practical intervention—one that could be physically deployed, evaluated, and iterated quickly—without
          requiring major infrastructure changes.
        </p>
      </section>

      {/* CONSTRAINTS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• Live store environment with continuous public interaction</li>
          <li>• Minimal disruption to store operations and staff workflows</li>
          <li>• Existing fixtures and layouts; limited tolerance for “special installs”</li>
          <li>• High durability and serviceability requirements</li>
          <li>• Tight pilot timelines with fast iteration cycles</li>
        </ul>
      </section>

      {/* SPRINKLED MEDIA: prototype */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Prototype development <span className="text-marina">and mechanism iteration</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          Early builds focused on proving the mechanism and integration approach, then converging toward a design that could
          be fabricated quickly and serviced easily during pilot operations.
        </p>

        <figure className="mt-4 space-y-2">
          <Image
            src={media[0].src}
            alt={media[0].cap}
            width={1400}
            height={900}
            className="w-full rounded-xl border border-neutral-200 object-contain"
          />
          <figcaption className="text-sm text-neutral-600">{media[0].cap}</figcaption>
        </figure>
      </section>

      {/* APPROACH */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Approach</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• Defined mechanical requirements from store constraints (mounting, footprint, safety, service access)</li>
          <li>• Developed and iterated mechanism concepts with a bias toward durability and repeatable assembly</li>
          <li>• Implemented field-hardening changes based on real store interaction and failure modes</li>
          <li>• Coordinated fabrication and deployment logistics with partners to support rapid iteration</li>
          <li>• Supported installation, evaluation, and ongoing improvements during the pilot</li>
        </ul>
      </section>

      {/* SPRINKLED MEDIA: hardened */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Field hardening</h2>
        <p className="pt-2 text-neutral-700">
          Later iterations prioritized robustness and maintainability—reducing failure points, improving service access, and
          making the build more repeatable for deployment.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <figure className="space-y-2">
            <Image
              src={media[2].src}
              alt={media[2].cap}
              width={1400}
              height={900}
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media[2].cap}</figcaption>
          </figure>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="text-sm font-semibold text-neutral-900">What “hardened” meant in practice</div>
            <ul className="pt-2 space-y-2 text-neutral-700">
              <li>• More robust mounting / interfaces for repeated use</li>
              <li>• Fewer failure points and clearer service access</li>
              <li>• Improved repeatability for fabrication and assembly</li>
              <li>• Better fit within store operational constraints</li>
            </ul>
            <p className="pt-3 text-neutral-700">
              If you want, we can replace these bullets with the specific hardening changes you actually made (even 3–5 items
              will make this section feel “real” to a hiring manager).
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS / TAKEAWAY */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Key skills demonstrated</h2>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Mechanism Design</div>
            <p className="pt-1 text-neutral-700">
              Developed and iterated physical solutions optimized for durability, repeatable assembly, and safe public interaction.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">DFM + Serviceability</div>
            <p className="pt-1 text-neutral-700">
              Balanced rapid prototyping with production-aware decisions to improve deployment repeatability and maintenance.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Field Testing</div>
            <p className="pt-1 text-neutral-700">
              Designed for real-world constraints and iterated based on observed failure modes in uncontrolled environments.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Pilot Execution</div>
            <p className="pt-1 text-neutral-700">
              Coordinated fabrication and deployment details so the hardware could be installed, evaluated, and improved quickly.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="text-sm font-semibold text-neutral-900">One-line takeaway</div>
          <p className="pt-1 text-neutral-700">
            I design and harden mechanisms that survive real environments and produce measurable operational impact.
          </p>
        </div>
      </section>
    </ProjectLayout>
  );
}
