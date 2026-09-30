import { SectionReveal } from '@/components/layout/SectionReveal'
import { Hero } from '@/components/home/Hero'
import { FeaturedArtist } from '@/components/home/FeaturedArtist'
import { LatestMusic } from '@/components/home/LatestMusic'
import { PublishingPreview } from '@/components/home/PublishingPreview'
import { CataloguePreview } from '@/components/home/CataloguePreview'
import { LicensingPreview } from '@/components/home/LicensingPreview'
import { StoryPreview } from '@/components/home/StoryPreview'
import { LatestNews } from '@/components/home/LatestNews'
import { BusinessCta } from '@/components/home/BusinessCta'
import { useHomeContent } from '@/hooks/useHomeContent'

export default function Home() {
  const {
    featuredArtists,
    releases,
    catalogue,
    news,
    publishing,
    licensing,
    story,
  } = useHomeContent()

  return (
    <>
      <Hero />
      <SectionReveal>
        <FeaturedArtist artists={featuredArtists} />
      </SectionReveal>
      <SectionReveal>
        <LatestMusic releases={releases} />
      </SectionReveal>
      <SectionReveal>
        <PublishingPreview heading={publishing.heading} body={publishing.body} cta={publishing.cta} />
      </SectionReveal>
      <SectionReveal>
        <CataloguePreview items={catalogue} />
      </SectionReveal>
      <SectionReveal>
        <LicensingPreview heading={licensing.heading} body={licensing.body} cta={licensing.cta} />
      </SectionReveal>
      <SectionReveal>
        <StoryPreview heading={story.heading} body={story.body} cta={story.cta} />
      </SectionReveal>
      <SectionReveal>
        <LatestNews articles={news} />
      </SectionReveal>
      <SectionReveal>
        <BusinessCta />
      </SectionReveal>
    </>
  )
}