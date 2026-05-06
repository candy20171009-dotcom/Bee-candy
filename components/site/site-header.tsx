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
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070d2b]/86 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-headline text-lg font-bold text-[#dfe9ff]">
          BeeFintech
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[#d3dcff]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#25d0f7]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
