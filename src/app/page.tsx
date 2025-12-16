import Link from "next/link";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { featuredSlides } from "@/content/featuredSlides";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* HERO */}
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          Mechanical design engineer
          <span className="text-marina"> building real systems</span>
        </h1>

        <p className="max-w-2xl text-lg text-neutral-600">
          I design, prototype, and validate mechanical and mechatronic systems—
          from early concepts through pilot deployments. My background spans
          robotics, sensors, manufacturing, and cross-functional product teams.
        </p>

        <div className="flex gap-4 pt-4">
          <Link
            href="/projects"
            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-lava"
          >
            View projects
          </Link>

          <Link
            href="/about"
            className="rounded-lg border border-black px-5 py-3 text-sm font-medium text-black transition hover:border-marina hover:text-marina"
          >
            About me
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-marina to-transparent" />

      {/* HIGHLIGHTS */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-6 transition hover:border-marina">
          <h2 className="text-lg font-semibold">Hands-on engineering</h2>
          <p className="pt-2 text-neutral-600">
            CAD, prototyping, test rigs, and DFM—owning the details from bench
            builds to pilot-ready hardware.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 transition hover:border-lava">
          <h2 className="text-lg font-semibold">System-level thinking</h2>
          <p className="pt-2 text-neutral-600">
            Experience operating inside product organizations, translating
            requirements into shipped systems without losing engineering rigor.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <div className="mt-20 rounded-2xl bg-black p-8 text-white">
        <h2 className="text-2xl font-semibold">
          Selected work spans prototypes, pilots, and production paths
        </h2>
        <p className="pt-2 text-neutral-300">
          Checkout systems, shrink reduction hardware, energy-harvesting
          mechanisms, and precision dispensing processes.
        </p>

        <Link
          href="/projects"
          className="mt-6 inline-block rounded-lg bg-marina px-5 py-3 text-sm font-medium text-black transition hover:bg-lava hover:text-white"
        >
          Explore the work
        </Link>
      </div>

      {/* DIVIDER */}
      <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-lava to-transparent" />
      {/* SLIDE CAROUSEL */}
      <FeaturedCarousel slides={featuredSlides} />
    </main>
  );
}
