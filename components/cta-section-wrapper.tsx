import { PageSection } from "@/components/page-section"
import { CTASection } from "@/components/cta-section"

export function CTASectionWrapper() {
  return (
    <PageSection className="bg-primary text-primary-foreground" id="cta">
      <CTASection
        title="NagoyaHack"
        description="NagoyaHackと名古屋のエンジニア学生を盛り上げましょう！"
        primaryCtaText="イベントに参加する"
        primaryCtaLink="https://connpass.com/user/Josho/open/"
        secondaryCtaText="お問い合わせ(Xにて)"
        secondaryCtaLink="https://x.com/NagoyaHack"
      />
    </PageSection>
  )
}

