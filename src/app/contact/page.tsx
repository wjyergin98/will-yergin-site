export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <div className="pt-6 space-y-3 text-neutral-700">
        <div>
          Email: <a className="hover:underline" href="mailto:wjyergin@gmail.com">wjyergin@gmail.com</a>
        </div>
        <div>
          LinkedIn:{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/will-j-yergin/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/will-j-yergin
          </a>
        </div>
      </div>
    </main>
  );
}
