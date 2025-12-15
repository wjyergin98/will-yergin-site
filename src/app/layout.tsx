import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Will Yergin | Mechanical Design Engineer",
  description: "Mechanical Design Engineer building robotics, mechatronics, and camera hardware from concept to pilot.",
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Will Yergin
        </Link>
        <div className="flex items-center gap-4 text-sm text-neutral-700">
          <Link className="hover:text-marina transition-colors" href="/projects">Projects</Link>
          <Link className="hover:text-marina transition-colors" href="/resume">Resume</Link>
          <Link className="hover:text-marina transition-colors" href="/about">About</Link>
          <Link className="hover:text-marina transition-colors" href="/contact">Contact</Link>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-marina to-transparent" />
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-600">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Will Yergin</div>
              <div className="flex gap-4">
                <a className="hover:underline" href="mailto:wjyergin@gmail.com">wjyergin@gmail.com</a>
                <a className="hover:underline" href="https://www.linkedin.com/in/will-j-yergin/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
