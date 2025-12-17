import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Resume</h1>
      <p className="pt-2 text-neutral-600">
        Download:{" "}
        <a className="hover:underline hover:text-marina" href="/WilliamJYerginResume.pdf" target="_blank" rel="noreferrer">
          WilliamJYerginResume.pdf
        </a>
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200">
        <iframe
          title="Resume PDF"
          src="/WilliamJYerginResume.pdf"
          className="h-[80vh] w-full"
        />
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
