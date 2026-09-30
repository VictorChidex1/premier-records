import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'

export function StatementSection() {
  return (
    <section className="bg-foreground text-background py-32 sm:py-48 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px] rounded-3xl lg:rounded-[3rem] my-12 lg:my-24">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: easeOut }}
          className="font-heading text-5xl sm:text-7xl lg:text-[7rem] font-medium tracking-tighter leading-[1.05] mb-12"
        >
          A great song<br />
          does not belong<br />
          to one generation.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.3, ease: easeOut }}
          className="text-xl sm:text-2xl lg:text-3xl text-background/60 leading-relaxed font-light"
        >
          It can be preserved, reinterpreted, rediscovered and heard again.
        </motion.p>
      </div>
    </section>
  )
}
