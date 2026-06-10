import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Services from "./sections/Services"


const App = () => {
  return (
    <main className="min-h-screen overflow-hidden z-50 transition-all duration-300">
      <Header />
      <Hero />
      <Services />
    </main>

  )
}

export default App