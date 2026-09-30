import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'
import { COMPANY_TIMELINE, CATALOGUE_VOICES, CATALOGUE_GENRES, LEGACY_PROJECTS } from '@/data/company'

export function StoryPreview() {
  return (
    <section className="bg-background pt-24 pb-32 sm:pt-32 sm:pb-40 border-t border-border/40 overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        
        {/* HERO STORY: TWO COLUMN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32 lg:mb-40">
          
          {/* LEFT: ARCHIVAL FRAME */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: easeOut }}
            className="w-full aspect-[3/4] lg:aspect-[4/5] relative border-[0.5px] border-border/40 bg-[#0a0a0a] flex flex-col justify-between p-8 group overflow-hidden"
          >
            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            
            <div className="flex justify-between items-start text-[#4a4a4a] text-[10px] tracking-widest font-mono uppercase relative z-10">
              <span>Archive Ref: 1963-PR</span>
              <span>Plate: 01</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center relative z-10">
              {/* Massive 1963 acts as the visual anchor inside the frame */}
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: easeOut, delay: 0.2 }}
                  className="font-heading text-[12rem] lg:text-[16rem] leading-none text-[#1a1a1a] tracking-tighter"
                >
                  1963
                </motion.div>
                <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase mt-4">The Beginning</p>
              </div>
            </div>
            
            <div className="text-[#4a4a4a] text-[10px] tracking-widest font-mono uppercase relative z-10 text-right">
              Verified History
            </div>
          </motion.div>

          {/* RIGHT: STORY CONTENT & TIMELINE */}
          <div className="pt-8 lg:pt-16 flex flex-col h-full">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
            >
              Company Story
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-heading text-5xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1] mb-8"
            >
              Six decades of music, culture and catalogue.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-16 lg:mb-32"
            >
              Since 1963, Premier has evolved alongside Nigerian music — from Phillips West Africa Records to Phonogram and Polygram, and eventually Premier Records. Across generations, its catalogue has preserved recordings that reflect the breadth, character and cultural history of Nigerian music.
            </motion.p>

            {/* TIMELINE */}
            <div className="mt-auto">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-8"
              >
                The Premier Story
              </motion.h3>
              
              <div className="flex flex-col gap-0 relative">
                {/* Timeline vertical line (mobile) */}
                <div className="absolute left-[7px] top-4 bottom-4 w-px bg-border/40 md:hidden" />
                
                {/* Timeline horizontal line (desktop) */}
                <div className="hidden md:block absolute left-4 right-4 top-[15px] h-px bg-border/40" />

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
                      {/* Node */}
                      <div className="w-4 h-4 rounded-full border border-primary bg-background z-10 shrink-0 relative mt-1 md:mt-0">
                        {/* Red accent dot inside */}
                        <div className="absolute inset-[3px] rounded-full bg-primary/20" />
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-1">{item.era}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.name}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* THE ARCHIVE: VOICES */}
        <div className="border-t border-border/40 pt-24 lg:pt-32 mb-32 lg:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6"
              >
                The Archive
              </motion.p>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                className="font-heading text-4xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight mb-6"
              >
                The voices that shaped generations.
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                className="text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                Across decades of Nigerian music, Premier's catalogue has included artists whose recordings became part of the country's musical heritage.
              </motion.p>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOut }}
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
                    <span className="text-xl lg:text-2xl font-heading text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                      {artist}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GENRES */}
        <div className="border-t border-border/40 pt-16 pb-32 lg:pb-40 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-12"
          >
            A catalogue shaped across generations and genres.
          </motion.p>
          
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

        {/* LEGACY -> PRESENT */}
        <div className="border-t border-border/40 pt-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="font-heading text-2xl lg:text-3xl font-medium tracking-tight text-foreground leading-tight"
              >
                From archive to<br />new listeners
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
                  <span className="text-3xl font-heading text-muted-foreground mb-4">{project.year}</span>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-3">{project.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mt-32 lg:mt-40 border-t border-border/40 pt-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-xl lg:text-2xl font-heading text-muted-foreground">
            Explore the Premier story
          </p>
          <Link
            to="/about"
            className="group relative inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground pb-2"
          >
            Discover Our Story
            <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-2" />
            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-out group-hover:scale-x-100" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}