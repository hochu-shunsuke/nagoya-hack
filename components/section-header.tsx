interface SectionHeaderProps {
  title: string
  description: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col ${centered ? "items-center justify-center text-center" : ""} space-y-4 ${className}`}
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

