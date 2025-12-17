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

export default function WiliotMDKPage() {
  const media = [
    { src: "/projects/wiliot-mdk/MDKcad.png", cap: "CAD — enclosure architecture optimized for store ops and DFM" },
    { src: "/projects/wiliot-mdk/MDKpilot.png", cap: "Pilot hardware — 3D-printed build mounted on a topstock cart" },
  ];

  return (
    <ProjectLayout
      title="Wiliot MDK"
      oneLiner="Product design engineering of a rugged, serviceable Mobile Deployment Kit for in-store Bluetooth tag tracking."
    >
      {/* HERO */}
      <section className={SECTION_ACCENT}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Rugged enclosure design for{" "}
              <span className="font-semibold text-marina">real-time in-store tag tracking</span>
            </h2>

            <p className="pt-2 text-neutral-700">
              The Mobile Deployment Kit (MDK) enabled real-time tracking of Bluetooth tags in stores and was designed to be
              robust enough for daily use on high-touch equipment across all three shifts.
            </p>

            <div className="pt-4">
              <div className="text-sm font-semibold text-neutral-900">My role</div>
              <p className="pt-1 text-neutral-700">
                <span className="font-semibold">Product Design Engineer (Mechanical)</span> — designed a store-ready enclosure
                with a manufacturable architecture, easy cart mounting, and fast daily service access for internal components
                (phone, batteries, Bluetooth node).
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className={TAG}>Enclosure design</span>
              <span className={TAG}>DFM-minded architecture</span>
              <span className={TAG}>Serviceability</span>
              <span className={TAG}>Pilot hardware</span>
              <span className={TAG}>Retail durability constraints</span>
            </div>
          </div>

          <figure className="space-y-2">
            <Image
              src={media[0].src}
              alt={media[0].cap}
              width={1400}
              height={900}
              priority
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media[0].cap}</figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Outcomes</h2>
        <p className="pt-2 text-neutral-700">
          Success criteria were operational: the fleet had to survive daily store use, enable consistent tag reads across all
          shifts, and be fast to service each morning.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Pilot fleet" value="20 units" note="small-scale deployment" accent="lava" />
          <StatCard label="Coverage" value="3 shifts" note="full-day store operations" accent="marina" />
          <StatCard label="Daily swap time" value="< 1 minute" note="per cart, morning changeout" accent="lava" />
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Objective</h2>
        <p className="pt-2 text-neutral-700">
          Design a rugged, store-usable Mobile Deployment Kit enclosure that could be mounted to an associate topstock cart,
          protect sensitive components, and support daily swap/servicing—while still allowing reliable Bluetooth signal
          ingress/egress for tag detection.
        </p>
      </section>

      {/* SYSTEM OVERVIEW */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          System overview <span className="text-marina">what the kit enabled</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          The MDK combined sensing, monitoring, and power into a field-deployable package so store operations could collect
          tag-read data during normal daily workflows.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="font-semibold text-neutral-900">Core components</div>
            <ul className="pt-2 space-y-2 text-neutral-700">
              <li>• Bluetooth node to sense tags throughout store operations</li>
              <li>• Phone + app for monitoring and session management</li>
              <li>• Batteries to power the node and phone for full-shift runtime</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="font-semibold text-neutral-900">Definition of done</div>
            <ul className="pt-2 space-y-2 text-neutral-700">
              <li>• Fleet of complete units ready for small-scale deployment</li>
              <li>• Reliable tag reads throughout all three shifts</li>
              <li>• End-of-day reporting with successful read data captured</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONSTRAINTS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• High-touch environment (topstock cart shared across three shifts)</li>
          <li>• Robust enclosure needed, but materials/geometry had to preserve Bluetooth performance</li>
          <li>• Designed with DFM intent for scale (injection-mold-ready), while pilot builds were 3D printed</li>
          <li>• Mounting constrained to the cart, yet required quick replacement and minimal tools</li>
          <li>• Daily service access needed for component swaps (phone, batteries, Bluetooth node)</li>
        </ul>
      </section>

      {/* MECHANICAL DESIGN FOCUS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Mechanical design focus</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Durability in a store environment</div>
            <p className="pt-1 text-neutral-700">
              Designed to withstand impacts, frequent handling, and shift-to-shift usage on high-traffic equipment without
              becoming a maintenance burden.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Fast daily service access</div>
            <p className="pt-1 text-neutral-700">
              The enclosure prioritized “swap in the morning” usability—internal components could be replaced quickly to keep
              operations moving.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Signal-aware packaging</div>
            <p className="pt-1 text-neutral-700">
              Balanced mechanical protection with Bluetooth constraints, ensuring the enclosure did not inadvertently block or
              degrade reads.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">DFM-minded architecture</div>
            <p className="pt-1 text-neutral-700">
              Pilot units were 3D printed, but the architecture was designed with injection molding and larger-scale
              manufacturability in mind.
            </p>
          </div>
        </div>
      </section>

      {/* ARTIFACTS */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Artifacts <span className="text-marina">CAD → pilot hardware</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          With only two primary artifacts, this project is best represented as a tight end-to-end story: a DFM-minded enclosure
          design translated into a pilot-ready, store-mounted unit that supported daily operations.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {media.map((x) => (
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

      {/* TAKEAWAY */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">One-line takeaway</h2>
        <p className="pt-2 text-neutral-700">
          I design field-ready enclosures that balance durability, serviceability, and RF constraints—so sensing systems can
          actually operate reliably in the real world.
        </p>
      </section>
    </ProjectLayout>
  );
}
