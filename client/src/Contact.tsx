import { Mail, Phone, MapPin, ArrowUpRight, type LucideIcon } from "lucide-react"

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

type Input = {
  id: string
  label: string
  type: string
  placeholder: string
}

const inputs: Input[] = [
  { id: "firstName", label: "First Name", type: "text", placeholder: "John"},
  { id: "lastName", label: "Last Name", type: "text", placeholder: "Doe"},
]

const Contact = () => {
  return (
    <section id="contact" className="py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-4 md:pb-8">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-[2rem] font-bold">Get a free estimate</h2>
            <div>
              <div className="grid gap-4">
                {contacts.map(({icon: Icon, label, info}) => (
                  <div key={label} className="flex justify-between items-center border border-light-border rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full p-2.5 border border-light-border ">
                      {<Icon  className="h-6"/>}
                      </div>
                      <div className="">
                      <span className="roboto font-bold">{label}</span>
                      <p className="text-sm">{info}</p>
                      </div>
                    </div> 
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black">
                    <ArrowUpRight className="text-white h-5 w-5"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
     
          <div>
          <form>
            <div className="flex">
            {inputs.map(({id, label, type, placeholder}) => (
              <div key={id} className="flex gap-4">
                <div className="flex flex-col">
                  <label htmlFor={id} />{label}
                  <input type={type} id={id} name={id} placeholder={placeholder}  />
                </div>
              </div>
            ))}
            </div>
            
          
          </form>
          </div>
        </div>
      </div> 
      
    </section >
  )
}

export default Contact