import aboutImg from "../assets/about/about1-img.jpg"
import aboutBg from "../assets/about/aboutBg.avif"

type AboutText = {
  heading: string
  paragraph: string
}

const aboutData: AboutText[] = [
  {
    heading: "Our Experience",
    paragraph:
      "Years of hands on experience in the trade means we know drywall repair inside and out, from small patches to full wall restorations.",
  },
  {
    heading: "Our Approach",
    paragraph:
      "Every job gets the same level of care and attention to detail regardless of size. No shortcut, no rushed finishes, just work done right.",
  },
  {
    heading: "Our Promise",
    paragraph:
      "While we may be a newer company, the skills we bring are anything but. We have spent years perfecting our craft and now we are putting that experience to work for you.",
  },
]

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutBg}
          alt="image of white walls"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[200%] lg:static lg:translate-y-0 lg:h-full object-cover opacity-85 xl:opacity-75"
        />
      </div>
      <div className="container mx-auto lg:grid grid-cols-2 items-center lg:gap-16 px-4 md:px-6 relative space-y-8 lg:space-y-0 z-10">
        <div className="relative slide-in-from-left animate-in duration-700 delay-500">
          <div className="relative max-w-md mx-auto">
            <img
              src={aboutImg}
              alt="remodeled hallway in a home"
              className="w-full aspect-3/4 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
        <div className="space-y-6 lg:space-y-8">
          <h2 className="lg:block text-3xl xl:text-4xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <h3 className="text-xl lg:text-2xl font-bold text-muted">
            Craftsmanship built over years of doing the work. Results that show
            in every repair.
          </h3>
          {aboutData.map(({ heading, paragraph }) => (
            <div key={heading}>
              <h4 className="font-medium text-lg lg:text-xl">{heading}</h4>
              <p className="text-sm lg:text-base text-muted">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
