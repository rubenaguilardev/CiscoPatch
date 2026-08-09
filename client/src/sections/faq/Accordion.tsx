import { useState } from "react"
import type { FaqItem } from "./data"


const Accordion = ({question, answer}: FaqItem) => {

  const [accordionOpen, setAccordionOpen] = useState(false)

  return <div className="py-2 px-3">
    <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
      <span>{question}</span>
      <svg
        className="fill-indigo-500 shrink-0 ml-8"
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
    </button>
    <div className={`grid overflow-hidden transitiona-all duraction-300 ease-in-out text-sm
      ${accordionOpen ? "grid-rows[1fr] opacity-100" : "grid-rows[0fr] opacity-0"}
    `}>
      <div>{answer}</div>
    </div>
  </div>
}

export default Accordion;
