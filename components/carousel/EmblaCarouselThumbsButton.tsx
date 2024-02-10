import Image from 'next/image'

type PropType = {
  selected: boolean
  imgSrc: string
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        className='relative embla-thumbs__slide__button w-[250px] h-[150px]'
        type='button'
      >
        <Image
          className='embla-thumbs__slide__img object-contain rounded-xl '
          src={imgSrc}
          fill
          alt='Your alt text'
        />
      </button>
    </div>
  )
}
