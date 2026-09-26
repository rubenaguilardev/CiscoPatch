import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Keyboard } from "swiper/modules"
import type { Swiper as SwiperClass } from "swiper/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"

const photos = Object.entries(
  import.meta.glob<string>("../../assets/gallery/*.avif", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

const arrowClasses =
  "flex items-center justify-center h-10 w-10 rounded-full bg-foreground text-white hover:bg-primary disabled:opacity-40 disabled:hover:bg-foreground cursor-pointer disabled:cursor-default transition-colors duration-200"

const Gallery = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = (instance: SwiperClass) => {
    setAtStart(instance.isBeginning)
    setAtEnd(instance.isEnd)
  }

  return (
    <div className="space-y-6">
      <Swiper
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        spaceBetween={16}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        onSwiper={(instance) => {
          setSwiper(instance)
          updateEdges(instance)
        }}
        onSlideChange={updateEdges}
        onResize={updateEdges}
        className="overflow-visible!"
      >
        {photos.map((src, index) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt={`Completed drywall repair ${index + 1}`}
              loading="lazy"
              className="w-full aspect-4/3 object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous photos"
          disabled={atStart}
          onClick={() => swiper?.slidePrev()}
          className={arrowClasses}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next photos"
          disabled={atEnd}
          onClick={() => swiper?.slideNext()}
          className={arrowClasses}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default Gallery
