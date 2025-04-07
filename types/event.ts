export interface EventScheduleItem {
  time: string
  title: string
  description?: string
}

export interface EventType {
  id: string
  title: string
  description: string
  date: string
  location: string
  image?: string
  registrationUrl?: string
  websiteUrl?: string
  details?: string
  schedule?: EventScheduleItem[]
}

