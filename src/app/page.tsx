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
          I design, prototype, and validate mechanical and mechatronic systems—from early concepts through pilot deployments.
          My background spans robotics, sensors, manufacturing, and cross-functional product teams.
        </p>

        {/*<div className="flex flex-wrap gap-4 pt-4">
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

          <Link
            href="/WilliamJYerginResume.pdf"
            className="rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition hover:border-lava hover:text-lava"
          >
            Resume (PDF)
          </Link>
        </div>*/}
      </section>

      {/* DIVIDER */}
      <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-marina to-transparent" />

      {/* SELECTED WORK (carousel becomes the primary “browse” experience) */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold">Selected work</h2>
            <p className="pt-1 text-neutral-600">
              A quick tour through projects spanning prototypes, pilots, and production paths.
            </p>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-medium text-marina transition hover:text-lava sm:inline"
          >
            View all →
          </Link>
        </div>

        <FeaturedCarousel slides={featuredSlides} />

        <div className="sm:hidden">
          <Link
            href="/projects"
            className="inline-block rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-marina hover:text-marina"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-lava to-transparent" />

      {/* HIGHLIGHTS */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-6 transition hover:border-marina">
          <h2 className="text-lg font-semibold">Hands-on engineering</h2>
          <p className="pt-2 text-neutral-600">
            CAD, prototyping, test rigs, and DFM—owning the details from bench builds to pilot-ready hardware.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 transition hover:border-lava">
          <h2 className="text-lg font-semibold">System-level thinking</h2>
          <p className="pt-2 text-neutral-600">
            Experience operating inside product organizations, translating requirements into shipped systems without losing
            engineering rigor.
          </p>
        </div>
      </section>

      {/* FINAL CTA (no extra Projects link; focus on next recruiter actions) */}
      <div className="mt-20 rounded-2xl bg-black p-8 text-white">
        <h2 className="text-2xl font-semibold">Want the short version?</h2>
        <p className="pt-2 text-neutral-300">
          If you’re hiring for product design engineering, robotics hardware, or systems-heavy mechanical roles, my resume and
          About page give the fastest overview—then projects provide depth.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/WilliamJYerginResume.pdf"
            className="inline-block rounded-lg bg-marina px-5 py-3 text-sm font-medium text-black transition hover:bg-lava hover:text-white"
          >
            Download resume
          </Link>

          <Link
            href="/about"
            className="inline-block rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-marina hover:text-marina"
          >
            Read about me
          </Link>
        </div>
      </div>
    </main>
  );
}
