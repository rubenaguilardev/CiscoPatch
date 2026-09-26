import { useState } from "react"
import BeforeAfter from "./BeforeAfter"
import tempBefore from "../../assets/temp/temp1.png"
import tempAfter from "../../assets/temp/temp.jpg"

type Comparison = {
  before: string
  after: string
  alt: string
}

const comparisons: Comparison[] = [
  { before: tempBefore, after: tempAfter, alt: "Project 1" },
  { before: tempBefore, after: tempAfter, alt: "Project 2" },
  { before: tempBefore, after: tempAfter, alt: "Project 3" },
  { before: tempBefore, after: tempAfter, alt: "Project 4" },
]

const Comparisons = () => {
  const [active, setActive] = useState(0)
  const { before, after, alt } = comparisons[active]

  return (
    <div className="space-y-6">
      <BeforeAfter key={active} before={before} after={after} alt={alt} />
      <div className="flex justify-center md:justify-end gap-3">
        {comparisons.map(({ alt }, index) => (
          <button
            key={alt}
            type="button"
            aria-label={`Show ${alt}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            className={`h-10 w-10 rounded-full text-sm font-bold cursor-pointer transition-colors duration-200 ${
              index === active
                ? "bg-primary text-white"
                : "bg-foreground text-white hover:bg-primary/80"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Comparisons
