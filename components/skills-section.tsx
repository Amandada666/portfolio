import { SectionTitle } from "./section-title"
import { skills } from "@/lib/data"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Compétences" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.title} className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-[#00147D] mb-3 text-sm">{skill.title}</h3>
              <ul className="space-y-1.5">
                {skill.items.map((item, index) => (
                  <li key={index} className="text-xs text-[#64748b] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0023DD] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
