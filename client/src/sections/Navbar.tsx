import logo from '../assets/header/logo.png'
import { Menu, X, Paintbrush, HardHat, Image, BadgeQuestionMark, type LucideIcon } from 'lucide-react'
import Button from '../components/Button'
import { useState, useEffect } from 'react'

type NavLink = {
  href: string
  label: string
  icon: LucideIcon
}

const navLinks: NavLink[] = [
  { href: '#services', label: 'Services', icon: Paintbrush },
  { href: '#about', label: 'About', icon: HardHat },
  { href: '#results', label: 'Results', icon: Image },
  { href: '#faq', label: 'FAQ', icon: BadgeQuestionMark }
]

const Navbar = () => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 py-5 bg-white z-50 ${isScrolled ? "shadow-lg" : ""}`}>
      < nav className="container mx-auto px-6 flex items-center justify-between" >
        <div onClick={() => setMobileMenuIsOpen(false)} className="hover:text-primary">
          <a href="#" className='flex gap-1'>
            <img src={logo} alt="CiscoPatch logo" className="h-9 lg:h-10" />
            <span className="self-end roboto text-lg translate-y-0.5 font-bold leading-none tracking-wide">
              CiscoPatch
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <div className='bg-foreground rounded-full flex items-center gap-1 py-3.5 px-2'>
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className={`px-4 text-sm font-medium text-secondary hover:text-white ${label === "FAQ" ? "border-none" : "border-r border-muted"}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className='hidden md:block'>
          < a href="#contact" > <Button>Contact Us</Button></a>
        </div>

        <button
          onClick={() => setMobileMenuIsOpen(prev => !prev)}
          className='md:hidden p-2 hover:text-foreground/90'
        >
          {mobileMenuIsOpen ? <X /> : <Menu />}
        </button>
      </nav >

      {mobileMenuIsOpen &&
        <div className='md:hidden bg-foreground animate-in slide-in-from-top duration-300 pb-2 mt-5 mx-4 rounded-xl'>
          <div className='container flex flex-col gap-4 mx-auto px-6 py-6'>
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuIsOpen(false)}
                className='text-lg text-white hover:text-white/90 py-2'
              >
                <div className='flex gap-3'>
                  <Icon />
                  {label}
                </div>
              </a>
            ))}
            <div className=''>
              <a href="#contact" className='block'>
                <Button onClick={() => setMobileMenuIsOpen(false)} size='sm' className='w-full bg-primary hover:bg-primary/90'>Contact Today</Button>
              </a>
            </div>
          </div>
        </div>
      }
    </header >
  )
}

export default Navbar