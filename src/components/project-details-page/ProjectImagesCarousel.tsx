import { useResponsiveness } from '@/hooks/useResponsiveness'
import { Carousel, CarouselItem, NavigationArrows } from '@k3vndev/react-carousel'

interface Props {
  projectName: string
  images: string[]
}

export const ProjectImagesCarousel = ({ projectName, images }: Props) => {
  const { media } = useResponsiveness()
  const visibleItems = media.md ? 2 : 1

  const getAnimationDelay = (index: number) => {
    const baseDelay = 300 // milliseconds
    const delay = baseDelay + index * 100
    return `${delay}ms`
  }

  return (
    <Carousel
      className={{
        wrapper: 'max-w-full mt-5 animate-appear anim-delay-200'
      }}
      itemsCount={images.length}
      gap={16}
      visibleItems={visibleItems}
      navigationHandler={<NavigationArrows className={{ both: '[&.visible]:*:cursor-pointer' }} />}
    >
      {images.map((imgSrc, index) => (
        <CarouselItem
          key={index}
          className='overflow-clip bg-white/5 flex text-white/50 border-2 border-white/5'
        >
          <img
            className='size-full object-cover aspect-5/3 animate-fade-in anim-blur-xl anim-scale-125 anim-ease-out-sine anim-duration-500'
            src={imgSrc}
            alt={`Showcase of the project ${projectName}`}
            draggable={false}
            style={{ animationDelay: getAnimationDelay(index) }}
          />
        </CarouselItem>
      ))}
    </Carousel>
  )
}
