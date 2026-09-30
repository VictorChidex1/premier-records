import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type MouseEvent } from 'react'
import { easeOut } from '@/lib/motion'

export function BusinessCta() {
  const containerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  
  // Parallax background mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  
  // Magnetic Button Physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring configuration
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return
    
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    // Move the button towards the mouse (magnetic pull)
    mouseX.set(distanceX * 0.3)
    mouseY.set(distanceY * 0.3)
  }

  const handleMouseLeave = () => {
    // Snap back to center
    mouseX.set(0)
    mouseY.set(0)
  }

  const marqueeWords = [
    "MUSIC", "PUBLISHING", "LICENSING", "PARTNERSHIPS", 
    "MUSIC", "PUBLISHING", "LICENSING", "PARTNERSHIPS",
    "MUSIC", "PUBLISHING", "LICENSING", "PARTNERSHIPS"
  ]

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[60vh] min-h-[500px] lg:h-[80vh] overflow-hidden group bg-background"
    >
      {/* Parallax Background Layer */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 bg-[#0a0a0a] scale-[1.2]"
      />
      
      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        
        {/* Eyebrow */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-white/50 mb-12 lg:mb-16 z-20 pointer-events-auto text-center px-6"
        >
          Looking to work with Premier?
        </motion.p>
        
        {/* Infinite Architectural Marquee */}
        <div className="w-full overflow-hidden flex items-center pointer-events-auto [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            className="flex gap-12 lg:gap-24 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {marqueeWords.map((word, i) => (
              <span 
                key={i}
                className="font-heading text-7xl sm:text-9xl lg:text-[14rem] font-medium leading-[1.1] lg:leading-[0.9] tracking-tighter text-transparent transition-colors duration-500 ease-out hover:text-white cursor-default"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
              >
                {word}.
              </span>
            ))}
          </motion.div>
        </div>

        {/* Magnetic CTA Button */}
        <div 
          className="mt-16 lg:mt-24 z-20 pointer-events-auto relative p-12" // large hit area
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={buttonRef}
        >
          <motion.div style={{ x, y }}>
            <Link
              to="/contact"
              className="group/btn relative inline-flex h-16 lg:h-24 items-center gap-4 rounded-full bg-white px-8 lg:px-14 text-xs lg:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-2xl"
            >
               {/* Hover Fill Effect inside button */}
               <div className="absolute inset-0 bg-primary translate-y-[101%] rounded-full transition-transform duration-500 ease-out group-hover/btn:translate-y-0" />
               
               <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-white">Start a Conversation</span>
               <ArrowRight className="relative z-10 size-4 lg:size-5 transition-all duration-500 group-hover/btn:translate-x-3 group-hover/btn:text-white" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}