import Image from "next/image";
import { VideoEmbed } from "@/components/VideoEmbed";
import type { Project } from "@/content/projects";

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const hasVideos = Boolean(project.videos?.length);

  return (
    <div className="space-y-8">
      {hasVideos ? (
        <div className="mx-auto max-w-4xl space-y-8">
          {project.videos?.map((videoUrl) => (
            <VideoEmbed key={videoUrl} url={videoUrl} title={project.title} />
          ))}
        </div>
      ) : null}

      {project.layout === "board" ? (
        <div className="mx-auto max-w-5xl">
          {project.images.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-sm border border-white/8">
              <Image
                src={image}
                alt={`${project.title} board ${index + 1}`}
                width={1600}
                height={1200}
                className="h-auto w-full object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`mx-auto grid gap-3 ${
            project.images.length === 1
              ? "max-w-4xl grid-cols-1"
              : "max-w-6xl grid-cols-1 md:grid-cols-2"
          }`}
        >
          {project.images.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-sm ${
                project.layout === "gallery" && index === 0 && project.images.length > 2
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} ${index + 1}`}
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      )}

      {project.layout === "video" && !hasVideos ? (
        <p className="text-center text-sm text-muted">
          Add a video link for this project in{" "}
          <code className="text-accent">src/content/projects.ts</code>.
        </p>
      ) : null}
    </div>
  );
}
