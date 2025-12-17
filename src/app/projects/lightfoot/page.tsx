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

export default function LightfootPage() {
  // Timeline order: sketch → cad → raw → proto → iteration → pilot
  const media = [
    { src: "/projects/lightfoot/lightfootsketch.png", cap: "Sketch — early form factor and energy capture concept" },
    { src: "/projects/lightfoot/lightfootcad.png", cap: "CAD — mechanical layout, packaging, and integration planning" },
    { src: "/projects/lightfoot/lightfootraw.png", cap: "Raw build — first physical implementation" },
    { src: "/projects/lightfoot/lightfootproto.png", cap: "Prototype — functional energy-harvesting unit" },
    { src: "/projects/lightfoot/lightfootiteration.png", cap: "Iteration — mechanical refinements and durability improvements" },
    { src: "/projects/lightfoot/lightfootpilot.png", cap: "Pilot — deployed for real-world validation" },
  ];

  return (
    <ProjectLayout
      title="Project Lightfoot"
      oneLiner="Mechanical product development of an energy-harvesting system for associate carts—designed, prototyped, iterated, and piloted."
    >
      {/* HERO */}
      <section className={SECTION_ACCENT}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Mechanical product development for an{" "}
              <span className="font-semibold text-marina">energy-harvesting system</span>
            </h2>

            <p className="pt-2 text-neutral-700">
              Lightfoot tackled a fundamental systems question:{" "}
              <span className="font-semibold">how do you harvest usable energy from associate carts</span> in a way that is
              mechanically robust, maintainable, and compatible with real retail operations?
            </p>

            <p className="pt-3 text-neutral-700">
              Downstream applications (e.g., powering a handheld scanner, charging a device, bridging to a Bluetooth system)
              and sustainability outcomes were not “side quests”—they were key enablers that justified piloting and created a
              measurable value narrative.
            </p>

            <div className="pt-4">
              <div className="text-sm font-semibold text-neutral-900">My role</div>
              <p className="pt-1 text-neutral-700">
                <span className="font-semibold">Product Design Engineer (Mechanical / Systems)</span> — owned mechanical
                architecture, packaging, prototyping, and iteration from early concepts through pilot hardware; partnered
                cross-functionally to ensure the physical system reliably generated and delivered usable power.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className={TAG}>Mechanism & packaging</span>
              <span className={TAG}>Prototype → pilot</span>
              <span className={TAG}>DFM + durability</span>
              <span className={TAG}>Field validation</span>
              <span className={TAG}>Energy system integration</span>
            </div>
          </div>

          <figure className="space-y-2">
            <Image
              src={media[5].src}
              alt={media[5].cap}
              width={1400}
              height={900}
              priority
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media[5].cap}</figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Outcomes</h2>
        <p className="pt-2 text-neutral-700">
          The primary deliverable was a mechanically validated energy-harvesting platform that could be deployed in real
          conditions. Secondary outcomes (device enablement + sustainability narrative) provided the “why now” and helped
          secure pilot traction.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Primary goal" value="Harvest energy" note="from associate cart usage" accent="marina" />
          <StatCard label="Delivery" value="Pilot hardware" note="real-world validation" accent="marina" />
          <StatCard label="Enablement" value="Applications" note="power / bridge / device support" accent="lava" />
        </div>

        {/* Optional sustainability callout: keep, but subordinate */}
        <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="text-sm font-semibold text-neutral-900">Impact narrative</div>
          <p className="pt-1 text-neutral-700">
            Sustainability outcomes and operational enablement were framed as measurable benefits of solving the core energy
            harvesting challenge—useful for stakeholder buy-in and scaling decisions.
          </p>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Objective</h2>
        <p className="pt-2 text-neutral-700">
          Design and build an energy-harvesting system for associate carts that converts real cart usage into reliable,
          usable electrical power—packaged in a durable, serviceable form factor suitable for retail deployment.
        </p>
      </section>

      {/* CONTEXT */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Context</h2>
        <p className="pt-2 text-neutral-700">
          Carts are ubiquitous, high-duty-cycle assets with repeated motion and interactions. The opportunity was to turn
          that real-world activity into harvested energy while meeting the realities of retail: wear, impact, weathering,
          maintenance, and deployment constraints.
        </p>
      </section>

      {/* DESIGN NARRATIVE TIMELINE */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Design narrative <span className="text-marina">sketch → CAD → build → pilot</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          The system progressed through rapid concepting and mechanical packaging, then converged through build-test-iterate
          cycles toward a pilot-ready configuration.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {media.slice(0, 4).map((x) => (
            <figure key={x.src} className="space-y-2">
              <Image
                src={x.src}
                alt={x.cap}
                width={1400}
                height={900}
                className="w-full rounded-xl border border-neutral-200 object-contain"
              />
              <figcaption className="text-sm text-neutral-600">{x.cap}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {media.slice(4).map((x) => (
            <figure key={x.src} className="space-y-2">
              <Image
                src={x.src}
                alt={x.cap}
                width={1400}
                height={900}
                className="w-full rounded-xl border border-neutral-200 object-contain"
              />
              <figcaption className="text-sm text-neutral-600">{x.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONSTRAINTS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• High-duty cycle hardware exposed to repeated impacts, vibration, and environmental variability</li>
          <li>• Tight packaging constraints on carts (mounting, clearance, safety)</li>
          <li>• Must be maintainable by store operations (service access, replacement strategy)</li>
          <li>• Power generation and delivery must be reliable enough to enable real applications</li>
          <li>• Pilot timelines required fast iteration without sacrificing field robustness</li>
        </ul>
      </section>

      {/* APPROACH */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Approach</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• Converted the “harvest energy from carts” objective into mechanical + system requirements</li>
          <li>• Designed packaging and mounting to support durability, safety, and serviceability</li>
          <li>• Built prototypes to validate energy generation, mechanical survivability, and integration assumptions</li>
          <li>• Iterated based on observed failure modes and deployment friction</li>
          <li>• Advanced toward pilot deployment with a focus on repeatability and maintainability</li>
        </ul>
      </section>

      {/* SKILLS / TAKEAWAY */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Key skills demonstrated</h2>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Mechanical Product Development</div>
            <p className="pt-1 text-neutral-700">
              Took a core physics/system challenge and translated it into real packaging, mounting, and field-ready hardware.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Prototype-to-Pilot Execution</div>
            <p className="pt-1 text-neutral-700">
              Drove build-test-iterate cycles using observed failure modes and operational realities to converge on a pilot build.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Durability + Serviceability</div>
            <p className="pt-1 text-neutral-700">
              Designed for high duty-cycle usage with practical service access and replacement considerations.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Systems Integration</div>
            <p className="pt-1 text-neutral-700">
              Ensured the physical system reliably generated and delivered usable power to enable downstream applications and impact.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="text-sm font-semibold text-neutral-900">One-line takeaway</div>
          <p className="pt-1 text-neutral-700">
            I build mechanically robust hardware that solves a core systems constraint—then translate it into deployable value and impact.
          </p>
        </div>
      </section>
    </ProjectLayout>
  );
}
