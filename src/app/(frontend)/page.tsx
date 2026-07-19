import { HomeHero } from '@/components/Home/HomeHero'
import { LatestArticles } from '@/components/Home/LatestArticles'
import { TrustHighlights } from '@/components/Home/TrustHighlights'

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustHighlights />
      <LatestArticles />
    </>
  )
}
