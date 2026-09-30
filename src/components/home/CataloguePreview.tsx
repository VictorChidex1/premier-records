import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { easeOut } from '@/lib/motion'

// --- VERIFIED CATALOGUE DATA ---

const FEATURED_CATALOGUE = [
  {
    id: 'uwaifo-84',
    title: 'Uwaifo 84',
    artist: 'Sir Victor Uwaifo',
    year: '1984',
    type: 'Album',
    genre: 'Highlife / Ekassa',
    status: 'Archive',
    image: '/assets/Sir Victor Uwaifo.jpg',
    description: 'Featuring foundational tracks including Ekuase (Ekassa 72), Ezie (Ekassa 70), and Ekpelepele (Ekassa 71).',
    slug: 'uwaifo-84'
  },
  {
    id: 'joromi',
    title: 'Joromi',
    artist: 'Sir Victor Uwaifo feat. Mya Blue',
    year: '2024',
    type: 'Contemporary Release',
    genre: 'Afrobeats / Amapiano Fusion',
    image: '/assets/joromi.png',
    slug: 'joromi'
  },
  {
    id: 'baby-mi-da',
    title: 'Baby Mi Da (Baby Jowo)',
    artist: 'Dr. Victor Olaiya feat. 2Baba',
    year: '2013',
    type: 'Contemporary Remix',
    genre: 'Highlife / Fusion',
    image: '/assets/Baby Mi Da.jpg',
    slug: 'baby-mi-da'
  }
]

const ARCHIVE_ARTISTS = [
  'Sir Victor Uwaifo', 'Dr. Victor Olaiya', 'Gentleman Mike Ejeagha', 
  'Chief Stephen Osita Osadebe', 'Rex Lawson', 'Celestine Ukwu', 
  'Ras Kimono', 'Orits Williki', 'Alex O', 'Alex Zitto', 
  'Evi Edna Ogholi', 'Mike Okri', 'Yusuf Olatunji', 'Bright Chimezie', 'Bobby Benson'
]

const CATEGORIES = [
  'SONGS', 'ALBUMS', 'ARTISTS', 'ARCHIVAL RECORDINGS', 'CONTEMPORARY REINTERPRETATIONS'
]

