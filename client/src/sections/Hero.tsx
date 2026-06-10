import { ArrowBigRight } from "lucide-react"
import heroImg from '../assets/hero/hero-img.png'
import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src='/hero-bg.png'
          alt="hero background image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-in slide-in-from-bottom duration-700">
                Expert Drywall Repairs, Done Right the First Time
              </h1>
              <p className="text-lg text-muted max-w-lg leading-relaxed animate-in slide-in-from-bottom duration-700 delay-100">
                Professional drywall patching, crack repair, and wall restoration for residential and commercial properties.
              </p>
            </div>
            <div className="slide-in-from-bottom animate-in duration-700 delay-300">
              <Button size='lg' className="group bg-primary shadow-2xl shadow-primary/25 hover:scale-102 transition-all duration-300">
                Get a Free Estimate
                <ArrowBigRight className="w-4 h-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <p className="max-w-lg text-muted text-lg lg:text-xl font-bold leading-relaxed animate-in slide-in-from-bottom duration-700 delay-400">
              Serving Inland Empire & LA County   |   Fast & Reliable Service  |  Clean Worksite, Every Job
            </p>
          </div>
          <div className="relative slide-in-from-right animate-in duration-700 delay-500">
            <div className="relative max-w-md mx-auto">
              <img
                src={heroImg}
                alt="remodeled hallway in a home"
                className="w-full aspect-4/5 object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero