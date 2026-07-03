import Image from "next/image";
import Link from "next/link";
import {
  categoryLabels,
  categoryOrder,
  getProjectsByCategory,
} from "@/content/projects";

export function ProjectGrid() {
  return (
    <div className="space-y-16">
      {categoryOrder.map((category) => {
        const categoryProjects = getProjectsByCategory(category);

        return (
          <section key={category}>
            <h2 className="mb-8 text-center text-lg font-light tracking-[0.18em] uppercase">
              {categoryLabels[category]}
            </h2>

            <div
              className={`mx-auto grid max-w-5xl gap-8 ${
                categoryProjects.length >= 4
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : categoryProjects.length === 3
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-2"
              }`}
            >
              {categoryProjects.map((project) => {
                const thumbnail =
                  project.thumbnail ??
                  project.images[0] ??
                  "/images/projects/placeholder.jpg";

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group text-center"
                  >
                    <div className="overflow-hidden rounded-sm bg-white/5">
                      <Image
                        src={thumbnail}
                        alt={project.title}
                        width={600}
                        height={450}
                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                        style={{
                          objectPosition: project.thumbnailPosition ?? "center",
                        }}
                      />
                    </div>
                    <p className="mt-3 text-sm tracking-[0.08em] text-accent transition-colors group-hover:text-white">
                      {project.title}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="section-divider mt-12" />
          </section>
        );
      })}
    </div>
  );
}
