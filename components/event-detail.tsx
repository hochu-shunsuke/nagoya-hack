"use client"

import { useEffect } from "react"
import { X, Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventSchedule } from "@/components/event-schedule"
import type { Event } from "@/lib/types"

interface EventDetailProps {
  event: Event
  onClose: () => void
}

export function EventDetail({ event, onClose }: EventDetailProps) {
  // Prevent scrolling when the detail view is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-xl shadow-lg border">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-background border-b">
          <h2 className="text-2xl font-bold">{event.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Event info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            {event.capacity && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>定員{event.capacity}名</span>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="mb-6">
            <img
              src={event.image || "/placeholder.svg?height=300&width=600"}
              alt={event.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">詳細</TabsTrigger>
              <TabsTrigger value="schedule">スケジュール</TabsTrigger>
              <TabsTrigger value="prizes">賞品</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-lg">イベント概要</h3>
                <p className="mt-2 text-muted-foreground">{event.description}</p>
              </div>
              {event.requirements && (
                <div>
                  <h3 className="font-medium text-lg">参加条件</h3>
                  <p className="mt-2 text-muted-foreground">{event.requirements}</p>
                </div>
              )}
              {event.additionalInfo && (
                <div>
                  <h3 className="font-medium text-lg">追加情報</h3>
                  <p className="mt-2 text-muted-foreground">{event.additionalInfo}</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="schedule" className="mt-4">
              {event.schedule ? (
                <EventSchedule schedule={event.schedule} />
              ) : (
                <p className="text-muted-foreground">スケジュールは準備中です。</p>
              )}
            </TabsContent>
            <TabsContent value="prizes" className="mt-4">
              {event.prizes ? (
                <div className="grid gap-4 md:grid-cols-3">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h4 className="font-bold">{prize.title}</h4>
                      <p className="text-sm text-muted-foreground">{prize.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">賞品情報は準備中です。</p>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 flex justify-between p-6 bg-background border-t">
          <Button variant="outline" onClick={onClose}>
            閉じる
          </Button>
          {event.registrationUrl && (
            <Button asChild>
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                申し込む
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

