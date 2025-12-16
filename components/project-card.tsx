import { MapPin, Calendar, Building2 } from "lucide-react"

interface ProjectProps {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  companyDescription: string
  workDescription: string
  tasks: string[]
  technologies: string[]
}

export function ProjectCard({
  company,
  position,
  startDate,
  endDate,
  location,
  companyDescription,
  workDescription,
  tasks,
  technologies,
}: ProjectProps) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-[#e2e8f0]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-[#0023DD] mb-1">
            <Building2 className="w-4 h-4" />
            <span className="font-semibold">{company}</span>
          </div>
          <h3 className="text-xl font-bold text-[#00147D]">{position}</h3>
        </div>

        <div className="flex flex-col items-start md:items-end gap-1 text-sm text-[#64748b]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {startDate} – {endDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Company Description */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-[#00147D] mb-2">À propos de l'entreprise</h4>
        <p className="text-sm text-[#64748b] leading-relaxed">{companyDescription}</p>
      </div>

      {/* Work Description */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-[#00147D] mb-2">Mission</h4>
        <p className="text-sm text-[#64748b] leading-relaxed">{workDescription}</p>
      </div>

      {/* Tasks */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-[#00147D] mb-2">Réalisations</h4>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-[#64748b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0023DD] mt-2 shrink-0" />
              {task}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold text-[#00147D] mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#0023DD]/10 text-[#0023DD] rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
