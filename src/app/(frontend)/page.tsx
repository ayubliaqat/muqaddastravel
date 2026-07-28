import { FeaturedArticles } from '@/components/Home/Blogs'
import { ModernStickyScrollGuide } from '@/components/Home/WhatYouWillLearnSection'
import { FeatureHighlights } from '@/components/Home/FeatureHighlights'
import { HomeHero } from '@/components/Home/HomeHero'
import { WhyChooseUs } from '@/components/Home/WhyChooseUs'
import { Features } from '@/components/Home/Features'
import CtaSection from '@/components/Home/CtaSection'
export default function Home() {
  return (
    <>
      <HomeHero />
      <FeatureHighlights />
      <ModernStickyScrollGuide />
      <Features />
      <CtaSection />
    </>
  )
}
