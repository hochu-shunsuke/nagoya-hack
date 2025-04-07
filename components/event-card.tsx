"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import type { Event } from "@/lib/types"
import { EventDetail } from "@/components/event-detail"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <img
              src={event.image || "/placeholder.svg?height=200&width=400"}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <div className="mb-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            {event.capacity && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>定員{event.capacity}名</span>
              </div>
            )}
          </div>
          <CardTitle className="mb-2">{event.title}</CardTitle>
          <p className="text-muted-foreground line-clamp-3">{event.description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between">
          <Button variant="outline" onClick={() => setShowDetail(true)}>
            詳細を見る
          </Button>
          {event.registrationUrl && (
            <Button asChild>
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                申し込む
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>

      {showDetail && <EventDetail event={event} onClose={() => setShowDetail(false)} />}
    </>
  )
}

