import logo from '../assets/header/logo.png'
import { Menu, X, Paintbrush, HardHat, Image, BadgeQuestionMark } from 'lucide-react'
import Button from '../components/Button'

const navLinks = [
  { href: '#services', label: 'Services', icon: Paintbrush },
  { href: '#about', label: 'About', icon: HardHat },
  { href: '#results', label: 'Results', icon: Image },
  { href: '#faq', label: 'FAQ', icon: BadgeQuestionMark }
]

const Navbar = () => {

  const navElements = navLinks.map(({ href, label }) => (
    <a key={label} href={href} className="px-4  py-2 text-sm text-secondary hover:text-white rounded-full hover:bg-muted">
      {label}
    </a>
  ))

  return (
    <header className="fixed top-0 left-0 right-0 py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="hover:text-primary">
          <a href="#" className='flex gap-1'>
            <img src={logo} alt="CiscoPatch logo" className="h-10" />
            <span className="self-end text-lg roboto sm:text-xl translate-y-0.5 font-bold leading-none tracking-wide">
              CiscoPatch
            </span>
          </a>
        </div>

        <div className='flex items-center gap-1'>
          <div className='bg-foreground rounded-full px-2 py-1 flex items-center gap-1'>
            {navElements}
          </div>
        </div>

        <div><Button>Contact Us</Button></div>
      </nav>
    </header>
  )
}

export default Navbar