import Comparisons from "./Comparisons"
import Gallery from "./Gallery"

const Results = () => {
  return (
    <section id="results" className="py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          Our Results
        </h2>
        <div className="space-y-12 lg:space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-bold text-muted">
                See the difference a careful repair makes.
              </h3>
              <p className="text-sm lg:text-base text-muted leading-relaxed max-w-2xl">
                Drag the slider to compare a wall before and after our repair.
                Every finish is matched to the existing texture, so the damage
                disappears for good.
              </p>
            </div>
            <Comparisons />
          </div>
          <div className="space-y-6">
            <h3 className="text-xl lg:text-2xl font-bold">Recent Work</h3>
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
