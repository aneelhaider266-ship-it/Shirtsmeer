import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Shirts<span className="text-blue-600">Meer</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/blog" className="transition-colors hover:text-blue-600">All Guides</Link>
          <Link href="/about" className="transition-colors hover:text-blue-600">About</Link>
          <Link href="/contact" className="transition-colors hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
