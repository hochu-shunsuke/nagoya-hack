import type { Schedule } from "@/lib/types"

interface EventScheduleProps {
  schedule: Schedule
}

export function EventSchedule({ schedule }: EventScheduleProps) {
  return (
    <div className="space-y-8">
      {Object.entries(schedule).map(([day, items]) => (
        <div key={day} className="space-y-4">
          <h3 className="font-bold text-lg">{day}</h3>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 border-l-2 border-muted-foreground/20 pl-4 py-1">
                <div className="w-20 flex-shrink-0 font-medium">{item.time}</div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  {item.description && <div className="text-sm text-muted-foreground">{item.description}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

