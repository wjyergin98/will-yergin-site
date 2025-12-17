import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="pt-2 text-neutral-600">
        The fastest ways to get in touch or view my work.
      </p>

      <div className="mt-8 space-y-4 text-neutral-700">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-neutral-900">Email</span>
          <a
            className="w-fit hover:underline hover:text-marina"
            href="mailto:wjyergin@gmail.com"
          >
            wjyergin@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-neutral-900">LinkedIn</span>
          <a
            className="w-fit hover:underline hover:text-marina"
            href="https://www.linkedin.com/in/will-j-yergin/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/will-j-yergin
          </a>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-neutral-900">GitHub</span>
          <a
            className="w-fit hover:underline hover:text-marina"
            href="https://github.com/wjyergin98"
            target="_blank"
            rel="noreferrer"
          >
            github.com/wjyergin98
          </a>
        </div>
      </div>

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
