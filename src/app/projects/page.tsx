import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell fade-in">
      <section className="mx-auto max-w-3xl pb-12 text-center">
        <h1 className="text-3xl font-extralight tracking-[0.08em]">Projects</h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          Installation, commercial, theatre design, and conceptual work.
        </p>
      </section>

      <ProjectGrid />
    </div>
  );
}
