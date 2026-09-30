import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { easeOut } from '@/lib/motion'

// --- VERIFIED DATA ---

const LICENSING_PATHWAYS = [
  {
    title: 'Sync',
    items: ['Film', 'Television', 'Advertising', 'Brand campaigns'],
    description: 'Discover music from Premier’s catalogue for visual storytelling and creative productions.'
  },
  {
    title: 'Reinterpretation',
    items: ['Remixes', 'Samples', 'Contemporary versions', 'New collaborations'],
    description: 'Historic recordings can continue to inspire new creative interpretations and contemporary audiences.'
  },
  {
    title: 'Digital & Platform',
    items: ['Streaming', 'Social platforms', 'Digital services', 'New distribution'],
    description: 'Premier’s catalogue can reach audiences through modern digital platforms and distribution channels.'
  }
]

const CATALOGUE_STORIES = [
  {
    id: 'joromi',
    title: 'Joromi',
    originalArtist: 'Sir Victor Uwaifo',
    contemporaryContext: 'Joromi featuring Mya Blue',
    year: '2024',
    description: 'Premier Records released a contemporary interpretation of Sir Victor Uwaifo’s “Joromi” featuring Mya Blue in 2024. The project demonstrates how an established Nigerian recording can be reintroduced to contemporary listeners through a new production and collaboration.',
    image: '/assets/joromi.png',
    slug: '/music/joromi'
  },
  {
    id: 'baby-mi-da',
    title: 'Baby Mi Da',
    originalArtist: 'Dr. Victor Olaiya',
    contemporaryContext: 'Baby Mi Da involving Dr. Victor Olaiya and 2Baba',
    year: '2013',
    description: 'This project brought an older catalogue work into a contemporary setting, serving as an example of a historic work being brought into a modern musical context.',
    image: '/assets/Baby Mi Da.jpg',
    slug: '/music/baby-mi-da'
  },
  {
    id: 'ka-esi-le',
    title: 'Ka Esi Le Onye Isi Oche',
    originalArtist: 'Gentleman Mike Ejeagha',
    contemporaryContext: 'Digital Platform Resurgence',
    description: 'A documented example of a Premier-associated catalogue recording reaching a contemporary digital audience. A historic recording can acquire renewed cultural relevance decades after its original release.',
    image: '/assets/Gentleman Mike Ejeagha.jpeg',
    slug: null
  }
]

const ARCHIVE_ARTISTS = [
  'Sir Victor Uwaifo', 'Dr. Victor Olaiya', 'Gentleman Mike Ejeagha', 
  'Chief Stephen Osita Osadebe', 'Rex Lawson', 'Celestine Ukwu', 
  'Ras Kimono', 'Orits Williki', 'Alex O', 'Alex Zitto', 
  'Evi Edna Ogholi', 'Mike Okri', 'Bright Chimezie', 'Bobby Benson', 'Yusuf Olatunji'
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: "Tell us what you're creating and the kind of sound you're looking for."
  },
  {
    number: '02',
    title: 'Identify',
    description: 'Our catalogue team helps identify relevant works.'
  },
  {
    number: '03',
    title: 'Clear',
    description: 'Rights and licensing requirements are reviewed for the selected work.'
  },
  {
    number: '04',
    title: 'Create',
    description: 'Move forward with the appropriate licensing arrangement.'
  }
]

