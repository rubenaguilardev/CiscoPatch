import { useState } from "react"
import type { FaqItem } from "./data"


const Accordion = ({question, answer, category}: FaqItem) => {

  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
  
  <div className="hover:text-primary transition-colors duration-150">
    <button onClick={() => setAccordionOpen(!accordionOpen)} className={`w-full flex justify-between cursor-pointer ${accordionOpen ? "bg-[#4D2C24]" : ""} `}>
      <div className={`flex justify-between w-full mx-8 pt-8 pb-6 ${accordionOpen ? "border-none" : "border-b border-muted"}`}>
      <span className="">{question}</span>
      <div className="flex items-center justify-center p-1 rounded-full border text-primary">
        <svg
          className="shrink-0"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            fill="currentColor"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            fill="currentColor"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "rotate-180"
            }`}
          />
        </svg>
      </div>
      </div>
    </button>
    
    <div className={`grid overflow-hidden transitiona-all duraction-300 ease-in-out text-sm bg-[#4D2C24]
      ${accordionOpen ? "grid-rows[1fr] opacity-100" : "grid-rows[0fr] opacity-0"}
    `}>
      <div className={`${accordionOpen ? 'max-w-3xl flex py-6 px-8 text-secondary font-medium' : 'hidden'}`}>{answer}</div>
    </div>
  </div>
  )
}

export default Accordion;
