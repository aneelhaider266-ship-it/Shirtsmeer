import Link from "next/link";

export default function Header() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Shirts<span className="text-blue-600">Meer</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link
            href="/color-matcher"
            className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Color Matcher
          </Link>
          <Link href="/blog" className="transition-colors hover:text-blue-600">
            All Guides
          </Link>
          <Link href="/about" className="transition-colors hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
      </header>
    </>
  );
}
