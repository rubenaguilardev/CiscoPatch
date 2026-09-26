import BeforeAfter from "./BeforeAfter"
import Gallery from "./Gallery"
import before from "../../assets/temp/temp1.png"
import after from "../../assets/temp/temp.jpg"

const Results = () => {
  return (
    <section id="results" className="py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 space-y-12 lg:space-y-16">
        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              See the Difference
            </h2>
            <p className="text-muted lg:text-lg leading-relaxed max-w-2xl">
              Drag the slider to compare a wall before and after our repair.
              Every finish is matched to the existing texture, so the damage
              disappears for good.
            </p>
          </div>
          <BeforeAfter
            before={before}
            after={after}
            alt="Living room wall"
            className="w-screen ml-[calc(50%-50vw)] md:w-auto md:ml-0"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold">Recent Work</h3>
          <Gallery />
        </div>
      </div>
    </section>
  )
}

export default Results
