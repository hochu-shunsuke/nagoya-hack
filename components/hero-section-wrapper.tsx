import { HeroSection } from "@/components/hero-section"

export function HeroSectionWrapper() {
  return (
    <HeroSection
      title="NagoyaHack"
      subtitle="名古屋のテック系大学生による団体です．ハッカソン，ワークショップ，ミートアップなど様々なイベントを開催しています．"
      ctaText="イベントを探す"
      ctaLink="#events"
      secondaryCtaText="詳細を見る"
      secondaryCtaLink="#about"
    />
  )
}

