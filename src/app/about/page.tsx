import Image from "next/image";
import Link from "next/link";

const SECTION = "rounded-2xl border border-neutral-200 p-6";
const SECTION_ACCENT = "rounded-2xl border border-neutral-200 p-6 bg-neutral-50";
const TAG =
  "inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="pt-2 text-neutral-600">
        Mechanical product design with a systems mindset—built for real-world constraints.
      </p>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Image
            src="/headshot.png"
            alt="Will Yergin headshot"
            width={320}
            height={320}
            className="rounded-2xl border border-neutral-200 object-cover shadow-sm"
            priority
          />
        </div>

        <div className="space-y-5">
          <p className="leading-relaxed text-neutral-700">
            I’m a mechanical engineer specializing in robotics, mechatronics, and camera-adjacent hardware systems. I do my
            best work where mechanisms, sensing, and operational constraints collide—owning hands-on build/test while
            partnering cross-functionally to ship pilot-ready systems.
          </p>

          <p className="leading-relaxed text-neutral-700">
            The projects on this site are written as short case studies: objective, constraints, what I built, how it was
            validated, and what changed from prototype to pilot.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-lava"
            >
              View projects
            </Link>
            <Link
              href="/WilliamJYerginResume.pdf"
              className="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-marina hover:text-marina"
            >
              Resume (PDF)
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-marina hover:text-marina"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-marina to-transparent" />

      {/* HIGHLIGHTS */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-5 transition hover:border-marina">
          <div className="text-sm font-semibold text-marina">How I operate</div>
          <div className="pt-1 text-lg font-semibold text-neutral-900">Prototype → pilot</div>
          <p className="pt-2 text-neutral-700">
            I build fast, validate in the real world, and harden designs based on observed failure modes and operational
            friction.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-5 transition hover:border-lava">
          <div className="text-sm font-semibold text-lava">What I optimize for</div>
          <div className="pt-1 text-lg font-semibold text-neutral-900">Reliability + serviceability</div>
          <p className="pt-2 text-neutral-700">
            Durable hardware and clean maintenance workflows—especially when systems live in uncontrolled environments.
          </p>
        </div>
      </section>

      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-lava to-transparent" />

      {/* SKILLS */}
      <section className={SECTION_ACCENT}>
        <h2 className="text-xl font-semibold">Skills & strengths</h2>
        <p className="pt-2 text-neutral-700">
          The themes below reflect what shows up repeatedly across the project case studies.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-semibold text-neutral-900">Mechanical product development</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className={TAG}>CAD & packaging</span>
              <span className={TAG}>Mechanism design</span>
              <span className={TAG}>Tolerance-aware builds</span>
              <span className={TAG}>DFM mindset</span>
              <span className={TAG}>Service access</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-semibold text-neutral-900">Systems & integration</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className={TAG}>Sensors & compute integration</span>
              <span className={TAG}>Optics / lighting constraints</span>
              <span className={TAG}>Field robustness</span>
              <span className={TAG}>Pilot deployment readiness</span>
              <span className={TAG}>Cross-functional execution</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-semibold text-neutral-900">Test & validation</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className={TAG}>Test setup design</span>
              <span className={TAG}>Requirement-driven criteria</span>
              <span className={TAG}>Failure-mode iteration</span>
              <span className={TAG}>Data-backed decisions</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-semibold text-neutral-900">Build execution</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className={TAG}>Rapid prototyping</span>
              <span className={TAG}>Vendor / fab coordination</span>
              <span className={TAG}>Assembly repeatability</span>
              <span className={TAG}>Deployment logistics</span>
            </div>
          </div>
        </div>
      </section>

      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-marina to-transparent" />

      {/* PROOF POINTS */}
      <section className={SECTION}>
        <h2 className="text-xl font-semibold">Proof points</h2>
        <p className="pt-2 text-neutral-700">A few concrete signals that complement the case studies.</p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <div className="text-sm font-semibold text-neutral-900">Granted design patents</div>
            <ul className="pt-3 space-y-2 text-neutral-700">
              <li>
                <a
                  href="https://patents.google.com/patent/USD1047548S1/en"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-marina hover:underline"
                >
                  USD1047548S1
                </a>
              </li>
              <li>
                <a
                  href="https://patents.google.com/patent/USD1051647S1/en"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-marina hover:underline"
                >
                  USD1051647S1
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <div className="text-sm font-semibold text-neutral-900">What you’ll see in my work</div>
            <ul className="pt-3 space-y-2 text-neutral-700">
              <li>• Mechanically grounded decisions under real constraints</li>
              <li>• Clear validation approach (test setups + criteria)</li>
              <li>• Iteration narrative from early builds to hardened pilots</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <div className="mt-12 flex flex-wrap gap-3 border-t border-neutral-200 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-lava/40 bg-lava/10 px-3 py-2 text-sm font-medium text-lava transition hover:border-lava hover:bg-lava/15"
        >
          <span aria-hidden>←</span>
          Back to home
        </Link>
      </div>
    </main>
  );
}
