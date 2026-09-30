import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'

export function AboutStats() {
  const stats = [
    {
      value: "63",
      label: "YEARS OF HISTORY",
      description: null
    },
    {
      value: "1963",
      label: "ESTABLISHED",
      description: null
    },
    {
      value: "4+",
      label: "HISTORICAL IDENTITIES",
      description: "Phillips West Africa Records, Phonogram, Polygram, Premier Records"
    },
    {
      value: "FROM HIGHLIFE",
      label: "TO CONTEMPORARY AFRICAN MUSIC",
      description: null
    }
  ]

  return (
    <section className="border-t border-border/40 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-border/40">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
            className={`flex flex-col pt-8 md:pt-0 ${i !== 0 ? 'md:pl-8 lg:pl-12' : ''}`}
          >
            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4 tracking-tighter">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {stat.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
