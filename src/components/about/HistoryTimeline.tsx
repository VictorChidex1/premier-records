import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { ABOUT_TIMELINE } from '@/data/about'

export function HistoryTimeline() {
  return (
    <section id="history-timeline" className="border-t border-border/40 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px] overflow-hidden">
      <div className="mb-16 lg:mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
        >
          Our History
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground"
        >
          From one generation to the next.
        </motion.h2>
      </div>

      {/* Desktop Horizontal / Mobile Vertical Timeline */}
      <div className="relative">
        {/* Horizontal Line (Desktop) / Vertical Line (Mobile) */}
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border/40 lg:hidden" />
        <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px bg-border/40" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 lg:overflow-x-auto lg:snap-x lg:snap-mandatory pb-8 scrollbar-hide">
          {ABOUT_TIMELINE.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
              className="relative flex-shrink-0 w-full lg:w-[400px] flex flex-row lg:flex-col gap-6 lg:gap-8 group lg:snap-start"
            >
              {/* Dot */}
              <div className="w-[15px] h-[15px] rounded-full border border-primary bg-background z-10 shrink-0 relative lg:mt-0 transition-transform duration-500 group-hover:scale-150">
                <div className="absolute inset-[3px] rounded-full bg-primary/20 transition-colors duration-500 group-hover:bg-primary" />
              </div>
              
              <div className="flex flex-col pt-[-4px] lg:pt-0">
                <div className="font-heading text-4xl text-muted-foreground mb-4 transition-colors duration-500 group-hover:text-foreground">
                  {item.year}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
