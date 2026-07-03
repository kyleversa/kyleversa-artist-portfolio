import Image from "next/image";
import Link from "next/link";

type MasonryGalleryProps = {
  items: Array<{
    src: string;
    alt: string;
    href?: string;
  }>;
};

export function MasonryGallery({ items }: MasonryGalleryProps) {
  return (
    <div className="masonry">
      {items.map((item) => {
        const image = (
          <Image
            src={item.src}
            alt={item.alt}
            width={900}
            height={1200}
            className="h-auto w-full rounded-sm object-cover transition duration-500 hover:opacity-90"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        );

        return (
          <div key={item.src} className="masonry-item overflow-hidden rounded-sm">
            {item.href ? (
              <Link href={item.href} className="block">
                {image}
              </Link>
            ) : (
              image
            )}
          </div>
        );
      })}
    </div>
  );
}
