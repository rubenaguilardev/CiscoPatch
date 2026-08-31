import EmblaCarousel from '../components/embla/EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'
import '../components/embla/embla.css'
import temp from "../assets/temp/temp.jpg"
import temp1 from "../assets/temp/temp1.png"


const OPTIONS: EmblaOptionsType = {}
const SLIDES = [
  { src: temp, alt: "temp image" },
  { src: temp1, alth: "temp1 image" }
]

const Results = () => {
  return (
    <section id="results" className='container space-y-4 mx-auto px-4 md:px-6'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  )
}

export default Results