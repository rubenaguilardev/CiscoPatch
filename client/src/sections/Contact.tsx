import { Mail, Phone, MapPin, ArrowUpRight, type LucideIcon } from "lucide-react"
import Button from "../components/Button"
import contactBg from "../assets/contact/contact.jpg"


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
  { id: "email", label: "Email", type: "email", placeholder: "johndoe@email.com"},
  { id: "mobile", label: "Mobile", type: "text", placeholder: "(909)951-9282"},
  { id: "address", label: "Address", type: "text", placeholder: "123 Main Ct"},
  { id: "city", label: "City", type: "text", placeholder: "Riverside"},
  { id: "zip", label: "ZIP", type: "text", placeholder: "92225"},
  
]

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={contactBg} alt="image of white walls" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="relative container mx-auto px-4 md:px-6 pt-32 pb-4 md:pb-8 z-10">
        <div className="grid lg:grid-cols-2 gap-8 border border-light-border p-8">
          <div className="hidden lg:flex flex-col justify-between lg:bg-[url('/contactbg.png')] bg-no-repeat bg-top-right">
            <h2 className="text-[2rem] font-bold">Get a Free Estimate</h2>
            <div>
              <div className="grid gap-4">
                {contacts.map(({icon: Icon, label, info}) => (
                  <div key={label} className="flex justify-between items-center bg-[#f5f5f5]  rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full p-2.5">
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
            <h2 className="lg:hidden">Get Estimate</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              {inputs.map(({id, label, type, placeholder}) => (
                <div key={id} className={`${id === "address" ? "col-span-2" : " "}`}>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor={id} className="font-bold text-xs roboto tracking-wide">{label}</label>
                    <input 
                      type={type} 
                      id={id} name={id} 
                      placeholder={placeholder} 
                      className="py-2.5 px-4 rounded-lg bg-white placeholder:text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <textarea 
                id="description" 
                name="description" 
                rows={5} 
                className="border"
                placeholder="Description of work..."
              >
              </textarea>
            </div>
             <div className="flex flex-col">
              <label htmlFor="attach">Attach</label>
              <input type="file" id="attach" name="attach" className="py-10" />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
          </div>
        </div>
      </div> 
      
    </section >
  )
}

export default Contact