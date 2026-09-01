import EmblaCarousel from '../components/embla/EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'
import '../components/embla/embla.css'
import img1 from "../assets/temp/temp.jpg"
import img2 from "../assets/temp/temp1.png"


const OPTIONS: EmblaOptionsType = {}
const SLIDES = [
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
]

const Results = () => {
  return (
    <section id="results" className='container space-y-4 mx-auto px-4 md:px-6'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  )
}

export default Results