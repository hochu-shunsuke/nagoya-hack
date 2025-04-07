export interface ScheduleItem {
  time: string
  title: string
  description?: string
}

export interface Schedule {
  [day: string]: ScheduleItem[]
}

export interface Prize {
  title: string
  description: string
}

export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image?: string
  capacity?: number
  registrationUrl?: string
  requirements?: string
  additionalInfo?: string
  schedule?: Schedule
  prizes?: Prize[]
  url?: string
  isPast?: boolean
}

export interface EventProposal {
  id: string
  title: string
  description: string
  votes: number
  category: string
  date?: string
}

