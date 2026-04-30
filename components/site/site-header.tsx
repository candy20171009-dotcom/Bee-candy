import Link from "next/link";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/security", label: "安全" },
  { href: "/app", label: "APP" },
  { href: "/dividend-tool", label: "分紅查詢" },
  { href: "/demo", label: "預約演示" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-brand/10 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-headline text-lg font-bold text-brand-ink">
          BeeFintech
        </Link>
        <nav className="flex items-center gap-5 text-sm text-brand-ink">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
