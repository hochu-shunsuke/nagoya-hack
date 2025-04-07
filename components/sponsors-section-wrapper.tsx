import { PageSection } from "@/components/page-section"
import { SectionHeader } from "@/components/section-header"

export function SponsorsSectionWrapper() {
  const sponsors = [
    { name: "スポンサー1", logo: "/placeholder.svg?height=80&width=160" },
    { name: "スポンサー2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "スポンサー3", logo: "/placeholder.svg?height=80&width=160" },
    { name: "スポンサー4", logo: "/placeholder.svg?height=80&width=160" },
    { name: "スポンサー5", logo: "/placeholder.svg?height=80&width=160" },
    { name: "スポンサー6", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <PageSection id="sponsors" variant="muted">
      <SectionHeader title="スポンサー" description="NagoyaHackを支援してくださる企業の皆様です。" />
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
      <div className="mx-auto flex max-w-[400px] flex-col items-center justify-center gap-4 text-center">
        <p className="text-muted-foreground">スポンサーになることに興味がありますか？</p>
        <a
          href="/sponsor"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          スポンサー募集要項
        </a>
      </div>
    </PageSection>
  )
}

