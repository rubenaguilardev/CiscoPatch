import logo from '../assets/header/logo.png'
import { Menu, X, Paintbrush, HardHat, Image, BadgeQuestionMark } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services', icon: Paintbrush },
  { href: '#about', label: 'About', icon: HardHat },
  { href: '#results', label: 'Results', icon: Image },
  { href: '#faq', label: 'FAQ', icon: BadgeQuestionMark }
]

const Navbar = () => {

  const navElements = navLinks.map(({ href, label }) => (
    <a key={label} href={href} className="font-medium text-muted hover:text-foreground text-sm lg:text-base">
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
        <div>
          <div>
            {navElements}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar