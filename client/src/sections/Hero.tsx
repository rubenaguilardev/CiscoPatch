import { ArrowRight } from "lucide-react"
import heroImg from '../assets/hero/hero-img.avif'
import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={"/hero-bg.png"} alt="" className="w-full h-full object-cover opacity-85 xl:opacity-75" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-in slide-in-from-bottom">
                Expert Drywall Repairs, Done Right the First Time
              </h1>
              <p className="text-lg text-muted max-w-lg leading-relaxed animate-in slide-in-from-bottom duration-700 delay-100">
                Professional drywall patching, crack repair, and wall restoration for residential and commercial properties.
              </p>
            </div>
            <div className="slide-in-from-bottom animate-in duration-700 delay-300">
              <a href="#contact"><Button size='lg' className="group bg-primary shadow-2xl shadow-primary/25 hover:scale-102 transition-all duration-300">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              </a>
            </div>
            <p className="max-w-lg text-muted roboto text-lg lg:text-xl font-semibold leading-relaxed animate-in slide-in-from-bottom duration-700 delay-400">
              Serving Inland Empire & LA County   <span className="te">|</span>   Fast & Reliable Service   <span className="te">|</span>   Clean Worksite, Every Job
            </p>
          </div>
          <div className="relative slide-in-from-right animate-in duration-700 delay-500">
            <div className="relative max-w-lg mx-auto">
              <img
                src={heroImg}
                alt="remodeled hallway in a home"
                className="w-full aspect-3/4 object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero