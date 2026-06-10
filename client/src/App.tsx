import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Services from "./sections/Services"


const App = () => {
  return (
    <main className="max-w-7xl min-h-screen mx-auto overflow-hidden z-50 transition-all duration-300">
      <Header />
      <div>
        <div className="absolute inset-0">
          <img
            src='/hero-bg.png'
            alt="hero background image"
            className="w-full h-full object-cover"
          />
        </div>
        <Hero />
      </div>

      <Services />
    </main>

  )
}

export default App