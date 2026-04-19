import About from "./sections/About"
import Contact from "./sections/Contact"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Reviews from "./sections/Reviews"
import Services from "./sections/services/Services"

const App = () => {
  return (
    <main className="min-h-screen overflow-hidden z-50 transition-all duration-300">
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </main>

  )
}

export default App