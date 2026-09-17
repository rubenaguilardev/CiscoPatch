import type { FaqItem } from "./data"

type AccordionProps = FaqItem & {
  isOpen: boolean
  onToggle: () => void
  hideBorder: boolean
}


const Accordion = ({ question, answer, category, id, isOpen, onToggle, hideBorder }: AccordionProps) => {

  const isFirstInCategory = id === `${category}0`
  const isLastInCategory = id === `${category}4`

  return (

    <div className="hover:text-primary transition-colors duration-150">
      <button onClick={onToggle} className={`w-full flex justify-between cursor-pointer ${isOpen ? "bg-[#4D2C24] text-primary font-bold" : ""}`}>
        <div className={`flex justify-between items-center w-full mx-6 md:mx-8 ${hideBorder ? "border-none" : "border-b border-muted"} ${isFirstInCategory ? "pt-3 mt-4" : "pt-8"} ${isLastInCategory ? "border-none pb-0" : "pb-6"}`}>
          <span className="max-w-58 md:max-w-none text-start">{question}</span>
          <div className="flex items-center justify-center p-1 rounded-full border text-primary">
            <svg
              className="shrink-0 w-3 h-3 md:w-4 md:h-4"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
                className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"
                  }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180"
                  }`}
              />
            </svg>
          </div>
        </div>
      </button>

      <div className={`grid overflow-hidden transitiona-all duration-300 ease-in-out text-sm bg-[#4D2C24]
      ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
    `}>
        <div className={`${isOpen ? 'md:max-w-3xl pb-6 px-6 md:px-8 text-sm text-secondary font-medium' : 'hidden'} ${isLastInCategory ? "pt-6" : ""}`}>{answer}</div>
      </div>
    </div>
  )
}

export default Accordion;
