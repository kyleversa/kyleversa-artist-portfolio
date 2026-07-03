import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="page-shell pb-12 pt-20">
      <div className="mx-auto max-w-3xl border-t border-white/8 pt-12 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm tracking-[0.18em] text-muted uppercase">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </Link>
          <span aria-hidden className="text-white/20">
            •
          </span>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </Link>
        </nav>

        <p className="mt-8 text-xs tracking-[0.12em] text-muted uppercase">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
