import { personalInfo } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#00147D] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold">{personalInfo.name}</p>
            <p className="text-sm text-white/70">{personalInfo.title}</p>
          </div>

          <p className="text-sm text-white/70">
            © {currentYear} {personalInfo.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
