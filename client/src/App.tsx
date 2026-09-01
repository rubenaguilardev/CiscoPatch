import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import About from "./sections/About"
import Faq from "./sections/faq/Faq"
import Results from "./sections/Results"


const App = () => {
  return (
    <main className="min-h-screen mx-auto overflow-hidden z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <Header />
      </div>
      <div >
        <div className="max-w-7xl mx-auto">
          <Hero />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Services />
      </div>
      <div className="max-w-7xl mx-auto">
        <About />
      </div>
      <div className="max-w-7xl mx-auto">
        <Results />
      </div>
      <div className="max-w-7xl mx-auto">
        <Faq />
      </div>
    </main >

  )
}

export default App

// className="bg-[url('/hero-bg.png')] bg-cover bg-center"