export function CataloguePreview() {
  return (
    <section className="bg-background pt-24 pb-32 sm:pt-32 sm:pb-40 border-t border-border/40 overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        
        {/* 1. SECTION INTRO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16 lg:pb-20 border-b border-border/40">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              The Catalogue
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-[4rem] lg:leading-[1.05] font-medium text-foreground tracking-tight"
            >
              Music and creative works represented by Premier.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Explore a catalogue shaped by generations of Nigerian and African music — from foundational highlife and folk recordings to contemporary reinterpretations and new creative works.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          >
            <Link
              to="/catalogue"
              className="group relative inline-flex shrink-0 items-center gap-3 text-sm font-medium text-foreground pb-2 overflow-hidden"
            >
              <span className="uppercase tracking-widest text-xs font-semibold">Explore Catalogue</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-border transition-transform duration-500 ease-out group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </div>

        {/* 2. PREMIUM FEATURED CATALOGUE AREA */}
        <div className="py-16 lg:py-24 border-b border-border/40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Dominant Hero Piece */}
              <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 1, ease: easeOut }}
                  >
                    <Link to={`/catalogue/${FEATURED_CATALOGUE[0].slug}`} className="group relative flex flex-col h-full">
                        <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden bg-muted/20 border border-border/20 shadow-sm">
                            <img 
                              src={FEATURED_CATALOGUE[0].image} 
                              alt={FEATURED_CATALOGUE[0].title}
                              className="w-full h-full object-cover grayscale-[20%] transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03] will-change-transform" 
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 ease-out group-hover:bg-black/5" />
                            
                            <div className="absolute top-4 right-4 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/95 backdrop-blur-sm shadow-sm border border-border/50 text-foreground">
                                <ArrowUpRight className="size-5" />
                              </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-8">
                            <div className="flex-1">
                               <div className="flex items-center gap-4 mb-4">
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{FEATURED_CATALOGUE[0].status}</span>
                                  <span className="w-4 h-px bg-border/60" />
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{FEATURED_CATALOGUE[0].year}</span>
                               </div>
                               <h3 className="font-heading text-4xl lg:text-5xl font-medium text-foreground group-hover:text-primary transition-colors duration-500 tracking-tight">
                                 {FEATURED_CATALOGUE[0].title}
                               </h3>
                               <p className="mt-3 text-xl lg:text-2xl text-muted-foreground font-heading italic">{FEATURED_CATALOGUE[0].artist}</p>
                               <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">{FEATURED_CATALOGUE[0].description}</p>
                            </div>
                            
                            {/* Metadata Table */}
                            <div className="flex flex-col gap-5 sm:min-w-[200px] sm:border-l sm:border-border/40 sm:pl-8 pt-4 sm:pt-0 border-t border-border/40 sm:border-t-0">
                               <div>
                                 <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold block mb-1.5">Type</span>
                                 <span className="text-sm font-medium text-foreground">{FEATURED_CATALOGUE[0].type}</span>
                               </div>
                               <div>
                                 <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold block mb-1.5">Genre</span>
                                 <span className="text-sm font-medium text-foreground">{FEATURED_CATALOGUE[0].genre}</span>
                               </div>
                            </div>
                        </div>
                    </Link>
                  </motion.div>
              </div>

              {/* Right Column: Supporting Works */}
              <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 lg:gap-16 lg:pl-12 lg:border-l lg:border-border/40">
                  {FEATURED_CATALOGUE.slice(1).map((item, i) => (
                     <motion.div 
                       key={item.id}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: '-50px' }}
                       transition={{ duration: 1, delay: (i + 1) * 0.15, ease: easeOut }}
                     >
                       <Link to={`/catalogue/${item.slug}`} className="group relative block h-full">
                          <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-muted/20 border border-border/20 shadow-sm">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03] will-change-transform" 
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 ease-out group-hover:bg-black/5" />
                            <div className="absolute top-4 right-4 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/95 backdrop-blur-sm shadow-sm border border-border/50 text-foreground">
                                <ArrowUpRight className="size-4" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 flex flex-col justify-between">
                             <div>
                               <div className="flex items-center gap-3 mb-3">
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{item.type}</span>
                                  <span className="w-3 h-px bg-border/60" />
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{item.year}</span>
                               </div>
                               <h3 className="font-heading text-2xl lg:text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-500 tracking-tight">
                                 {item.title}
                               </h3>
                               <p className="mt-2 text-base text-muted-foreground leading-relaxed">{item.artist}</p>
                             </div>
                          </div>
                       </Link>
                     </motion.div>
                  ))}
              </div>

           </div>
        </div>

        {/* 3. HISTORICAL CATALOGUE STRIP */}
        <div className="py-16 lg:py-20 border-b border-border/40">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                <div className="w-full md:w-64 shrink-0">
                   <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground">
                     The Premier Archive
                   </h3>
                   <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[250px]">
                     A catalogue built across generations of Nigerian and African music.
                   </p>
                </div>
                <div className="flex-1">
                   <div className="flex flex-wrap gap-x-8 gap-y-4 lg:gap-x-12 lg:gap-y-6">
                      {ARCHIVE_ARTISTS.map((artist, i) => (
                         <motion.div
                           key={artist}
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: '-50px' }}
                           transition={{ duration: 0.6, delay: (i % 5) * 0.1, ease: easeOut }}
                         >
                           <Link 
                             to={`/artists?q=${encodeURIComponent(artist)}`}
                             className="text-lg md:text-xl lg:text-2xl font-heading text-muted-foreground hover:text-foreground transition-colors duration-300"
                           >
                             {artist}
                           </Link>
                         </motion.div>
                      ))}
                   </div>
                </div>
            </div>
        </div>

        {/* 4. CATALOGUE CATEGORIES */}
        <div className="py-10 border-b border-border/40">
            <div className="flex flex-wrap items-center justify-start md:justify-center gap-6 md:gap-12">
                {CATEGORIES.map((cat, i) => (
                    <motion.div
                       key={cat}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: '-50px' }}
                       transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                    >
                      <Link 
                        to={`/catalogue?category=${encodeURIComponent(cat.toLowerCase())}`} 
                        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                          {cat}
                      </Link>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* 6. LICENSING CONNECTION */}
        <div className="mt-24 lg:mt-32 flex flex-col items-center justify-center text-center">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ duration: 0.6, ease: easeOut }}
             className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6 block"
           >
             Catalogue & Rights
           </motion.span>
           
           <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
             className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground max-w-2xl tracking-tight leading-tight"
           >
             Your next discovery could be a licensing opportunity.
           </motion.h3>
           
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
           >
             <Link 
               to="/licensing"
               className="mt-12 group relative inline-flex items-center gap-3 text-sm font-medium text-foreground pb-2 overflow-hidden"
             >
               <span className="uppercase tracking-widest text-xs font-semibold">Explore Licensing</span>
               <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
               <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-border transition-transform duration-500 ease-out group-hover:scale-x-0" />
               <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
             </Link>
           </motion.div>
        </div>

      </div>
    </section>
  )
}