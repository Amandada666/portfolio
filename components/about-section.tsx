import { SectionTitle } from "./section-title"
import { aboutText, expertiseIntro } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="À propos de moi" />

        <div className="bg-[#f5f7fa] rounded-xl p-6 md:p-8">
          <p className="text-[#1a1a1a] leading-relaxed whitespace-pre-line text-center">{aboutText}</p>

          <div className="mt-8 pt-8 border-t border-[#e2e8f0]">
            <h3 className="text-xl font-semibold text-[#00147D] mb-4">Mon expertise</h3>
            <p className="text-[#1a1a1a] leading-relaxed whitespace-pre-line">{expertiseIntro}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
