// src/app/(frontend)/hajj/page.tsx

import HajjFullGuideSection from '@/components/Hajj/HajjFullGuideSection'
import HajjHero from '@/components/Hajj/HajjHero'
import HajjJourneyTimeline from '@/components/Hajj/HajjJourneyTimeline'
import HajjOverview from '@/components/Hajj/HajjOverview'
import HajjTopicGrid from '@/components/Hajj/HajjTopicGrid'
export const metadata = {
  title: 'Complete Hajj Guide | MuqaddasTravel',
  description:
    'Prepare for Hajj with step-by-step guidance, authentic resources, travel advice, checklists, duas, and practical articles to help you perform your pilgrimage with confidence.',
}

export default function HajjPage() {
  return (
    <main>
      <HajjHero />
      <HajjOverview />
      <HajjJourneyTimeline />
      <HajjTopicGrid />
      <HajjFullGuideSection />

      {/* Hajj at a Glance */}

      {/* Quick Start Guides */}

      {/* Hajj Journey Timeline */}

      {/* Featured Hajj Guides */}

      {/* Browse by Topic */}

      {/* Essential Resources */}

      {/* Latest Hajj Articles */}

      {/* Complete Hajj Guide (SEO Content) */}

      {/* FAQs */}

      {/* Related Categories */}

      {/* Call To Action */}
    </main>
  )
}
