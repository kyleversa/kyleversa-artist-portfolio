import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/ProjectGallery";
import {
  categoryLabels,
  projects,
  getProjectBySlug,
} from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell fade-in">
      <div className="mx-auto max-w-3xl pb-10 text-center">
        <p className="text-xs tracking-[0.22em] text-accent uppercase">
          {categoryLabels[project.category]}
        </p>
        <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-extralight tracking-[0.06em]">
          {project.title}
        </h1>
        {project.summary ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
            {project.summary}
          </p>
        ) : null}
      </div>

      <ProjectGallery project={project} />

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="text-xs tracking-[0.18em] text-muted uppercase transition hover:text-white"
        >
          Back to all projects
        </Link>
      </div>
    </div>
  );
}
