import logofooter from "../assets/header/logo-footer.svg"
import { Mail, Phone } from "lucide-react"
import GoogleIcon from "../components/icons/GoogleIcon"

const links = [
  { label: 'Services', link: '#services' },
  { label: 'About', link: '#about' },
  { label: 'Results', link: '#results' },
  { label: 'FAQ', link: '#faq' },
]

const icons = [
  { icon: GoogleIcon, link: "" },
  { icon: Mail, link: "mailto:#" },
  { icon: Phone, link: "#" },
]

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-8 ">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 bg-foreground text-white p-6 lg:p-8 rounded-2xl">
          <div className="space-y-6 lg:space-y-8">
            <div className="flex justify-center items-end gap-2">
              <img src={logofooter} alt="Cisco Patch white logo" className="h-7 lg:h-9" />
              <span className="font-bold roboto lg:text-lg translate-y-1.75">CiscoPatch</span>
            </div>
            <div className="font-semibold text-secondary text-sm lg:text-base text-center md:text-start">
              <span className="md:block">Seamless Repairs. </span>
              <span>Lasting Walls.</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
            <div className="w-full md:w-55 lg:w-60 flex flex-wrap justify-between items-center text-sm lg:text-base md:px-6 lg:px-8 md:py-4 gap-4 lg:gap-4 md:border-l md:border-r border-muted">
              {links.map(({ link, label }, index) => (
                <a key={index} href={link} className={`${index === 3 ? "md:mr-3.5 lg:mr-4" : ""}`}>{label}</a>
              ))}
            </div>
            <div className="flex flex-col justify-end space-y-6 lg:space-y-8 md:pl-6 lg:pl-8">
              <div className="flex justify-center gap-3 lg:gap-4">
                {icons.map(({ icon: Icon, link }, index) => (
                  <div className="p-2 rounded-full border border-muted cursor-pointer ">
                    <a href={link}><Icon key={index} className="md:h-5 md:w-5 lg:h-6 lg:w-6" /></a>
                  </div>
                ))}
              </div>

              <span className="text-secondary text-[.625rem] text-center lg:text-xs">@ {new Date().getFullYear()} CiscoPatch. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer