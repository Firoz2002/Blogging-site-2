import { useState, useEffect } from 'react'

export function useTickerAnimation(items: string[], interval: number = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items, interval])

  return currentIndex
}

