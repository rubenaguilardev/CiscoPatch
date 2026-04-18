import Card from "./Card"
import patch from '../../assets/services/patch.png'
import smooth from '../../assets/services/smooth.jpg'
import remodeled from '../../assets/services/remodeled.jpg'

const serviceData = [
  { 
    img: patch,
    alt: 'drywall patched around electrical wiring',
    heading: 'Drywall Patching',
    description: 'From small nail holes to large damaged sections, we restore your walls to a flawless finish — seamlessly blending with your existing surface.'
  },
  {
    img: smooth,
    alt: 'contractor smoothing out finished drywall repair',
    heading: 'Crack & Damage Repair',
    description: 'We identify and fix cracks, dents, and water damage before they worsen — leaving your walls structurally sound and smooth.'
  },
  {
    img: remodeled,
    alt: 'freshly remodeled room',
    heading: 'Wall Restoration',
    description: 'We bring damaged and worn walls back to life — matching your existing texture and finish so the repair blends in perfectly, like it was never touched.'
  },
]

const Services = () => {
  return (
    <section id='services' className="py-32 flex flex-col px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary font-bold tracking-wider leading-tight">WHAT WE DO</span>
          <h2 className="text-4xl font-bold leading-[1.35] text-center">Expert Drywall Repair Services</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {serviceData.map(({img, alt, heading, description}) => (
            <Card img={img} alt={alt} heading={heading} description={description}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services