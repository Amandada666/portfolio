import { SectionTitle } from "./section-title"
import { Button } from "@/components/ui/button"
import { personalInfo, socialLinks } from "@/lib/data"
import { Calendar, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact" />

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-[#00147D] mb-4">Informations de contact</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-[#64748b] hover:text-[#0023DD] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-[#64748b] hover:text-[#0023DD] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{personalInfo.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-[#64748b]">
                  <MapPin className="w-5 h-5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
                <h4 className="text-sm font-semibold text-[#00147D] mb-3">Retrouvez-moi sur</h4>
                <div className="flex gap-3">
                  {Object.values(socialLinks).map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#f5f7fa] hover:bg-[#0023DD]/10 flex items-center justify-center transition-colors"
                      title={link.name}
                    >
                      <img src={link.icon || "/placeholder.svg"} alt={link.name} className="w-6 h-6 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center items-center text-center bg-[#f5f7fa] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#00147D] mb-2">Discutons de votre projet</h3>
              <p className="text-sm text-[#64748b] mb-6">Prenez rendez-vous pour échanger sur vos besoins e-commerce</p>
              <Button asChild className="bg-[#0023DD] hover:bg-[#00147D] text-white px-8">
                <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Prendre RDV sur Calendly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
