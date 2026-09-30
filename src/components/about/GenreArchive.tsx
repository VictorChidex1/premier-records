import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { SOUND_GENRES } from '@/data/about'

export function GenreArchive() {
  return (
    <section className="border-t border-border/40 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-24">
        <div className="lg:col-span-5">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            The Sound
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6"
          >
            From Highlife to the future.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="text-lg text-muted-foreground leading-relaxed max-w-md"
          >
            The catalogue has never belonged to a single sound. It has moved through generations of Nigerian music, preserving traditional forms while making room for new interpretations.
          </motion.p>
        </div>
      </div>

      {/* Typographic Genre Grid */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-16 gap-y-12 lg:gap-y-20 py-12">
        {SOUND_GENRES.map((genre, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: (i % 5) * 0.1, ease: easeOut }}
            className="relative group cursor-default"
            style={{ marginTop: i % 2 === 0 ? '0px' : '40px' }} // Staggered layout
          >
            <div className="text-4xl sm:text-6xl lg:text-[7rem] font-heading font-medium tracking-tighter text-transparent opacity-40 transition-all duration-700 group-hover:text-foreground group-hover:opacity-100"
                 style={{ WebkitTextStroke: '1.5px var(--foreground)' }}>
              {genre}
            </div>
            {/* Subtle floating line */}
            <div className="absolute -bottom-4 left-0 w-0 h-px bg-primary transition-all duration-700 ease-out group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
