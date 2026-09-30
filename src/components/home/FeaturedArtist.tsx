import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Disc3, Sparkles, ShieldCheck, Music } from 'lucide-react'
import type { Artist } from '@/types'
import { easeOut } from '@/lib/motion'

interface FeaturedArtistProps {
  artists: Artist[]
}

interface ArtistMeta {
  era: string
  landmarkTrack: string
  catalogueCode: string
  accolade: string
  vinylRpm: string
}

const ARTIST_METADATA: Record<string, ArtistMeta> = {
  'sir-victor-uwaifo': {
    era: '1960s – 2021',
    landmarkTrack: 'Joromi · Guitar Boy',
    catalogueCode: 'PR-LP-019',
    accolade: 'First African Gold Disc Recipient · 18-String Magic Guitar',
    vinylRpm: '33⅓ RPM · Master Vinyl',
  },
  'gentleman-mike-ejeagha': {
    era: '1960s – 2025',
    landmarkTrack: 'Ka Esi Le Onye Isi Oche',
    catalogueCode: 'PR-LP-034',
    accolade: 'Didactic Folklore Legend · Premier Repertoire Master',
    vinylRpm: '33⅓ RPM · Folklore Pressing',
  },
  'dr-victor-olaiya': {
    era: '1954 – 2020',
    landmarkTrack: 'Baby Jowo · Omo Pupa',
    catalogueCode: 'PR-LP-007',
    accolade: 'The Evil Genius of Highlife · Cool Cats Bandleader',
    vinylRpm: '45 RPM · Archival Mono',
  },
  'mya-blue': {
    era: '2024 – Contemporary',
    landmarkTrack: 'Joromi (AI Reimagined)',
    catalogueCode: 'PR-DIG-001',
    accolade: 'Afrobeats & Heritage Tech · Next-Gen Creative AI',
    vinylRpm: 'Digital Master · Spatial Audio',
  },
}

const getArtistMeta = (artist: Artist): ArtistMeta => {
  return (
    ARTIST_METADATA[artist.id] ?? {
      era: 'Archival Repertoire',
      landmarkTrack: 'Master Recording',
      catalogueCode: `PR-CAT-${artist.id.slice(0, 3).toUpperCase()}`,
      accolade: 'Pioneering African musical heritage under Premier Records.',
      vinylRpm: '33⅓ RPM · Master Pressing',
    }
  )
}

