interface SectionTitleProps {
  title: string
  id?: string
}

export function SectionTitle({ title, id }: SectionTitleProps) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-bold text-[#00147D] mb-8 text-center">
      {title}
    </h2>
  )
}
