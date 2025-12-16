import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { Calendar, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-16">
      {/* Banner */}
      <div className="h-48 md:h-64 w-full overflow-hidden">
        <img src={personalInfo.banner || "/placeholder.svg"} alt="Banner" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative -mt-20 md:-mt-24 flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
            <img
              src={personalInfo.avatar || "/placeholder.svg"}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#00147D]">{personalInfo.name}</h1>
          <p className="mt-2 text-lg md:text-xl text-[#64748b]">{personalInfo.title}</p>
          <p className="mt-1 text-sm text-[#64748b]">{personalInfo.location}</p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-[#0023DD] hover:bg-[#00147D] text-white px-6">
              <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Prendre RDV
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#0023DD] text-[#0023DD] hover:bg-[#0023DD] hover:text-white px-6 bg-transparent"
            >
              <a href={personalInfo.cvLink} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
