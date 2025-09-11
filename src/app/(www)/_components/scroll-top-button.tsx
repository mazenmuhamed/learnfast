'use client'

import { useState } from 'react'
import { ArrowUpIcon } from 'lucide-react'
import { useScroll, useMotionValueEvent, motion } from 'motion/react'

import { Button } from '@/components/ui/button'

type Props = {
  /**
   * The vertical scroll height after which the button will appear.
   * Default is `300px`.
   */
  yHeight?: number
}

export function ScrollTopButton({ yHeight = 300 }: Props) {
  const [showButton, setShowButton] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    setShowButton(latest >= yHeight)
  })

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      key="scroll-top-button"
      animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', duration: 0.4, ease: 'easeInOut' }}
      className="fixed right-5 bottom-5 z-50 md:right-8 md:bottom-8"
    >
      <Button
        size="lg"
        onClick={handleScrollToTop}
        className="size-12 rounded-full"
      >
        <ArrowUpIcon className="size-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </motion.div>
  )
}
