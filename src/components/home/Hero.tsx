import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeIn } from '@/lib/motion'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-muted via-background to-secondary"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
        >
          Premier
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 max-w-5xl font-heading text-display font-medium text-foreground"
        >
          Music. Culture.
          <br />
          Ownership. Legacy.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          The digital home of Premier's music, publishing, catalogue and creative ecosystem.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <Link
            to="/artists"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
          >
            Explore Premier
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[80%] w-1/3 bg-gradient-to-tl from-accent to-secondary opacity-60 lg:block"
      />
    </section>
  )
}