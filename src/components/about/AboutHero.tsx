import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left: Typography */}
        <div className="lg:col-span-5 flex flex-col items-start relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-8"
          >
            About Premier
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="font-heading text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground leading-[1] mb-10"
          >
            63 years of music, culture and catalogue.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12"
          >
            Since 1963, Premier Records has evolved alongside Nigerian music — from Phillips West Africa Records through Phonogram and Polygram to Premier Records. Across generations, its catalogue has preserved recordings that document the breadth, character and cultural history of Nigerian and African music.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          >
            <button
              onClick={() => document.getElementById('history-timeline')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:text-primary"
            >
              Explore our story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        </div>

        {/* Right: Archival Image Composition */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] min-h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
          {/* Subtle paper/film texture overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: easeOut }}
            className="absolute inset-0 z-10"
          >
            <img 
              src="/assets/AboutHero1.jpeg" 
              alt="Historical Premier Records archival imagery" 
              className="w-full h-full object-cover grayscale-[30%] contrast-110" 
            />
            {/* Elegant vignette/gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-black/20 mix-blend-multiply" />
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
