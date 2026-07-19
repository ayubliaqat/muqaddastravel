import { ExploreTopics } from '@/components/Home/ExploreTopics'
import { HomeHero } from '@/components/Home/HomeHero'
import { JourneyCTA } from '@/components/Home/JourneyCTA'
import { LatestArticles } from '@/components/Home/LatestArticles'
import { TrustHighlights } from '@/components/Home/TrustHighlights'

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustHighlights />
      <LatestArticles />
      <ExploreTopics />
      <JourneyCTA />
    </>
  )
}
