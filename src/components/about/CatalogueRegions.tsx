import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { CATALOGUE_REGIONS } from '@/data/about'

export function CatalogueRegions() {
  return (
    <section className="border-t border-border/40 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px] bg-muted/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="flex flex-col">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            The Catalogue
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6"
          >
            A catalogue without borders.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            Premier's catalogue reflects the geographical and cultural diversity of Nigerian music — with recordings connected to different regions of Nigeria and the wider African musical landscape.
          </motion.p>
        </div>

        <div className="relative flex flex-col gap-6 lg:gap-8 items-start lg:items-end w-full">
          {CATALOGUE_REGIONS.map((region, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
              className="group relative flex items-center gap-6 cursor-default"
            >
              <div className="w-12 h-px bg-border/40 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-widest text-muted-foreground transition-colors duration-500 group-hover:text-foreground uppercase">
                {region}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
