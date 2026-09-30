import { AboutHero } from '@/components/about/AboutHero'
import { AboutStats } from '@/components/about/AboutStats'
import { HistoryTimeline } from '@/components/about/HistoryTimeline'
import { ArtistArchive } from '@/components/about/ArtistArchive'
import { CatalogueRegions } from '@/components/about/CatalogueRegions'
import { GenreArchive } from '@/components/about/GenreArchive'
import { CatalogueReinterpretations } from '@/components/about/CatalogueReinterpretations'
import { StatementSection } from '@/components/about/StatementSection'
import { PremierToday } from '@/components/about/PremierToday'
import { LeadershipSection } from '@/components/about/LeadershipSection'
import { FutureSection } from '@/components/about/FutureSection'
import { BusinessCta } from '@/components/home/BusinessCta'

export default function About() {
  return (
    <div className="bg-background min-h-screen overflow-hidden selection:bg-primary/20 selection:text-foreground">
      <AboutHero />
      <AboutStats />
      <HistoryTimeline />
      <ArtistArchive />
      <CatalogueRegions />
      <GenreArchive />
      <CatalogueReinterpretations />
      <StatementSection />
      <PremierToday />
      <LeadershipSection />
      <FutureSection />
      <BusinessCta />
    </div>
  )
}