import Link from "next/link";
import { HomeScrollSection } from "@/components/HomeScrollSection";
import { homeSections } from "@/content/home-sections";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <div className="page-shell fade-in">
      <section className="mx-auto max-w-3xl pb-6 pt-4 text-center sm:pb-10 sm:pt-8">
        <p className="text-xs tracking-[0.28em] text-accent uppercase">
          Visual installation & digital work
        </p>
        <h1 className="mt-4 text-[clamp(2rem,6vw,4rem)] leading-none font-extralight tracking-[0.06em]">
          {siteConfig.name}
        </h1>
      </section>

      <div className="divide-y divide-white/8">
        {homeSections.map((section) => (
          <HomeScrollSection key={section.id} section={section} />
        ))}
      </div>

      <section className="border-t border-white/8 py-14 text-center">
        <p className="mx-auto max-w-xl text-sm leading-7 text-muted">
          Explore the full archive of installation, commercial, theatre, and
          conceptual work.
        </p>
        <Link
          href="/projects"
          className="mt-6 inline-flex border border-white/15 px-5 py-3 text-xs tracking-[0.18em] uppercase transition hover:border-accent hover:text-accent"
        >
          View all projects
        </Link>
      </section>
    </div>
  );
}
