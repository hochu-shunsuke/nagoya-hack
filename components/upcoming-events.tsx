import { EventCard } from "@/components/event-card"
import type { Event } from "@/lib/types"

interface UpcomingEventsProps {
  event: Event
}

export function UpcomingEvents({ event }: UpcomingEventsProps) {
  return <EventCard event={event} />
}

