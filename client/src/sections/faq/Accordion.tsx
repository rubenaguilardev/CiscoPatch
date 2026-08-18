import { useState } from "react"
import type { FaqItem } from "./data"


const Accordion = ({question, answer}: FaqItem) => {

  const [accordionOpen, setAccordionOpen] = useState(false)

  return <div className="py-2 hover:text-primary transition-colors duration-150">
    <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full cursor-pointer">
      <span className="">{question}</span>
      <div className="flex items-center justify-center p-1 rounded-full border hover:border-primary">
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
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "rotate-180"
            }`}
          />
        </svg>
      </div>
    </button>
    <div className={`grid overflow-hidden transitiona-all duraction-300 ease-in-out text-sm
      ${accordionOpen ? "grid-rows[1fr] opacity-100" : "grid-rows[0fr] opacity-0"}
    `}>
      <div className={`${accordionOpen ? 'flex py-6 text-muted' : 'hidden'}`}>{answer}</div>
    </div>
  </div>
}

export default Accordion;
