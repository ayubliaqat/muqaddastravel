import { FeaturedArticles } from '@/components/Home/Blogs'
import { FeatureHighlights } from '@/components/Home/FeatureHighlights'
import { HomeHero } from '@/components/Home/HomeHero'
import { WhyChooseUs } from '@/components/Home/WhyChooseUs'
export default function Home() {
  return (
    <>
      <HomeHero />
      <FeatureHighlights />
      <FeaturedArticles />
      <WhyChooseUs />
    </>
  )
}
