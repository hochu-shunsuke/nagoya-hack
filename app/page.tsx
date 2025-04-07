import { LayoutWrapper } from "@/components/layout-wrapper"
import { HeroSectionWrapper } from "@/components/hero-section-wrapper"
import { UpcomingEventsSection } from "@/components/upcoming-events-section"
import { EventVotingSection } from "@/components/event-voting-section"
import { PastEventsSection } from "@/components/past-events-section"
import { AboutSectionWrapper } from "@/components/about-section-wrapper"
import { SponsorsSectionWrapper } from "@/components/sponsors-section-wrapper"
import { FAQSectionWrapper } from "@/components/faq-section-wrapper"
import { CTASectionWrapper } from "@/components/cta-section-wrapper"
import { eventProposals, pastEvents, upcomingEvents } from "@/lib/data"

export default function Home() {
  return (
    <LayoutWrapper>
      <HeroSectionWrapper />
      <UpcomingEventsSection events={upcomingEvents} />
      <EventVotingSection proposals={eventProposals} />
      <PastEventsSection events={pastEvents} />
      <AboutSectionWrapper />
      <SponsorsSectionWrapper />
      <FAQSectionWrapper />
      <CTASectionWrapper />
    </LayoutWrapper>
  )
}

