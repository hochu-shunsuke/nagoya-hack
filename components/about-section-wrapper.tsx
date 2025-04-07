import { PageSection } from "@/components/page-section"
import { SectionHeader } from "@/components/section-header"
import { AboutSection } from "@/components/about-section"

export function AboutSectionWrapper() {
  return (
    <PageSection id="about">
      <SectionHeader
        title="NagoyaHackとは"
        description="NagoyaHackは、名古屋地域の学生とテクノロジー企業をつなぐコミュニティです。様々なイベントを通じて、学びと成長の機会を提供しています。"
      />
      <div className="mx-auto max-w-5xl py-12">
        <AboutSection
          title=""
          description=""
          imageSrc="/placeholder.svg?height=400&width=600"
          features={[
            {
              title: "学びと成長",
              description:
                "プログラミングやデザインのスキルを磨きながら、実践的な問題解決能力を身につけることができます。",
            },
            {
              title: "ネットワーキング",
              description: "同じ興味を持つ仲間や、業界のプロフェッショナルとの出会いの場です。",
            },
            {
              title: "キャリア形成",
              description: "スポンサー企業との交流を通じて、インターンシップや就職のチャンスを掴むことができます。",
            },
          ]}
        />
      </div>
    </PageSection>
  )
}

