import Accordion from "./Accordion"
import { questions, headings } from "./data.ts"

import { useState } from "react"


const labels = ['General', 'Time', 'Repair', 'Cost']
const Icon = headings[0].icon

const Faq = () => {

  const [activeLabel, setActiveLabel] = useState("General")
  return (
    <section id='faq' className="py-32 overflow-hidden w-full">
      <div className="container space-y-4 mx-auto px-4 md:px-6 relative">
        <div className="bg-foreground p-8 rounded-2xl lg:bg-[url('/faq-bg.png')] bg-no-repeat bg-bottom-right">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl xl:text-3xl font-bold uppercase text-primary tracking-wide leading-none">
              Frequently asked questions
            </h2>
            <p className="max-w-130 lg:text-lg pb-8 md:pb-0 text-secondary font-medium leading-normal">
              Have more questions? Reach out to our team or submit an estimation request.
            </p>
          </div>
          <button className='absolute top-[73%] md:top-[58%] left-[54%] md:left-[55%] text-white text-xs lg:text-sm font-bold bg-primary rounded-full py-10 px-2 xl:py-12 xl:px-4 border-12 md:border-14 border-white cursor-pointer'>
            Get Estimate
          </button>
        </div>

      </div>
      <div className="container space-y-4 mx-auto md:px-6 relative">
        <div className="flex justify-center gap-1 mt-28 md:mt-32">
          {labels.map((label, index) => (
            <div
              key={index}
              onClick={() => setActiveLabel(label)}
              className={`flex justify-center items-center py-2 px-4 md:px-10 rounded-t-2xl md:text-lg font-bold $ ${label === activeLabel ? "bg-foreground text-primary" : "text-secondary md:hover:bg-muted/90"} transition-colors duration-250 ease-in-out cursor-pointer`}
            >
              {label}
            </div>
          ))}

        </div>
      </div>
      <div className="container space-y-4 mx-auto px-4 md:px-6 relative">
        <div className="max-w-206 mx-auto py-8 flex flex-col text-white bg-foreground rounded-2xl">
          <div className="flex items-center gap-3 mb-8 px-6 md:px-8">
            <div className="flex items-center gap-3">
              <Icon className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-bold ">{headings[0].title}</h3>
                <p className="font-bold text-sm text-secondary">{headings[0].subtitle}</p>
              </div>
            </div>
          </div>

          {questions.map(({ question, answer, category, id }, index) => (
            <Accordion key={index} question={question} answer={answer} category={category} id={id} />
          ))}
        </div>
      </div>
    </section >


  )
}

export default Faq