export function LicensingPreview() {
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section ref={containerRef} className="bg-background pt-24 pb-32 sm:pt-32 sm:pb-40 border-t border-border/40 overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HERO */}
        <div className="pb-20 lg:pb-32 border-b border-border/40">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              Licensing & Sync
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="mt-6 font-heading text-5xl sm:text-6xl lg:text-[6rem] lg:leading-[1.05] font-medium text-foreground tracking-tight"
            >
              Music with history.<br />Ready for what comes next.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="mt-8 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Premier’s catalogue brings together generations of Nigerian and African music, creating opportunities for filmmakers, brands, platforms, creative teams and artists to discover and work with distinctive recordings and compositions.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            className="mt-12 flex flex-wrap gap-8 items-center"
          >
            <Link to="/licensing" className="group relative inline-flex items-center gap-3 text-sm font-medium text-foreground pb-2 overflow-hidden">
              <span className="uppercase tracking-widest text-xs font-semibold">Enquire About Licensing</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-border transition-transform duration-500 ease-out group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
            
            <Link to="/catalogue" className="group relative inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground pb-2 overflow-hidden transition-colors">
              <span className="uppercase tracking-widest text-xs font-semibold">Explore The Catalogue</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* SECTION 1: THE LICENSING OPPORTUNITY */}
        <div className="py-20 lg:py-32 border-b border-border/40">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
             {LICENSING_PATHWAYS.map((pathway, i) => (
                <motion.div
                  key={pathway.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: easeOut }}
                  className="flex flex-col h-full"
                >
                  <h3 className="font-heading text-3xl lg:text-4xl text-foreground mb-8">{pathway.title}</h3>
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {pathway.items.map(item => (
                       <li key={item} className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground border border-border/60 px-4 py-2 rounded-sm bg-muted/10">
                         {item}
                       </li>
                    ))}
                  </ul>
                  <p className="text-base text-muted-foreground leading-relaxed mt-auto">
                    {pathway.description}
                  </p>
                </motion.div>
             ))}
           </div>
        </div>

        {/* SECTION 2: REAL PREMIER CATALOGUE STORIES */}
        <div className="py-20 lg:py-32 border-b border-border/40">
           <div className="mb-20 lg:mb-32 max-w-2xl">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-50px' }}
               transition={{ duration: 0.8, ease: easeOut }}
               className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight"
             >
               Catalogue in motion
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-50px' }}
               transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
               className="mt-6 text-xl lg:text-2xl text-muted-foreground leading-relaxed"
             >
               Historic recordings can find new audiences, new contexts and new creative possibilities.
             </motion.p>
           </div>

           <div className="flex flex-col gap-24 lg:gap-40">
              {CATALOGUE_STORIES.map((story, i) => (
                 <div key={story.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center`}>
                    
                    <motion.div 
                      initial={{ clipPath: 'inset(100% 0 0 0)' }}
                      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.2, ease: easeOut }}
                      className="w-full lg:w-1/2 aspect-square lg:aspect-[4/3] bg-muted/20 border border-border/20 flex items-center justify-center relative overflow-hidden group shadow-sm"
                    >
                      {story.image ? (
                         <motion.img 
                           style={{ y: imageY, scale: 1.15 }}
                           src={story.image} 
                           alt={story.title}
                           className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-125 will-change-transform grayscale-[15%]" 
                         />
                      ) : (
                         <div className="text-center p-8 bg-background/50 w-full h-full flex flex-col items-center justify-center border border-border/10">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground block mb-6">ARCHIVAL RECORDING</span>
                            <h3 className="font-heading text-4xl lg:text-5xl text-foreground tracking-tight">{story.title}</h3>
                            <p className="mt-6 font-heading italic text-xl text-muted-foreground">{story.originalArtist}</p>
                         </div>
                      )}
                    </motion.div>
                    
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                       <motion.span 
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: '-50px' }}
                         transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
                         className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4 block"
                       >
                         {story.year ? `CONTEMPORARY RELEASE / ${story.year}` : 'CONTEMPORARY CONTEXT'}
                       </motion.span>
                       
                       <motion.h3 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: '-50px' }}
                         transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                         className="font-heading text-4xl lg:text-5xl text-foreground mb-8 tracking-tight"
                       >
                         {story.title}
                       </motion.h3>
                       
                       <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: '-50px' }}
                         transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
                         className="flex flex-col sm:flex-row gap-8 mb-10"
                       >
                         <div className="border-l border-border/40 pl-5">
                           <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">ORIGINAL ARTIST</span>
                           <span className="block text-sm text-foreground font-medium">{story.originalArtist}</span>
                         </div>
                         <div className="border-l border-border/40 pl-5">
                           <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">CONTEMPORARY CONTEXT</span>
                           <span className="block text-sm text-foreground font-medium">{story.contemporaryContext}</span>
                         </div>
                       </motion.div>
                       
                       <motion.p 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: '-50px' }}
                         transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
                         className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg"
                       >
                         {story.description}
                       </motion.p>
                       
                       {story.slug && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
                          >
                            <Link to={story.slug} className="group relative inline-flex items-center gap-3 text-sm font-medium text-foreground pb-2 overflow-hidden w-max">
                              <span className="uppercase tracking-widest text-xs font-semibold">EXPLORE RELEASE</span>
                              <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-border transition-transform duration-500 ease-out group-hover:scale-x-0" />
                              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                            </Link>
                          </motion.div>
                       )}
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* SECTION 3: THE PREMIER ARCHIVE */}
        <div className="py-20 lg:py-32 border-b border-border/40">
            <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
               <div className="w-full md:w-1/3 shrink-0">
                 <motion.span 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: '-50px' }}
                   transition={{ duration: 0.6, ease: easeOut }}
                   className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground block mb-6"
                 >
                   The Premier Archive
                 </motion.span>
                 <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: '-50px' }}
                   transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                   className="font-heading text-4xl lg:text-5xl text-foreground mb-8 tracking-tight"
                 >
                   Generations of music.<br />One living catalogue.
                 </motion.h2>
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: '-50px' }}
                   transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                   className="text-lg text-muted-foreground leading-relaxed"
                 >
                   From highlife and folk recordings to contemporary African sounds, Premier’s catalogue carries decades of Nigerian musical history.
                 </motion.p>
               </div>
               
               <div className="w-full md:w-2/3 overflow-hidden relative flex items-center h-16 lg:h-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
                  
                  <motion.div 
                    className="flex gap-x-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 50, repeat: Infinity }}
                  >
                    {/* Double the array to create a seamless infinite loop */}
                    {[...ARCHIVE_ARTISTS, ...ARCHIVE_ARTISTS].map((artist, i) => (
                       <Link 
                         key={`${artist}-${i}`}
                         to={`/artists?q=${encodeURIComponent(artist)}`} 
                         className="text-2xl lg:text-4xl font-heading text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer shrink-0"
                       >
                         {artist}
                       </Link>
                    ))}
                  </motion.div>
               </div>
            </div>
        </div>

        {/* SECTION 4: LICENSING PROCESS */}
        <div className="py-20 lg:py-32 border-b border-border/40">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-16 lg:mb-24"
            >
              How It Works
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-16">
               {PROCESS_STEPS.map((step, i) => (
                  <div key={step.number} className="border-t border-border/40 pt-8">
                    <div className="overflow-hidden mb-6">
                      <motion.span 
                        initial={{ y: '100%' }}
                        whileInView={{ y: '0%' }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: easeOut }}
                        className="font-heading text-5xl lg:text-6xl text-primary block font-light tracking-tight pb-2"
                      >
                        {step.number}
                      </motion.span>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: (i * 0.15) + 0.2, ease: easeOut }}
                    >
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">{step.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>
               ))}
            </div>
        </div>

        {/* SECTION 5: PREMIUM LICENSING CTA */}
        <div className="mt-24 lg:mt-40 flex flex-col items-center justify-center text-center">
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
             className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground max-w-2xl tracking-tight leading-tight"
           >
             Have a project in mind?
           </motion.h3>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
             className="mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed"
           >
             Tell us what you're creating, and let’s explore the music that could bring it to life.
           </motion.p>
           
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
             className="mt-12 flex flex-wrap justify-center gap-8 items-center"
           >
             <Link 
               to="/licensing"
               className="group relative inline-flex items-center gap-3 text-sm font-medium text-foreground pb-2 overflow-hidden"
             >
               <span className="uppercase tracking-widest text-xs font-semibold">Enquire About Licensing</span>
               <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
               <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-border transition-transform duration-500 ease-out group-hover:scale-x-0" />
               <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
             </Link>

             <Link 
               to="/catalogue"
               className="group relative inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground pb-2 overflow-hidden transition-colors"
             >
               <span className="uppercase tracking-widest text-xs font-semibold">Explore The Catalogue</span>
               <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
             </Link>
           </motion.div>
        </div>

      </div>
    </section>
  )
}