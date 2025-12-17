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
    </main>
  );
}
