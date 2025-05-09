import { Button } from "@/components/ui/button"

interface Sponsor {
  name: string
  logo: string
  url?: string
}

interface SponsorsSectionProps {
  title: string
  description: string
  sponsors: Sponsor[]
  ctaText?: string
  ctaLink?: string
}

export function SponsorsSection({ title, description, sponsors, ctaText, ctaLink }: SponsorsSectionProps) {
  return (
    <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center justify-center rounded-lg border bg-background p-8">
              <img
                src={sponsor.logo || "/placeholder.svg"}
                width={160}
                height={80}
                alt={`${sponsor.name}のロゴ`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

