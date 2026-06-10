import patch from '../assets/services/patch.svg'
import crack from '../assets/services/crack.svg'
import restoration from '../assets/services/restoration.svg'
import remodeled from '../assets/services/remodeled.png'
import bluewall from '../assets/services/bluewall.png'

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
  {
    icon: restoration,
    heading: 'Wall Restoration',
    paragraph: 'We bring damaged and worn walls back to life with a finish that blends in perfectly. Every repair is matched carefully to your existing texture, leaving results that look like they were never touched.'
  }

]

const Services = () => {
  return (
    <section className="w-full py-32 overflow-hidden">
      <div className="container space-y-4 mx-auto px-4 md:px-6">
        <h2 className="text-3xl uppercase animate-in slide-in-from-bottom duration-700 mb-6 tracking-wide">
          services we provide
        </h2>
        <div className="grid lg:grid-cols-[1fr_1fr_1.1fr] xl:grid-cols-[1fr_1fr_1.2fr] gap-4">
          {services.slice(0, 2).map(({ icon, heading, paragraph }) => (
            <div className='space-y-8 bg-foreground p-8 rounded-2xl'>
              <img src={icon} alt="" className='w-12' />
              <div className='space-y-4'>
                <h3 className='text-2xl text-white'>{heading}</h3>
                <p className='text-secondary'>{paragraph}</p>
              </div>
            </div>
          ))}
          <div className='rounded-2xl overflow-hidden h-full min-h-70'>
            <img src={remodeled} alt="" className='h-full w-full object-cover' />
          </div>
        </div>
        <div className='grid lg:grid-cols-[2fr_1.08fr] xl:grid-cols-[2fr_1.175fr] gap-4'>
          <div className='relative order-1 lg:order-0'>
            <div className='rounded-2xl overflow-hidden h-full min-h-70'>
              <img src={bluewall} alt="" className='w-full h-full object-cover object-right lg:object-center' />
            </div>
            <button className='absolute -bottom-20 md:-bottom-14 right-15 text-white text-sm font-bold bg-primary rounded-full py-12 px-4 border-14 border-white cursor-pointer'>View Results</button>
          </div>
          <div className='space-y-8 bg-foreground p-8 rounded-2xl'>
            <img src={services[2].icon} alt="" className='w-12' />
            <div className='space-y-4'>
              <h3 className='text-2xl text-white'>{services[2].heading}</h3>
              <p className='text-secondary'>{services[2].paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Services