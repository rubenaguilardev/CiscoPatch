import logofooter from "../assets/header/logo-footer.svg"
import { Mail, Phone } from "lucide-react"
import GoogleIcon from "../components/icons/GoogleIcon"

const links = [
  { label: 'Services', link: '#services' },
  { label: 'About', link: '#about' },
  { label: 'Results', link: '#results' },
  { label: 'FAQ', link: '#faq' },
]

const icons = [GoogleIcon, Mail, Phone]

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-8 ">
        <div className="flex justify-between bg-foreground text-white p-8 rounded-2xl">
          <div className="space-y-8">
            <div className="flex items-end gap-2">
              <img src={logofooter} alt="Cisco Patch white logo" className="h-9" />
              <span className="font-bold roboto text-lg translate-y-1.75">CiscoPatch</span>
            </div>
            <div className="font-semibold text-secondary">
              <span className="block">Seamless Repairs.</span>
              <span>Lasting Walls.</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-60 flex flex-wrap justify-between items-center px-8 py-4 gap-4 border-l border-r border-white">
              {links.map(({ link, label }, index) => (
                <a key={index} href={link} className={`${index === 3 ? "mr-4" : ""}`}>{label}</a>
              ))}
            </div>
            <div className="flex flex-col justify-end space-y-8 pl-8">
              <div className="flex justify-center gap-4">
                {icons.map((Icon, index) => (
                  <div className="p-2 rounded-full border-2 ">
                    <Icon key={index} />
                  </div>
                ))}
              </div>

              <span className="text-muted text-xs">@ 2026 CiscoPatch. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer