import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Artist } from '@/types'

interface FeaturedArtistProps {
  artist: Artist
}

export function FeaturedArtist({ artist }: FeaturedArtistProps) {
  return (
    <section className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Featured Artist
          </p>
          <h2 className="mt-4 font-heading text-hero font-medium text-foreground">
            {artist.name}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {artist.bio}
          </p>
          <Link
            to={`/artists/${artist.slug}`}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            View Artist
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <div
            aria-hidden="true"
            className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-br from-accent via-secondary to-muted"
          />
        </div>
      </div>
    </section>
  )
}