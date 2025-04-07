import { PageSection } from "@/components/page-section"
import { SectionHeader } from "@/components/section-header"
import { EventVoting } from "@/components/event-voting"
import type { EventProposal } from "@/lib/types"

interface EventVotingSectionProps {
  proposals: EventProposal[]
}

export function EventVotingSection({ proposals }: EventVotingSectionProps) {
  return (
    <PageSection id="event-voting" variant="muted">
      <SectionHeader
        title="次回イベントの企画投票"
        description="次回開催してほしいイベントに投票してください。最も票を集めたイベントを優先的に企画します。"
      />
      <div className="mx-auto max-w-4xl space-y-6 py-12">
        <EventVoting proposals={proposals} />
      </div>
    </PageSection>
  )
}

