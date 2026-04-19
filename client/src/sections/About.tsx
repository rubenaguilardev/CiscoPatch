import about1 from '../assets/about/about1-img.jpg'
import about2 from '../assets/about/about2-img.jpg'
import Button from '../components/Button'

const About = () => {
  return (
    <section id='#about' className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src='/about-bg.png'
          alt="hero background image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto z-10 relative px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">about us</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              CiscoPatch delivers quality drywall repair with skilled craftsmanship and a commitment to your satisfaction — restoring walls for homeowners and businesses across the Inland Empire and LA County.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={about1}
                alt="beautifully remodeled hallway"
                className='rounded-2xl max-w-md shadow-xl'
              />
            </div>
            <div className='space-y-4'>
              <p className='text-xl md:text-2xl font-semibold text-muted'>
                For X years, CiscoPatch has built a reputation for quality repairs and reliable service. From the first call to the final finish, we handle every job with care and attention to detail.
              </p>
              <p className='mb-4'>
                Choosing CiscoPatch means working with someone dedicated to your home's walls. We use the right materials and techniques to ensure a seamless finish — from small patches to full wall restoration.
              </p>
              <a href="#gallery" className='inline-block mt-4'>
                <Button size='lg' className='bg-primary shadow-xl shadow-primary/25 hover:bg-primary/90'>View Our Work</Button>
              </a>
              <div className='grid md:grid-cols-2 gap-16 mt-12'>
                <div className='space-y-4'>
                  <p className='text-xl md:text-2xl font-semibold text-muted'>Restoring Walls, Building Trust</p>
                  <p>To deliver quality drywall repair with the craftsmanship and care that homeowners and businesses across the Inland Empire and LA County deserve.</p>
                </div>
                <div>
                  <img
                    src={about2}
                    alt=""
                    className='rounded-2xl'
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section >
  )
}

export default About