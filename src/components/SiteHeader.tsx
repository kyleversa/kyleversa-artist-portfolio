"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="page-shell pt-10 pb-8 text-center">
      <Link
        href="/"
        className="inline-block text-[clamp(1.75rem,4vw,2.5rem)] font-extralight tracking-[0.08em] transition-opacity hover:opacity-70"
      >
        {siteConfig.name}
      </Link>

      <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm tracking-[0.18em] text-muted uppercase">
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <span key={item.href} className="inline-flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden className="text-white/20">
                  •
                </span>
              ) : null}
              <Link
                href={item.href}
                className={`transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </span>
          );
        })}
      </nav>
    </header>
  );
}
