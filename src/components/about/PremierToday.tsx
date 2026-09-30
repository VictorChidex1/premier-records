import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { PREMIER_TODAY } from '@/data/about'

export function PremierToday() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-24">
        <div className="lg:col-span-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            Premier Today
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter text-foreground mb-8 leading-[1.1]"
          >
            Beyond the archive.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            Premier is not only preserving recordings from the past. Its work increasingly sits at the intersection of catalogue management, music publishing, licensing, rights and contemporary audience development.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 border-t border-border/40 pt-16">
        {PREMIER_TODAY.map((area, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
            className="flex flex-col items-start"
          >
            <div className="w-8 h-px bg-primary mb-8" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
              {area.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
