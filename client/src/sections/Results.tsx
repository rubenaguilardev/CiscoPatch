import EmblaCarousel from '../components/embla/EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'
import '../components/embla/embla.css'
import img1 from "../assets/temp/temp.jpg"
import img2 from "../assets/temp/temp1.png"


const OPTIONS: EmblaOptionsType = { watchDrag: false }
const SLIDES = [
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
  { beforeSrc: img1, afterSrc: img2, alt: 'Living room drywall repair' },
]

const Results = () => {
  return (
    <section id="results" className='py-24 lg:py-32 overflow-hidden'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  )
}

export default Results