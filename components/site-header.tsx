"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/features", label: "Product" },
  { href: "/features", label: "Features" },
  { href: "/showcase", label: "Showcase" },
  { href: "/about", label: "Company" },
  { href: "/waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ad Forge
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-light text-white/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "transition-colors hover:text-white",
                pathname === link.href && "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/waitlist"
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10"
        >
          Waitlist
        </Link>
      </div>
    </header>
  );
}
