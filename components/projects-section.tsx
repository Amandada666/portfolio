import { SectionTitle } from "./section-title"
import { ProjectCard } from "./project-card"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Expériences Professionnelles" />

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={`${project.company}-${project.startDate}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
