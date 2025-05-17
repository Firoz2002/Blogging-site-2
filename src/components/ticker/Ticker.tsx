import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTickerAnimation } from '@hooks/useTickerAnimation'

interface TickerProps {
  items: string[]
  interval?: number
}

export function Ticker({ items, interval = 3000 }: TickerProps) {
  const currentIndex = useTickerAnimation(items, interval)

  return (
    <div className="container h-16 flex items-center overflow-hidden justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-lg font-medium text-gray-800"
        >
          <p
            className="text-lg font-medium text-gray-800"
          >
            {items[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className='mt-4 flex gap-6'>
        <img className='w-5 h-5' src="/linkedin.svg" alt="linkedin_logo" />
        <img className='w-5 h-5' src="/github.svg" alt="github_logo" />
        <img className='w-5 h-5' src="/instagram1.svg" alt="instagram_logo" />
      </div>
    </div>
  )
}