export function FeaturedArtist({ artists }: FeaturedArtistProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const count = artists?.length || 0

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (count === 0) return
      setDirection(dir)
      setIndex(((next % count) + count) % count)
    },
    [count],
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

  if (!artists || artists.length === 0) {
    return null
  }

  const artist = artists[index] ?? artists[0]
  const meta = getArtistMeta(artist)

  return (
    <section className="relative overflow-x-clip bg-background py-16 sm:py-24 transition-colors">
      {/* Subtle Ambient Background Warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(217,119,6,0.04),transparent)]"
      />

      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-border/60 pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground shadow-2xs">
              <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
              Archival Repertoire & Master Roster
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Voices of the <span className="font-heading italic font-normal text-muted-foreground">Premier</span> Legacy
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
            Preserving iconic Nigerian innovators whose master tapes form the cornerstone of modern African music history.
          </p>
        </div>

        {/* Center Stage Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Editorial Dossier & Landmark Repertoire (7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={artist.id}
                custom={direction}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: easeOut }}
              >
                {/* Category & Registry Strip */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-premier-red">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-premier-red animate-pulse" />
                    {artist.category ?? 'Premier Master Artist'}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs font-mono font-medium text-muted-foreground">
                    {meta.catalogueCode}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {meta.era}
                  </span>
                </div>

                {/* Artist Name */}
                <h3 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                  {artist.name}
                </h3>

                {/* Bio Narrative */}
                <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {artist.bio}
                </p>

                {/* Landmark Repertoire & Equalizer Matrix Card */}
                <div className="mt-8 max-w-xl rounded-2xl border border-border/80 bg-muted/40 p-5 backdrop-blur-xs shadow-2xs">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <div className="flex items-center gap-2">
                      <Music className="size-4 text-amber-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Landmark Master Work
                      </span>
                    </div>

                    {/* Animated Equalizer Waveform Bars */}
                    <div className="flex items-end gap-1 h-3.5" aria-hidden="true">
                      <span className="w-0.5 h-3 bg-amber-500 rounded-full animate-pulse" />
                      <span className="w-0.5 h-2 bg-amber-500 rounded-full animate-pulse delay-75" />
                      <span className="w-0.5 h-3.5 bg-amber-500 rounded-full animate-pulse delay-150" />
                      <span className="w-0.5 h-1.5 bg-amber-500 rounded-full animate-pulse delay-100" />
                      <span className="w-0.5 h-2.5 bg-amber-500 rounded-full animate-pulse delay-200" />
                    </div>
                  </div>

                  <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="text-sm sm:text-base font-bold text-foreground">
                        {meta.landmarkTrack}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {meta.accolade}
                      </p>
                    </div>

                    <span className="inline-flex self-start sm:self-auto shrink-0 items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="size-3" />
                      Master Rights Cleared
                    </span>
                  </div>
                </div>

                {/* Dual CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/artists/${artist.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
                  >
                    <span>Explore Discography</span>
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <Link
                    to="/licensing"
                    className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground shadow-2xs transition-all hover:bg-muted active:scale-95"
                  >
                    <span>License Repertoire</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: 3D Archival Vinyl Vault & Record Reveal (5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] pr-6 sm:pr-10">
              {/* Warm Ambient Rim-Light Backing */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-amber-500/10 blur-3xl"
              />

              {/* Vinyl & Sleeve Assembly */}
              <div
                className="group relative aspect-[4/5] w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* 1. Photorealistic Grooved Vinyl Record (Slides Out Behind Sleeve) */}
                <motion.div
                  animate={{
                    x: isHovered ? 40 : 20,
                    rotate: isHovered ? 45 : 12,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                  className="absolute top-6 sm:top-8 -right-6 sm:-right-8 bottom-6 sm:bottom-8 aspect-square rounded-full border border-neutral-700/60 shadow-2xl overflow-hidden pointer-events-none transition-transform"
                  style={{
                    background:
                      'radial-gradient(circle at center, #0a0a0a 0%, #171717 28%, #0d0d0d 30%, #1e1e1e 48%, #111111 52%, #1b1b1b 72%, #0d0d0d 76%, #050505 100%)',
                  }}
                >
                  {/* Concentric Vinyl Grooves Microtexture */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full opacity-60 bg-[repeating-radial-gradient(circle_at_center,transparent_0px,transparent_2px,rgba(255,255,255,0.04)_3px,transparent_4px)]"
                  />

                  {/* Dynamic Specular Sheen Wedges */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full opacity-20 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(255,255,255,0.4)_0deg,transparent_60deg,rgba(255,255,255,0.4)_120deg,transparent_180deg,rgba(255,255,255,0.4)_240deg,transparent_300deg,rgba(255,255,255,0.4)_360deg)]"
                  />

                  {/* Center Premier Gold Label */}
                  <div className="absolute inset-0 m-auto size-24 sm:size-28 rounded-full border-2 border-amber-400/50 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-950 p-2 text-center text-white shadow-inner flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1">
                      <Disc3 className="size-3 text-amber-200" />
                      <span className="text-[7px] font-black uppercase tracking-widest text-amber-100">
                        Premier
                      </span>
                    </div>
                    <p className="mt-0.5 line-clamp-1 text-[8px] font-bold tracking-tight text-white max-w-[75px]">
                      {artist.name}
                    </p>
                    <span className="text-[6px] uppercase tracking-wider text-amber-200/80 font-mono mt-0.5">
                      {meta.vinylRpm}
                    </span>
                    {/* Spindle Hole */}
                    <div className="mt-1 size-2.5 rounded-full border border-black/50 bg-neutral-950 shadow-inner" />
                  </div>
                </motion.div>

                {/* 2. Heavy-Weight Matte Archival Record Jacket */}
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                  className="relative z-10 h-full w-full overflow-hidden rounded-3xl border border-border/80 bg-neutral-950 shadow-2xl transition-all duration-500 hover:shadow-amber-500/10"
                >
                  {/* Portrait Image */}
                  <img
                    src={artist.imageUrl}
                    alt={`Portrait of ${artist.name}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  />

                  {/* Subtle Archival Film Vignette */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none"
                  />

                  {/* Top-Right Catalog Stamp */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-xs">
                      <Sparkles className="size-3 text-amber-400" />
                      {meta.catalogueCode}
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-mono text-white/80 backdrop-blur-md">
                      {meta.era}
                    </span>
                  </div>

                  {/* Bottom Sleeve Badge: Archive Distinction */}
                  <div className="absolute bottom-4 inset-x-4 rounded-2xl border border-white/15 bg-black/70 p-4 text-white backdrop-blur-xl shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                        <ShieldCheck className="size-3" />
                        Verified Master
                      </span>
                      <span className="text-[10px] font-mono text-white/50">
                        Premier Repertoire
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-bold tracking-tight text-white">
                      {artist.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/70 line-clamp-1 italic">
                      "{meta.accolade}"
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Master Artist Rail (Scrubber) */}
        <div className="mt-14 sm:mt-18 border-t border-border/60 pt-8 sm:pt-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Master Artist Rail
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="text-xs font-mono font-medium text-foreground">
                {String(index + 1).padStart(2, '0')} / {String(artists.length).padStart(2, '0')}
              </span>
            </div>

            {/* Quick Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous artist"
                className="flex size-9 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition-all hover:bg-muted active:scale-95 shadow-2xs"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next artist"
                className="flex size-9 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition-all hover:bg-muted active:scale-95 shadow-2xs"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* 4-Item Interactive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {artists.map((item, i) => {
              const isActive = i === index
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={`group relative flex items-center gap-3 rounded-2xl border p-3 text-left transition-all ${
                    isActive
                      ? 'border-foreground/30 bg-muted/80 shadow-xs'
                      : 'border-border/60 bg-background hover:border-border hover:bg-muted/40'
                  }`}
                >
                  {/* Miniature Portrait Thumbnail */}
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-border/80">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={`h-full w-full object-cover transition-transform duration-500 ${
                        isActive ? 'scale-105' : 'group-hover:scale-105 opacity-80'
                      }`}
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-amber-500/15" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono font-medium text-muted-foreground">
                        0{i + 1}
                      </span>
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                      )}
                    </div>
                    <p className="truncate text-xs sm:text-sm font-bold text-foreground">
                      {item.name}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground uppercase tracking-wider">
                      {item.genre ?? 'Heritage'}
                    </p>
                  </div>

                  {/* Active Underline Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeArtistUnderline"
                      className="absolute -bottom-px inset-x-3 h-0.5 bg-amber-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}