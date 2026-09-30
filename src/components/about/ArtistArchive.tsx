import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { ARTIST_WALL } from '@/data/about'

export function ArtistArchive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="border-t border-border/40 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px] relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-24">
        <div className="lg:col-span-5">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            What We Represent
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6"
          >
            The voices that shaped generations.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="text-lg text-muted-foreground leading-relaxed max-w-md"
          >
            Across more than six decades, Premier's catalogue has included artists whose recordings became part of Nigeria's musical heritage — spanning generations, regions and genres.
          </motion.p>
        </div>
      </div>

      {/* Artist Typographic Wall */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-start items-start gap-x-8 lg:gap-x-12 gap-y-2 lg:gap-y-4 relative z-10">
        {ARTIST_WALL.map((artist, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.05, ease: easeOut }}
            className="relative"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span 
              className={`font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tighter cursor-default transition-all duration-500 ease-out inline-block
                ${hoveredIndex === i ? 'text-foreground scale-105' : hoveredIndex !== null ? 'text-muted-foreground/30' : 'text-muted-foreground'}`
              }
            >
              {artist}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Floating Image (Desktop Only) */}
      <div className="hidden lg:block pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] z-0">
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 0.15, scale: 1, y: 0 }} // Keep opacity very low so it acts as subtle background
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="absolute inset-0 grayscale-[50%] contrast-125 mix-blend-multiply dark:mix-blend-screen"
            >
              {/* Using a placeholder archival image until real ones are provided per artist */}
              <img src="/assets/AboutHero2.jpeg" alt="" className="w-full h-full object-cover rounded-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  )
}
