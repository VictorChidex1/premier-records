import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { CASE_STUDIES } from '@/data/about'

export function CatalogueReinterpretations() {
  return (
    <section className="border-t border-border/40 pt-24 pb-32 sm:pt-32 sm:pb-40 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 lg:mb-32">
        <div className="lg:col-span-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            From Archive to New Listeners
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter text-foreground leading-[1.1]"
          >
            A catalogue can be preserved without being left in the past.
          </motion.h2>
        </div>
      </div>

      <div className="flex flex-col gap-32 lg:gap-48">
        {CASE_STUDIES.map((study, i) => {
          const isEven = i % 2 === 0
          
          return (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Column */}
              <div className={`lg:col-span-7 ${!isEven ? 'lg:order-last' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, ease: easeOut }}
                  className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl relative"
                >
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                </motion.div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 flex flex-col items-start justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                  className="flex flex-col border-l border-border/40 pl-6 lg:pl-10 py-2"
                >
                  <span className="font-heading text-5xl sm:text-6xl text-muted-foreground mb-6">
                    {study.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-widest text-foreground mb-2">
                    {study.title}
                  </h3>
                  {study.subtitle && (
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
                      {study.subtitle}
                    </h4>
                  )}
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    {study.description}
                  </p>
                </motion.div>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}
