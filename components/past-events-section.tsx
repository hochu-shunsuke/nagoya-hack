import { PageSection } from "@/components/page-section"
import { SectionHeader } from "@/components/section-header"
import { PastEvents } from "@/components/past-events"
import type { Event } from "@/lib/types"

interface PastEventsSectionProps {
  events: Event[]
}

export function PastEventsSection({ events }: PastEventsSectionProps) {
  return (
    <PageSection id="past-events">
      <SectionHeader
        title="過去のイベント"
        description="これまでに開催したイベントの一覧です。過去のイベントの様子をご覧ください。"
      />
      <PastEvents events={events} />
    </PageSection>
  )
}

