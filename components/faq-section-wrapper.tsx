import { PageSection } from "@/components/page-section"
import { SectionHeader } from "@/components/section-header"

export function FAQSectionWrapper() {
  const faqs = [
    {
      question: "参加費はかかりますか？",
      answer:
        "イベントによって異なります。多くのイベントは無料ですが、一部のワークショップやセミナーは有料の場合があります。各イベントの詳細ページでご確認ください。",
    },
    {
      question: "プログラミング経験がなくても参加できますか？",
      answer:
        "はい、初心者向けのイベントも多数ご用意しています。各イベントの対象レベルは詳細ページに記載されていますので、ご確認ください。",
    },
    {
      question: "チームは事前に組む必要がありますか？",
      answer:
        "ハッカソンなどのチームイベントでは、事前にチームを組んでの参加も可能ですが、当日のチーム形成セッションで新しいチームを作ることもできます。",
    },
    {
      question: "持ち物は何が必要ですか？",
      answer:
        "基本的にはノートパソコン、充電器、学生証（学生の場合）をお持ちください。イベントによって必要なものが異なる場合は、詳細ページでご案内します。",
    },
    {
      question: "学生以外も参加できますか？",
      answer:
        "多くのイベントは学生だけでなく、社会人や研究者など幅広い方々にご参加いただけます。対象者については各イベントの詳細をご確認ください。",
    },
    {
      question: "イベントの様子は記録されますか？",
      answer:
        "はい、多くのイベントでは写真や動画による記録を行っています。撮影NGの方は受付時にスタッフにお申し出ください。",
    },
  ]

  return (
    <PageSection id="faq">
      <SectionHeader title="よくある質問" description="参加を検討されている方からよく寄せられる質問です。" />
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg border bg-background p-6">
            <h3 className="text-lg font-bold">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </PageSection>
  )
}

