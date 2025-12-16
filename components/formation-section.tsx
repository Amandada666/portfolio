import { SectionTitle } from "./section-title"
import { diplomes, langues } from "@/lib/data"
import { GraduationCap, Globe } from "lucide-react"

export function FormationSection() {
  return (
    <section id="formation" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Formation & Langues" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Diplômes */}
          <div className="bg-[#f5f7fa] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0023DD]/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#0023DD]" />
              </div>
              <h3 className="text-lg font-semibold text-[#00147D]">Diplômes</h3>
            </div>

            {diplomes.map((diplome) => (
              <div key={diplome.title} className="mt-4">
                <h4 className="font-medium text-[#1a1a1a]">{diplome.title}</h4>
                <p className="text-sm text-[#0023DD]">{diplome.school}</p>
                <p className="text-sm text-[#64748b] mt-1">{diplome.description}</p>
              </div>
            ))}
          </div>

          {/* Langues */}
          <div className="bg-[#f5f7fa] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0023DD]/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#0023DD]" />
              </div>
              <h3 className="text-lg font-semibold text-[#00147D]">Langues</h3>
            </div>

            <div className="space-y-3 mt-4">
              {langues.map((langue) => (
                <div key={langue.name} className="flex justify-between items-center">
                  <span className="font-medium text-[#1a1a1a]">{langue.name}</span>
                  <span className="text-sm text-[#64748b] bg-white px-3 py-1 rounded-full">{langue.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
