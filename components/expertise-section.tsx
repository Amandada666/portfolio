import { SectionTitle } from "./section-title"
import { expertises } from "@/lib/data"
import { Lightbulb, Target, Settings } from "lucide-react"

const icons = [Lightbulb, Target, Settings]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Expertise" />

        <div className="grid md:grid-cols-3 gap-6">
          {expertises.map((expertise, index) => {
            const Icon = icons[index]
            return (
              <div
                key={expertise.title}
                className="flex flex-col items-center justify-center text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0023DD]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0023DD]" />
                </div>
                <h3 className="text-lg font-semibold text-[#00147D] mb-3">{expertise.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{expertise.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
