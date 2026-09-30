import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, viewport } from '@/lib/motion'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}