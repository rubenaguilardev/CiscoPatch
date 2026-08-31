
import EmblaCarousel from '../components/EmblaCarousel.tsx'
import EmblaCarouselSlides from '../components/emblaslides/EmblaCarouselSlides.tsx'
import type { EmblaOptionsType } from 'embla-carousel'
import '../components/embla.css'
import '../components/emblaslides/emblaSlides.css'
import image1 from '../assets/gallery/1.avif'
import image2 from '../assets/gallery/2.avif'
import image3 from '../assets/gallery/3.avif'
import image4 from '../assets/gallery/4.avif'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Results = () => {
  return (
<<<<<<< HEAD
    <section id='results' className="min-h-screen flex items-center overflow-hidden">
      <div className="container space-y-4 mx-auto px-4 md:px-6">
              <EmblaCarousel
  slides={[image1, image2, image3]}
  options={{ loop: true }}
/>
<EmblaCarouselSlides slides={[image1, image2, image3, image4]} options={{ loop: true, slidesToScroll: 2 }} />
      </div>

    </section>
=======
    <section id="results"></section>
>>>>>>> ef18b21 (styling updates)
  )
}

export default Results