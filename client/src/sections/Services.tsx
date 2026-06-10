import patch from '../assets/services/patch.svg'
import crack from '../assets/services/crack.svg'
import remodeled from '../assets/services/remodeled.png'

const services = [
  {
    icon: patch,
    heading: 'Drywall Patching',
    paragraph: 'No repair is too small to deserve attention, and none is too large to handle. From tiny nail holes to wide sections of cracked or damaged drywall, we restore your walls to a finish so clean and precise that no trace of the damage is left behind.'
  },
  {
    icon: crack,
    heading: 'Crack & Damage Repair',
    paragraph: 'No crack, dent, or water stain goes unaddressed. We carefully inspect and repair damage early before it has the chance to spread or cause bigger problems down the line, leaving your walls structurally sound, smooth, and looking exactly as they should.'
  },

]

const Services = () => {
  return (
    <section className="w-full py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl uppercase animate-in slide-in-from-bottom duration-700 mb-6 tracking-wide">
          services we provide
        </h2>
        <div className="grid md:grid-cols-[1fr_1fr_1.2fr] gap-4">
          {services.map(({ icon, heading, paragraph }) => (
            <div className='space-y-8 bg-foreground p-8 rounded-2xl'>
              <img src={icon} alt="" className='w-12' />
              <div className='space-y-4'>
                <h3 className='text-2xl text-white'>{heading}</h3>
                <p className='text-secondary'>{paragraph}</p>
              </div>
            </div>
          ))}
          <img src={remodeled} alt="" className='h-full rounded-2xl' />
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Services