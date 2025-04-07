import { PageSection } from "@/components/page-section"
import { CTASection } from "@/components/cta-section"

export function CTASectionWrapper() {
  return (
    <PageSection className="bg-primary text-primary-foreground" id="cta">
      <CTASection
        title="あなたのアイデアを形にしよう"
        description="NagoyaHackで新しい仲間と出会い、革新的なプロジェクトを作り上げましょう。"
        primaryCtaText="イベントに参加する"
        primaryCtaLink="/register"
        secondaryCtaText="お問い合わせ"
        secondaryCtaLink="/contact"
      />
    </PageSection>
  )
}

