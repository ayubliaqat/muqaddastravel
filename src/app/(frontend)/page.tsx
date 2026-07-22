import { AnnouncementBar } from '@/components/layout/AnnouncementBar'

import { HomeHero } from '@/components/Home/HomeHero'
import ExploreTopics from '@/components/Home/ExploreTopics'
import { TrustHighlights } from '@/components/Home/TrustHighlights'
import { PopularGuides } from '@/components/Home/LatestArticles'
import { JourneyCTA } from '@/components/Home/JourneyCTA'
import { CategoryGrid } from '@/components/Home/PopularGuides'
import TrustBanner from '@/components/Home/TrustBanner'
export default function Home() {
  return (
    <>
      <HomeHero />
      <CategoryGrid />
      <TrustBanner />
      <ExploreTopics />

      <JourneyCTA />
    </>
  )
}
