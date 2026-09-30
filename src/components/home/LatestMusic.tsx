import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import type { Release } from '@/types'

interface LatestMusicProps {
  releases?: Release[]
}

const VERIFIED_RELEASES = [
  {
    id: 'yegede',
    title: 'YEGEDE (SAKARAPIANO)',
    artist: 'DJ Flammzy & Yusufu Olatunji',
    releaseDate: 'June 14, 2024',
    label: 'Dflamz Nation / Premier Records',
    genre: 'World / Sakara-inspired contemporary fusion',
    type: 'Single',
    duration: '3:27',
    image: '/assets/YEGEDE (SAKARAPIANO).png',
    slug: 'yegede',
  },
  {
    id: 'joromi',
    title: 'Joromi',
    artist: 'Sir Victor Uwaifo feat. Mya Blue',
    releaseDate: 'May 24, 2024',
    label: 'Premier Records Limited',
    genre: 'World / Afrobeats / Amapiano fusion',
    type: 'Single',
    duration: '3:16',
    image: '/assets/joromi.png',
    slug: 'joromi',
  },
  {
    id: 'baby-mi-da',
    title: 'Baby Mi Da (Baby Jowo)',
    artist: 'Dr. Victor Olaiya feat. 2Baba',
    releaseDate: '2013',
    label: 'Premier Records',
    genre: 'Highlife',
    type: 'Single / Remix',
    duration: '4:28',
    image: '/assets/Baby Mi Da.jpg',
    slug: 'baby-mi-da',
  },
]

export function LatestMusic({}: LatestMusicProps) {
  return (
    <section className="bg-background pt-24 pb-32 sm:pt-32 sm:pb-40">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              Latest Music
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-[4rem] lg:leading-[1.1] font-medium text-foreground tracking-tight"
            >
              Recent Releases
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Explore recent releases and new interpretations from the Premier catalogue.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          >
            <Link
              to="/music"
              className="group relative inline-flex shrink-0 items-center gap-3 text-sm font-medium text-foreground pb-2 overflow-hidden"
            >
              <span className="uppercase tracking-widest text-xs font-semibold">View All Music</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-border transition-transform duration-500 ease-out group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </div>

        {/* EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] border-y border-border/60 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
          {VERIFIED_RELEASES.map((release, i) => {
            const isFirst = i === 0;
            const isLast = i === VERIFIED_RELEASES.length - 1;
            
            return (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, delay: i * 0.15, ease: easeOut }}
                className={`group relative flex flex-col ${
                  isFirst 
                    ? 'py-12 lg:py-16 lg:pr-12 lg:pl-0' 
                    : isLast 
                      ? 'py-12 lg:py-16 lg:pl-12 lg:pr-0'
                      : 'py-12 lg:py-16 lg:px-12'
                }`}
              >
                <Link to={`/music/${release.slug}`} className="absolute inset-0 z-10" aria-label={`View ${release.title}`} />
                
                {/* ARTWORK */}
                <div className="relative overflow-hidden rounded-[2px] bg-muted/20 shadow-sm border border-border/20">
                   <div className="aspect-square w-full overflow-hidden">
                     <img 
                       src={release.image} 
                       alt={release.title}
                       className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 group-hover:rotate-[0.5deg] will-change-transform"
                     />
                   </div>
                   
                   {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-black/0 transition-colors duration-700 ease-out group-hover:bg-black/5" />
                   
                   {/* Hover Action / Explore ↗ */}
                   <div className="absolute top-4 right-4 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/95 backdrop-blur-sm shadow-sm border border-border/50 text-foreground">
                       <ArrowUpRight className="size-4" />
                     </div>
                   </div>
                </div>

                {/* METADATA */}
                <div className="mt-10 flex flex-col flex-1 justify-between gap-6">
                  <div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-medium text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                      {release.title}
                    </h3>
                    <p className="mt-3 text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {release.artist}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-border/40">
                    <div className="flex items-start justify-between gap-4">
                       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground shrink-0">Genre</span>
                       <span className="text-[11px] font-medium tracking-wide text-foreground text-right">{release.genre}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground shrink-0">Label</span>
                       <span className="text-[11px] font-medium tracking-wide text-foreground text-right">{release.label}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground shrink-0">Type</span>
                       <span className="text-[11px] font-medium tracking-wide text-foreground text-right">{release.type} &middot; {release.duration}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                       <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground shrink-0">Released</span>
                       <span className="text-[11px] font-medium tracking-wide text-foreground text-right">{release.releaseDate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}