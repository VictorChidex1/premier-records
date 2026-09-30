import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Artist } from '@/types'
import { easeOut } from '@/lib/motion'

interface FeaturedArtistProps {
  artists: Artist[]
}

const sectionVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export function FeaturedArtist({ artists }: FeaturedArtistProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (next: number, dir: number) => {
      const count = artists.length
      setDirection(dir)
      setIndex(((next % count) + count) % count)
    },
    [artists.length],
  )

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const artist = artists[index] ?? artists[0]
  const slideNumber = String(index + 1).padStart(2, '0')
  const total = String(artists.length).padStart(2, '0')

  return (
    <section className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="border-b border-border/60 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Featured Artist
        </p>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-foreground">
          Discover the artists and voices that have shaped the Premier catalogue.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={artist.id}
              custom={direction}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -16, transition: { duration: 0.25, ease: easeOut } }}
              variants={sectionVariants}
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-premier-red">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-premier-red" />
                {artist.category ?? 'Premier Artist'}
              </p>

              <h2 className="mt-5 font-heading text-hero font-medium text-foreground">
                {artist.name}
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                {artist.bio}
              </p>

              <Link
                to={`/artists/${artist.slug}`}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                View Artist
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-baseline gap-1.5 font-heading text-sm tracking-widest">
              <span className="text-foreground">{slideNumber}</span>
              <span className="text-muted-foreground">/ {total}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous artist"
                className="flex size-10 items-center justify-center rounded-full border border-border/80 text-foreground transition-colors hover:bg-muted active:scale-95"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next artist"
                className="flex size-10 items-center justify-center rounded-full border border-border/80 text-foreground transition-colors hover:bg-muted active:scale-95"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.img
                key={artist.id}
                src={artist.imageUrl}
                alt={`Portrait of ${artist.name}`}
                custom={direction}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}