import { PageSection } from "@/components/page-section"
import { SectionHeader } from "@/components/section-header"
import { UpcomingEvents } from "@/components/upcoming-events"
import type { Event } from "@/lib/types"

interface UpcomingEventsSectionProps {
  events: Event[]
}

export function UpcomingEventsSection({ events }: UpcomingEventsSectionProps) {
  return (
    <PageSection id="events" variant="muted">
      <SectionHeader
        title="今後のイベント"
        description="名古屋で開催される技術イベントの最新情報をチェックしましょう。"
      />
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <UpcomingEvents key={event.id} event={event} />
        ))}
      </div>
    </PageSection>
  )
}

