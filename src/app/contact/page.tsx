import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="page-shell fade-in">
      <section className="mx-auto max-w-3xl pb-12 text-center">
        <h1 className="text-3xl font-extralight tracking-[0.08em]">Contact</h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          About, inquiries, and collaboration.
        </p>
      </section>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-5 text-sm leading-8 text-muted">
          <h2 className="text-base tracking-[0.12em] text-white uppercase">
            About
          </h2>
          {siteConfig.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-base tracking-[0.12em] text-white uppercase">
              Direct contact
            </h2>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.name}
                </Link>
              </p>
              <p>
                <Link
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-base tracking-[0.12em] text-white uppercase">
              Send a message
            </h2>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
