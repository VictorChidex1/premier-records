import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Release } from '@/types'

interface LatestMusicProps {
  releases: Release[]
}

export function LatestMusic({ releases }: LatestMusicProps) {
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Latest Music
            </p>
            <h2 className="mt-4 font-heading text-section font-medium text-foreground">
              Recent Releases
            </h2>
          </div>
          <Link
            to="/music"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground"
          >
            View All Music
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release) => (
            <Link
              key={release.id}
              to={`/music/${release.slug}`}
              className="group block"
            >
              <div
                aria-hidden="true"
                className="aspect-square w-full rounded-2xl bg-gradient-to-br from-secondary via-muted to-accent/60 transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  {release.genre ?? 'Premier'}
                </p>
                <h3 className="mt-1 font-heading text-xl font-medium text-foreground">
                  {release.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {release.releaseDate?.getFullYear() ?? '2026'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}