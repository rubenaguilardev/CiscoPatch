import { Mail, Phone, MapPin, type LucideIcon } from "lucide-react"

type contactInfo = {
  icon: LucideIcon,
  label: string,
  info: string
}

const contacts: contactInfo[] = [
  { icon: Mail, label: "Email us", info: "info@ciscopatch.com"},
  { icon: Phone, label: "Call or text us", info: "(909)999-9999"},
  { icon: MapPin, label: "Our location", info: "Riverside, CA"},
] 

const Contact = () => {
  return (
    <section id="contact" className="py-32 overflow-hidden">
      <div>
        <div>
          <div>
            <h2>Get a free estimate</h2>
            <div>
              <div className="grid gap-4">
                {contacts.map(({icon: Icon, label, info}) => (
                  <div key={label} className="">
                    <div className="flex items-center gap-4">
                      <div>
                        {<Icon />}
                      </div>
                      <div className="">
                        <span>{label}</span>
                        <p>{info}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact