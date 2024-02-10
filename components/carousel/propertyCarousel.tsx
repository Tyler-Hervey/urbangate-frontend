'use client'
import { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  images: string[]
}

export function PropertyCarousel(props: PropType) {
  const { slides, options, images } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaMainRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <div className='flex justify-center items-center mb-8 '>
                <div className='relative w-[700px] h-[400px]'>
                  <Image
                    className=' object-contain rounded-lg'
                    src={images[index]}
                    alt='Your alt text'
                    fill
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla-thumbs'>
        <div className='embla-thumbs__viewport' ref={emblaThumbsRef}>
          <div className='flex justify-center flex-wrap embla-thumbs__container'>
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={images[index]}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
