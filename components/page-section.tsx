import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageSectionProps {
  id?: string
  children: ReactNode
  className?: string
  variant?: "default" | "muted"
}

export function PageSection({ id, children, className, variant = "default" }: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-24 lg:py-32",
        variant === "muted" && "bg-muted",
        className
      )}
    >
      <div className="mx-auto px-4">{children}</div>
    </section>
  )
}
