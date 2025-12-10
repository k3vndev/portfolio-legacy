import { useResponsiveness } from '@/hooks/useResponsiveness'
import {
  Carousel,
  CarouselItem,
  NavigationArrows,
} from '@k3vndev/react-carousel'

interface Props {
  projectName: string
  images: string[]
}

export const ProjectImagesCarousel = ({ projectName, images }: Props) => {
  const { media } = useResponsiveness()
  const visibleItems = media.md ? 2 : 1

  return (
    <Carousel
      className={{
        wrapper:
          'max-w-full mt-5 animate-fade-in anim-delay-300 anim-scale-90 anim-ease-out-back',
      }}
      itemsCount={images.length}
      gap={16}
      visibleItems={visibleItems}
      navigationHandler={
        <NavigationArrows
          className={{ both: '[&.visible]:*:cursor-pointer' }}
        />
      }
    >
      {images.map((imgSrc, index) => (
        <CarouselItem
          key={index}
          className='overflow-clip bg-white/5 flex text-white/50'
        >
          <img
            className='size-full object-cover aspect-5/3'
            src={imgSrc}
            alt={`Showcase of the project ${projectName}`}
            draggable={false}
          />
        </CarouselItem>
      ))}
    </Carousel>
  )
}
