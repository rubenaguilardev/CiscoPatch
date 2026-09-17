import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import About from "./sections/About"
import Faq from "./sections/faq/Faq"
import Results from "./sections/Results"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"


const App = () => {
  return (
    <div className="min-h-screen overflow-hidden ">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Results />
        <Faq />
        <Contact />
        <Footer />
      </main >
    </div >
  )
}

export default App
