import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'

// --- VERIFIED DATA ---

const NEWS_ITEMS = [
  {
    id: 'creative-economy-investment',
    date: 'JUNE 27, 2026',
    category: 'COMPANY / INDUSTRY',
    title: 'Premier Records boss calls on banks, NGX, others to invest in the creative economy',
    excerpt: "Premier Records CEO Michael Odiong called for greater investment from banks, development finance institutions, investment firms and the Nigerian Exchange to support Nigeria's growing creative economy.",
    image: '/assets/michael-portrait.jpg',
    source: { name: 'The Nation' },
    slug: 'premier-records-creative-economy-investment'
  },
  {
    id: 'fixing-music-business-ecosystem',
    date: 'MAY 18, 2025',
    category: 'INDUSTRY / INSIGHT',
    title: 'Data, structure, policy key to fixing Nigeria\'s music business ecosystem',
    excerpt: "Premier Records CEO Michael Odiong discussed the importance of stronger data, industry structure and policy in building a more sustainable Nigerian music business.",
    image: null,
    source: { name: 'BusinessDay' },
    slug: 'data-structure-policy-nigeria-music-business'
  },
  {
    id: 'joromi-interpretation',
    date: 'MAY 26, 2024',
    category: 'CATALOGUE / RELEASE',
    title: 'Premier Records releases a new interpretation of Sir Victor Uwaifo\'s Joromi',
    excerpt: "Premier Records released a contemporary interpretation of Sir Victor Uwaifo's Joromi featuring Mya Blue, combining the original melody with Afrobeats and Amapiano influences.",
    image: '/assets/joromi.png',
    source: { name: 'BusinessDay' },
    slug: 'joromi-mya-blue-premier-records'
  },
  {
    id: 'josplay-music-partnership',
    date: 'APRIL 28, 2024',
    category: 'CATALOGUE / DIGITAL',
    title: 'Premier Records partners Josplay Music to bridge gap between industry generations',
    excerpt: "Premier Records announced a partnership with Josplay Music aimed at helping audiences rediscover catalogue recordings while creating new possibilities between established and emerging creatives.",
    image: null,
    source: { name: 'BusinessDay' },
    slug: 'josplay-music-partnership'
  }
]

export function LatestNews() {
  // We'll display 3 items for the cleanest composition on the homepage
  const displayedNews = NEWS_ITEMS.slice(0, 3)

  return (
    <section className="bg-background pt-24 pb-32 sm:pt-32 sm:pb-40 border-t border-border/40 overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        
        {/* HEADER & INTRO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 lg:mb-32">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6"
            >
              Latest
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-heading text-6xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1] mb-6"
            >
              News
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Updates from Premier Records, its catalogue, artists and the evolving business of African music.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            className="shrink-0"
          >
            <Link
              to="/news"
              className="group relative inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground pb-2"
            >
              View All News
              <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-2" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </div>

        {/* NEWS EDITORIAL LIST */}
        <div className="border-b border-border/40">
          {displayedNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: easeOut }}
            >
              <Link 
                to={`/news/${article.slug}`} 
                className="group block relative border-t border-border/40 hover:bg-muted/20 transition-colors duration-700 overflow-hidden"
              >
                {/* Red accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-out z-20" />

                <div className={`flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 relative z-10 ${index === 0 ? 'py-12 lg:py-16' : 'py-8 lg:py-12'}`}>
                  
                  {/* NUMBER */}
                  <span className="font-heading text-xl lg:text-2xl text-muted-foreground w-8 lg:w-12 shrink-0 pl-4 lg:pl-6 transition-colors duration-500 group-hover:text-primary">
                    0{index + 1}
                  </span>
                  
                  {/* METADATA */}
                  <div className="w-full lg:w-48 shrink-0 px-4 lg:px-0">
                    <div className="text-[10px] font-semibold tracking-widest text-muted-foreground mb-1 transition-colors duration-500 group-hover:text-foreground">{article.date}</div>
                    <div className="text-[10px] font-semibold tracking-widest text-primary">{article.category}</div>
                  </div>
                  
                  {/* HEADLINE */}
                  <div className="flex-1 px-4 lg:px-0 relative z-10">
                    <h3 className={`font-heading ${index === 0 ? 'text-3xl lg:text-5xl lg:leading-[1.1]' : 'text-2xl lg:text-3xl'} font-medium text-foreground transition-transform duration-700 ease-out group-hover:translate-x-2 lg:max-w-4xl`}>
                      {article.title}
                    </h3>
                  </div>

                  {/* THUMBNAIL (DESKTOP ONLY HOVER STATE) */}
                  {article.image && (
                    <div className="absolute right-32 top-1/2 -translate-y-1/2 w-64 aspect-[4/3] overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-700 hidden xl:block z-0 mix-blend-luminosity border border-border/20 shadow-xl">
                      <img 
                        src={article.image} 
                        className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-[3s] ease-out" 
                        alt="" 
                      />
                    </div>
                  )}
                  
                  {/* ARROW */}
                  <div className="pr-4 lg:pr-8 ml-auto hidden lg:block">
                    <ArrowUpRight className="size-6 text-muted-foreground transition-all duration-700 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-primary relative z-10" />
                  </div>
                  
                  {/* Mobile Arrow */}
                  <div className="pl-4 pb-2 lg:hidden mt-4">
                     <ArrowRight className="size-5 text-muted-foreground transition-all duration-700 ease-out group-hover:translate-x-2 group-hover:text-primary" />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}