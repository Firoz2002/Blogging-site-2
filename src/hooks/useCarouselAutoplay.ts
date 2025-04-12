import { useEffect, useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel-react'

export function useCarouselAutoplay(
  emblaApi: EmblaCarouselType | undefined,
  interval: number = 3000
) {
  const autoScroll = useCallback(() => {
    if (!emblaApi) return
    
    emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(autoScroll, interval)
    emblaApi.on('destroy', () => clearInterval(autoplay))

    return () => {
      clearInterval(autoplay)
    }
  }, [emblaApi, interval, autoScroll])
}

