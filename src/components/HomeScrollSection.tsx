import Image from "next/image";
import Link from "next/link";
import type { HomeSection } from "@/content/home-sections";

type HomeScrollSectionProps = {
  section: HomeSection;
};

function SectionText({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4 text-center text-sm leading-8 text-muted sm:text-[0.95rem]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </div>
  );
}

function SectionImage({
  src,
  alt,
  href,
  className,
  priority = false,
}: HomeSection["images"][number] & {
  className?: string;
  priority?: boolean;
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={1400}
      height={1000}
      priority={priority}
      className={`h-auto w-full object-cover ${className ?? ""}`}
      sizes="(max-width: 768px) 100vw, 900px"
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link href={href} className="block overflow-hidden transition duration-500 hover:opacity-90">
      {image}
    </Link>
  );
}

export function HomeScrollSection({ section }: HomeScrollSectionProps) {
  return (
    <section className="space-y-8 py-10 sm:space-y-10 sm:py-14">
      {section.intro?.length ? <SectionText paragraphs={section.intro} /> : null}

      {section.layout === "triple" ? (
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-3">
          {section.images.map((image, index) => (
            <SectionImage key={image.src} {...image} priority={index === 0} />
          ))}
        </div>
      ) : null}

      {section.layout === "wide" ? (
        <div className="mx-auto max-w-5xl">
          <SectionImage {...section.images[0]} priority />
        </div>
      ) : null}

      {section.layout === "single" ? (
        <div className="mx-auto max-w-5xl">
          <SectionImage {...section.images[0]} priority />
        </div>
      ) : null}

      {section.layout === "double" ? (
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
          {section.images.map((image) => (
            <SectionImage key={image.src} {...image} />
          ))}
        </div>
      ) : null}

      {section.outro?.length ? <SectionText paragraphs={section.outro} /> : null}
    </section>
  );
}
