import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { NEXT_CHAPTER } from '@/data/about'

export function FutureSection() {
  return (
    <section className="border-t border-border/40 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px]">
      <div className="flex flex-col items-center text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
        >
          The Next Chapter
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter text-foreground mb-8 leading-[1.1]"
        >
          The next chapter is already being written.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
        >
          Premier's next chapter is not about choosing between heritage and innovation. It is about bringing both together — protecting the value of African music while creating new ways for creators, audiences and businesses to discover it.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {NEXT_CHAPTER.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: easeOut }}
            className="flex flex-col items-center text-center p-8 lg:p-12 border border-border/40 rounded-3xl bg-muted/10 hover:bg-muted/30 transition-colors duration-500"
          >
            <div className="font-heading text-3xl lg:text-4xl text-foreground mb-6">
              0{i + 1}
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {item.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
