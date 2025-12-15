import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">About</h1>

      <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
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

        <div className="prose prose-neutral max-w-none">
          <p>
            I’m a mechanical engineer specializing in robotics, mechatronics, and camera systems, with experience turning early concepts into manufacturable hardware.
            I like work that sits at the intersection of mechanisms, sensors, and real-world constraints—and I’m comfortable owning hands-on build/test while collaborating
            cross-functionally to ship pilot-ready systems.
          </p>
          <p>
            This site is intentionally simple: the goal is to let hiring teams quickly understand what I built, how it was validated, and what changed from prototype to pilot.
          </p>
        </div>
      </div>
    </main>
  );
}

