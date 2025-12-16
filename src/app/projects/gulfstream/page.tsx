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

export default function GulfstreamPage() {
  const media = [
    { src: "/projects/gulfstream/gulfstreamv0.png", cap: "Gulfstream v0 — early prototype" },
    { src: "/projects/gulfstream/gulfstreamv1.png", cap: "Gulfstream v1 — integration iteration" },
    { src: "/projects/gulfstream/gulfstreamv2.png", cap: "Gulfstream v2 — pilot hardening" },
    { src: "/projects/gulfstream/gulfstreamv3.png", cap: "Gulfstream v3 — pilot-ready unit" },
  ];

  return (
    <ProjectLayout
      title="Project Gulfstream"
      oneLiner="Product design engineering of an autonomous checkout hardware system from prototype to ~10-store pilot."
    >
      {/* HERO: summary + one anchor image */}
      <section className={SECTION_ACCENT}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Mechanical-forward case study{" "}
              <span className="font-semibold text-marina">from concept to field pilot</span>
            </h2>

            <p className="pt-2 text-neutral-700">
              Gulfstream was a computer-vision-based autonomous checkout unit designed for live big-box retail.
              My focus was product design engineering: translating business objectives into mechanical and
              system-level requirements, then delivering a deployable unit that could survive real store
              conditions.
            </p>

            <div className="pt-4">
              <div className="text-sm font-semibold text-neutral-900">My role</div>
              <p className="pt-1 text-neutral-700">
                <span className="font-semibold">Product Design Engineer (Mechanical / Systems)</span> — owned
                physical architecture, integration of camera/lighting/compute/enclosures, vendor fabrication,
                and in-store deployment support; partnered closely with software and ops to ensure field
                reliability and serviceability.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className={TAG}>Mechanical systems integration</span>
              <span className={TAG}>DFM + serviceability</span>
              <span className={TAG}>Vendor & fabrication</span>
              <span className={TAG}>Field testing & iteration</span>
              <span className={TAG}>Optics + lighting constraints</span>
            </div>
          </div>

          <figure className="space-y-2">
            <Image
              src={media[3].src}
              alt={media[3].cap}
              width={1400}
              height={900}
              priority
              className="w-full rounded-xl border border-neutral-200 object-contain"
            />
            <figcaption className="text-sm text-neutral-600">{media[3].cap}</figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOMES: fast recruiter scan */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Outcomes</h2>
        <p className="pt-2 text-neutral-700">
          The goal was to produce a mechanically validated, pilot-ready system and generate clear signal in live
          stores—reliability, throughput, and customer experience.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Front-end throughput" value="~20% ↑" note="vs. traditional self-checkout lanes" accent="marina" />
          <StatCard label="Customer NPS" value="~15% ↑" note="during pilot period" accent="lava" />
          <StatCard label="Pilot footprint" value="~10 stores" note="Dallas–Fort Worth area" />
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Objective</h2>
        <p className="pt-2 text-neutral-700">
          Design and deploy a mechanically robust autonomous checkout system that improved front-end throughput
          and customer experience in live retail environments—while integrating cleanly into existing store
          infrastructure.
        </p>
      </section>

      {/* CONTEXT */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Context</h2>
        <p className="pt-2 text-neutral-700">
          Traditional self-checkout created bottlenecks during peak traffic and required frequent employee
          intervention. Leadership needed a hardware-led prototype that could be deployed rapidly, survive public
          use, and validate the feasibility of autonomous checkout under real operating conditions.
        </p>
        <p className="pt-3 text-neutral-700">
          This work was executed within Walmart’s Strategic Exploration Group, where speed, field-readiness, and
          mechanical reliability mattered as much as technical performance.
        </p>
      </section>

      {/* CONSTRAINTS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• Live store environments with real customers and staff</li>
          <li>• Existing store layouts and infrastructure (no greenfield redesign)</li>
          <li>• Aggressive pilot timelines and frequent iteration</li>
          <li>• High reliability, safety, and serviceability requirements</li>
          <li>• Environmental variability impacting vision performance (lighting, occlusion, traffic)</li>
        </ul>
      </section>

      {/* SPRINKLED MEDIA: early-to-mid iteration */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-lg font-semibold">
          Iteration timeline <span className="text-marina">from prototype to pilot hardening</span>
        </h2>
        <p className="pt-2 text-neutral-700">
          Mechanical integration evolved across versions to improve stability, serviceability, and deployment
          repeatability, while supporting consistent camera and lighting geometry for perception performance.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {media.slice(0, 2).map((x) => (
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

      {/* APPROACH */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Approach</h2>
        <ul className="pt-2 space-y-2 text-neutral-700">
          <li>• Converted high-level objectives into mechanical + system requirements (mounting, stability, service access, safety)</li>
          <li>• Designed and integrated camera, lighting, compute, and enclosure assemblies for reliability and maintainability</li>
          <li>• Evaluated materials, mounting strategies, and tolerances to withstand continuous public use</li>
          <li>• Coordinated with fabrication partners on build readiness, assembly, and deployment logistics</li>
          <li>• Partnered with software teams so mechanical design supported vision accuracy (lighting consistency, camera placement, occlusion control)</li>
          <li>• Supported installation, debugging, and redesign loops across multiple pilot sites</li>
        </ul>
      </section>

      {/* MORE MEDIA: later versions */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Pilot-ready hardware</h2>
        <p className="pt-2 text-neutral-700">
          Later iterations focused on field hardening: improving robustness, standardizing integration, and
          reducing operational friction during deployment and servicing.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {media.slice(2).map((x) => (
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

      {/* SKILLS / TAKEAWAYS */}
      <section className={SECTION}>
        <h2 className="text-lg font-semibold">Key skills demonstrated</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Mechanical Design & Integration</div>
            <p className="pt-1 text-neutral-700">
              Designed hardware architecture and integration strategy for optics, lighting, compute, and enclosures,
              prioritizing robustness and serviceability.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Field Testing & Iteration</div>
            <p className="pt-1 text-neutral-700">
              Iterated quickly in uncontrolled environments, resolving real-world constraints that don’t appear in
              lab-only prototypes.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">DFM + Serviceability</div>
            <p className="pt-1 text-neutral-700">
              Balanced rapid prototyping with production-minded design choices to improve repeatability, assembly, and
              ongoing maintenance.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="font-semibold text-neutral-900">Cross-functional Execution</div>
            <p className="pt-1 text-neutral-700">
              Coordinated across software, ops, and vendors to ensure the physical system enabled reliable perception
              and smooth in-store operation.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="text-sm font-semibold text-neutral-900">One-line takeaway</div>
          <p className="pt-1 text-neutral-700">
            I build mechanically reliable, product-grade prototypes that survive real environments and generate clear
            validation signal—fast.
          </p>
        </div>
      </section>
    </ProjectLayout>
  );
}
