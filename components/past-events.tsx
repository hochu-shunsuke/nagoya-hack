"use client"

import { useState } from "react"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { Event } from "@/lib/types"

interface PastEventsProps {
  events: Event[]
  initialCount?: number
}

export function PastEvents({ events, initialCount = 3 }: PastEventsProps) {
  const [showAll, setShowAll] = useState(false)

  const displayedEvents = showAll ? events : events.slice(0, initialCount)

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {events.length > initialCount && (
        <div className="flex justify-center mt-6">
          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="flex items-center gap-2">
            {showAll ? (
              <>
                表示を減らす <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                もっと見る <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}

