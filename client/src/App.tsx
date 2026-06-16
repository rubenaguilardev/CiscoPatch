import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import About from "./sections/About"

const App = () => {
  return (
    <main className="min-h-screen mx-auto overflow-hidden z-50 transition-all duration-300">
      <Header />
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          <Hero />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Services />
      </div>
      <div className="bg-[url('/about-bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          <About />
        </div>
      </div>
    </main >

  )
}

export default App