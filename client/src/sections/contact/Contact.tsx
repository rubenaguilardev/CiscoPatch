import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import contactBg from "../../assets/contact/contact.jpg"
import ContactForm from "./ContactForm"

type contactInfo = {
  icon: LucideIcon
  label: string
  info: string
  href: string
}

const contacts: contactInfo[] = [
  {
    icon: Mail,
    label: "Email us",
    info: "info@ciscopatch.com",
    href: "mailto:info@ciscopatch.com",
  },
  {
    icon: Phone,
    label: "Call or text us",
    info: "(909)999-9999",
    href: "tel:+19099999999",
  },
  {
    icon: MapPin,
    label: "Our location",
    info: "Riverside, CA",
    href: "https://www.google.com/search?q=ciscopatch",
  },
]

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="image of white walls"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 md:px-6 py-24 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:border border-light-border/30 rounded-2xl lg:p-8">
          <div className="hidden lg:flex flex-col justify-between lg:bg-[url('/contactbg.png')] bg-no-repeat bg-top-right">
            <h2 className="text-[2rem] font-bold">Get a Free Estimate</h2>
            <div>
              <div className="grid gap-4">
                {contacts.map(({ icon: Icon, label, info, href }) => (
                  <a
                    key={label}
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex justify-between items-center bg-[#f5f5f5] rounded-2xl p-4 hover:bg-[#ececec] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-full p-2.5">
                        {<Icon className="h-6" />}
                      </div>
                      <div className="">
                        <span className="roboto font-bold">{label}</span>
                        <p className="text-sm">{info}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black">
                      <ArrowUpRight className="text-white h-5 w-5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="lg:hidden text-[2rem] font-bold mb-8">
              Get Estimate
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
