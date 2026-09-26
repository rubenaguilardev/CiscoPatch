import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider"

type BeforeAfterProps = {
  before: string
  after: string
  alt: string
  className?: string
}

const labelClasses =
  "absolute top-4 px-3 py-1 rounded-full bg-foreground/70 text-white text-xs font-bold tracking-wide pointer-events-none"

const BeforeAfter = ({
  before,
  after,
  alt,
  className = "",
}: BeforeAfterProps) => {
  return (
    <div
      className={`relative overflow-hidden md:rounded-2xl md:shadow-xl ${className}`}
    >
      <ReactCompareSlider
        className="aspect-square md:aspect-video bg-black"
        itemOne={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={before} alt={`${alt}, before`} />
            <span className={`${labelClasses} left-4`}>Before</span>
          </div>
        }
        itemTwo={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={after} alt={`${alt}, after`} />
            <span className={`${labelClasses} right-4`}>After</span>
          </div>
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backgroundColor: "var(--color-primary)",
              border: 0,
              backdropFilter: "none",
              boxShadow: "0 4px 12px rgb(0 0 0 / 0.25)",
            }}
          />
        }
      />
    </div>
  )
}

export default BeforeAfter
