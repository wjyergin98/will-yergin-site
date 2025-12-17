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
    { src: "/projects/hardtail/hardtailproto.png", cap: "Prototype — early integration and sensing concept" },
    { src: "/projects/hardtail/hardtailinstore.png", cap: "In-store pilot — Walmart Neighborhood Market (Bentonville, AR)" },
    { src: "/projects/hardtail/hardtailhardened.png", cap: "Hardened build — improved robustness and serviceability for pilot ops" },
  ];

  return (
    <ProjectLayout
      title="Project Hardtail"
      oneLiner="Product design engineering for a multi-signal scan-and-go shrink-reduction pilot in a live Walmart Neighborhood Market."
    >
      {/* HERO */}
      <section className={SECTION_ACCENT}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Mechanical-forward case study{" "}
              <span className="font-semibold text-marina">prototype → field pilot hardware</span>
            </h2>

            <p className="pt-2 text-neutral-700">
              Hardtail was a pilot unit installed at a Walmart Neighborhood Market in Bentonville, AR to reduce{" "}
              <span className="font-semibold">scan-and-go shrink</span> by reducing{" "}
              <span className="font-semibold">accidental missed scans.</span>
            </p>

            <div className="pt-4">
              <div className="text-sm font-semibold text-neutral-900">My role</div>
              <p className="pt-1 text-neutral-700">
                <span className="font-semibold">Product Design Engineer (Mechanical / Systems)</span> — owned the physical
                architecture and integration of a multi-signal platform (sensing, compute, enclosure, mounting, and
                serviceability), supporting rapid iteration and in-store pilot operations.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className={TAG}>Hardware systems integration</span>
              <span className={TAG}>DFM + serviceability</span>
              <span className={TAG}>Field hardening</span>
              <span className={TAG}>Pilot deployment</span>
              <span className={TAG}>Multi-signal sensing</span>
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
          The goal was to deliver a mechanically reliable pilot that could reconcile a customer’s digital basket with the
          physical cart state and provide clear shrink-reduction signal in real store conditions.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            label="Shrink reduction (Scan & Go)"
            value="~17% ↓"
            note="pilot result at Neighborhood Market"
            accent="lava"
          />
          <StatCard
            label="Primary shrink type"
            value="Accidental"
            note="missed scans / unintentional"
            accent="marina"
          />
          <StatCard
            label="Pilot location"
            value="Bentonville, AR"
            note="Walmart Neighborhood Market"
          />
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Objective</h2>
        <p className="pt-2 text-neutral-700">
          Build and deploy a store-ready, multi-signal hardware platform that could determine a customer’s basket with high
          confidence, compare the digital basket to the physical cart state, and define exit criteria to reduce scan-and-go
          shrink—without adding operational friction.
        </p>
      </section>

      {/* CONTEXT */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Context</h2>
        <p className="pt-2 text-neutral-700">
          Scan-and-go improves customer convenience, but it introduces a persistent failure mode: items can be missed during
          scanning. Hardtail was designed to close that gap by validating whether the cart contents matched what the customer
          scanned—supporting a smoother customer experience while reducing unintentional shrink.
        </p>
      </section>

      {/* SYSTEM OVERVIEW (your “mechanism” made explicit) */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Multi-signal platform <span className="text-marina">and “brain”</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          Hardtail used a multi-sensor approach—similar in spirit to Gulfstream, but tuned for scan-and-go validation rather
          than full checkout—combining identity, perception, and rule enforcement to determine exit criteria.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="font-semibold text-neutral-900">Signals</div>
            <ul className="pt-2 space-y-2 text-neutral-700">
              <li>• RFID + camera vision for cart-state and item presence</li>
              <li>• Symbology recognition to interpret labels / identifiers</li>
              <li>• Bluetooth handshake between customer phone and Hardtail for session association</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="font-semibold text-neutral-900">Decisioning</div>
            <ul className="pt-2 space-y-2 text-neutral-700">
              <li>• Basket association (digital cart ↔ physical cart)</li>
              <li>• Exit criteria evaluation using a rules-based + ML decision layer</li>
              <li>• Designed to reduce false positives and avoid customer friction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONSTRAINTS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• Live store environment with continuous public interaction</li>
          <li>• Minimal disruption to store operations and associate workflows</li>
          <li>• Must integrate with existing store layouts and customer scan-and-go behavior</li>
          <li>• High durability, safety, and serviceability expectations</li>
          <li>• Environmental variability impacting perception and RF behavior</li>
        </ul>
      </section>

      {/* PROTOTYPE MEDIA */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Prototype development <span className="text-marina">and integration iteration</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          Early builds focused on integration feasibility and signal quality—ensuring sensors, compute, and mounting
          geometry were stable and serviceable enough to survive store operations and produce trustworthy pilot data.
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
          <li>• Defined hardware and mechanical requirements from store constraints (footprint, mounting, safety, service access)</li>
          <li>• Integrated sensing + compute into a maintainable architecture</li>
          <li>• Tuned physical geometry to support stable perception and consistent signal quality</li>
        </ul>
      </section>

      {/* HARDENED MEDIA */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Field hardening</h2>
        <p className="pt-2 text-neutral-700">
          Later iterations focused on robustness and maintainability: reducing failure points, improving service access, and
          making the build more repeatable for sustained in-store operation.
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
            <div className="text-sm font-semibold text-neutral-900">What improved in the hardened build</div>
            <ul className="pt-2 space-y-2 text-neutral-700">
              <li>• More robust interfaces and mounting for repeated public interaction</li>
              <li>• Service access for quick in-store troubleshooting</li>
              <li>• Improved DFM for fabrication and assembly</li>
              <li>• Better alignment between physical geometry and sensing performance</li>
              <li>• Hardened the design based on anticipated pilot wear, failure modes, and servicing needs</li>
              <li>• Insulated wiring with RF resistant lining for decreased signal noise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS / TAKEAWAY */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Key skills demonstrated</h2>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Hardware Integration</div>
            <p className="pt-1 text-neutral-700">
              Integrated sensing, compute, and enclosure architecture into a store-ready unit, balancing robustness with
              serviceability.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Mechanical Design for Field Use</div>
            <p className="pt-1 text-neutral-700">
              Designed for durability, safe public interaction, and fast maintenance in a live retail environment.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">System Reliability</div>
            <p className="pt-1 text-neutral-700">
              Supported stable signal quality through physical geometry choices and iteration based on observed failure modes.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Pilot Execution</div>
            <p className="pt-1 text-neutral-700">
              Delivered pilot-ready hardware and supported deployment/iteration loops to generate measurable shrink reduction.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="text-sm font-semibold text-neutral-900">One-line takeaway</div>
          <p className="pt-1 text-neutral-700">
            I design multi-signal retail hardware that is durable, serviceable, and capable of producing measurable real-world impact.
          </p>
        </div>
      </section>
    </ProjectLayout>
  );
}
