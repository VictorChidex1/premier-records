import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { BusinessCta } from '@/components/home/BusinessCta'
import {
  CATALOGUE_GENRES,
  CATALOGUE_VOICES,
  COMPANY_TIMELINE,
  LEGACY_PROJECTS,
  STORY_NARRATIVE,
} from '@/data/company'

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: easeOut },
} as const

export default function About() {
  return (
    <section className="bg-background pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end mb-32 lg:mb-40">
          <motion.div {...reveal}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6">
              About Premier
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
              {STORY_NARRATIVE.summary}
            </h1>
          </motion.div>

          <motion.p
            {...reveal}
            transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:justify-self-end"
          >
            {STORY_NARRATIVE.body[0]}
          </motion.p>
        </div>

        {/* OUR STORY */}
        <div className="border-t border-border/40 pt-24 lg:pt-32 mb-32 lg:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <motion.p
              {...reveal}
              className="lg:col-span-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              Our Story
            </motion.p>

            <div className="lg:col-span-9 max-w-3xl">
              <motion.p
                {...reveal}
                transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight"
              >
                A catalogue shaped across generations — preserved, revisited and reintroduced.
              </motion.p>
              <motion.p
                {...reveal}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                className="mt-8 text-lg text-muted-foreground leading-relaxed"
              >
                {STORY_NARRATIVE.body[1]}
              </motion.p>
            </div>
          </div>
        </div>

        {/* MILESTONES */}
        <div className="border-t border-border/40 pt-24 lg:pt-32 mb-32 lg:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <motion.p
              {...reveal}
              className="lg:col-span-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              Milestones
            </motion.p>

            <div className="lg:col-span-9">
              <div className="flex flex-col gap-0 relative">
                <div className="hidden md:block absolute left-0 right-0 top-[15px] h-px bg-border/40" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
                  {COMPANY_TIMELINE.map((item, i) => (
                    <motion.div
                      key={item.era}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: i * 0.15, ease: easeOut }}
                      className="relative flex md:flex-col gap-6 md:gap-4 items-start"
                    >
                      <div className="w-4 h-4 rounded-full border border-primary bg-background z-10 shrink-0 relative mt-1 md:mt-0">
                        <div className="absolute inset-[3px] rounded-full bg-primary/20" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-1">
                          {item.era}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.name}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT WE REPRESENT */}
        <div className="border-t border-border/40 pt-24 lg:pt-32 mb-32 lg:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <motion.p
                {...reveal}
                className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6"
              >
                What We Represent
              </motion.p>
              <motion.h3
                {...reveal}
                transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                className="font-heading text-4xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight mb-6"
              >
                {STORY_NARRATIVE.archiveHeading}
              </motion.h3>
              <motion.p
                {...reveal}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                className="text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                {STORY_NARRATIVE.archiveBody}
              </motion.p>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                {...reveal}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-8 border-b border-border/20 pb-4 inline-block"
              >
                Selected Catalogue Voices
              </motion.div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 lg:gap-x-12 lg:gap-y-6">
                {CATALOGUE_VOICES.map((artist, i) => (
                  <motion.div
                    key={artist}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: (i % 6) * 0.05, ease: easeOut }}
                  >
                    <span className="text-xl lg:text-2xl font-heading text-muted-foreground">
                      {artist}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GENRES */}
        <div className="border-t border-border/40 pt-16 pb-32 lg:pb-40">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 max-w-4xl mx-auto">
            {CATALOGUE_GENRES.map((genre, i) => (
              <motion.div
                key={genre}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeOut }}
                className="px-4 py-2 border border-border/20 rounded-full text-xs font-mono tracking-widest text-foreground bg-muted/10"
              >
                {genre}
              </motion.div>
            ))}
          </div>
        </div>

        {/* THE FUTURE */}
        <div className="border-t border-border/40 pt-24 lg:pt-32 mb-32 lg:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <motion.h3
                {...reveal}
                className="font-heading text-2xl lg:text-3xl font-medium tracking-tight text-foreground leading-tight"
              >
                {STORY_NARRATIVE.futureHeading}
              </motion.h3>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {LEGACY_PROJECTS.map((project, i) => (
                <motion.div
                  key={project.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: easeOut }}
                  className="flex flex-col border-l border-border/40 pl-6 lg:pl-8"
                >
                  <span className="text-3xl font-heading text-muted-foreground mb-4">
                    {project.year}
                  </span>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mya Blue — 2024 Joromi project */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 rounded-2xl border border-border/60 bg-muted/30 p-8 sm:p-12"
          >
            <div className="lg:col-span-1">
              <span className="text-3xl font-heading text-muted-foreground">2024</span>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-3">
                Mya Blue — Joromi (AI Reimagined)
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Mya Blue is an AI/virtual music artist associated with Premier Records&apos; 2024
                modern reinterpretation of Sir Victor Uwaifo&apos;s classic &quot;Joromi.&quot; Created
                by producer Eclipse Nkasi, the project combines Uwaifo&apos;s original musical legacy
                with Afrobeats, Amapiano and contemporary AI technology.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <BusinessCta />
      </div>
    </section>
  )
}