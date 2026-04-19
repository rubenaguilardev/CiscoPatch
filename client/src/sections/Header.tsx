import { Menu, X, Paintbrush, HardHat, Image, Star, BadgeQuestionMark } from 'lucide-react'
import logo from '../assets/header/logo.svg'
import { useState } from 'react'
import Button from '../components/Button'

const navLinks = [
  { href: '#services', label: 'Services', icon: Paintbrush },
  { href: '#about', label: 'About', icon: HardHat },
  { href: '#gallery', label: 'Gallery', icon: Image },
  { href: '#reviews', label: 'Reviews', icon: Star },
  { href: '#faq', label: 'FAQ', icon: BadgeQuestionMark }
]

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-2xl py-5 z-50 border-b border-muted/15">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className='flex items-center shrink-0 gap-2 text-xl font-bold tracking-tight hover:text-primary'>
          <img src={logo} alt="CiscoPatch logo" className='h-10 shrink-0' />
          <span className='self-end text-lg sm:text-xl md:text-[1.375rem] font-bold leading-none'>CiscoPatch</span>
        </a>
        <div className='hidden md:flex items-center space-x-6'>
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className='font-medium text-muted hover:text-foreground text-sm lg:text-base'
            >
              {label}
            </a>
          ))}
          <Button size='sm' className='bg-foreground hover:bg-foreground/90 shadow-lg shadow-foreground/25 '>Contact Today</Button>
        </div>
        <button
          onClick={() => setMobileMenuIsOpen(prev => !prev)}
          className='md:hidden p-2 hover:text-foreground/90'
        >
          {mobileMenuIsOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileMenuIsOpen &&
        <div className='md:hidden bg-foreground animate-in slide-in-from-top duration-300 pb-2 mt-5'>
          <div className='container flex flex-col gap-4 mx-auto px-6 py-6'>
            {navLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuIsOpen(false)}
                className='text-lg text-white hover:text-white/90 py-2'
              >
                <div className='flex gap-2'>
                  {<Icon />}
                  {label}
                </div>
              </a>
            ))}
            <Button size='sm' className='bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 '>Contact Today</Button>

          </div>
        </div>
      }
    </header>
  )
}

export default Header