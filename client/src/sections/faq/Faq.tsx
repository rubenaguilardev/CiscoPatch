import Accordion from "./Accordion"
import { questions } from "./data.ts"
import { CircleDollarSign } from 'lucide-react'
import { useState } from "react"


const labels = ['General', 'Time', 'Cost', 'Repair', 'Cleanup']

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
            <p className="max-w-130 lg:text-lg pb-8 text-secondary font-medium leading-normal">
              Have more questions? Reach out to our team or submit an estimation request.
            </p>
          </div>
          <button className='absolute top-[75%] md:top-[58%] left-[54%] md:left-[55%] text-white text-xs lg:text-sm font-bold bg-primary rounded-full py-10 px-2 xl:py-12 xl:px-4 border-12 md:border-14 border-white cursor-pointer'>
            Get Estimate
          </button>
        </div>


      </div>
      <div className="flex justify-center text-center gap-0.75 mt-32">
        {labels.map((label, index) => (
          <div
            key={index}
            onClick={() => setActiveLabel(label)}
            className={`w-36 h-13 flex justify-center items-center rounded-t-2xl text-lg font-bold ${label === activeLabel ? "bg-foreground text-primary" : "text-secondary hover:bg-[#4D2C24]/80"} transition-colors duration-250 ease-in-out cursor-pointer`}
          >
            {label}
          </div>
        ))}

      </div>

      <div className="max-w-206 mx-auto py-8 flex flex-col text-white bg-foreground rounded-2xl">
        <div className="flex items-center gap-3 mb-8 px-8">
          <CircleDollarSign className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-lg font-bold ">Cost</h3>
            <p className="font-bold text-sm text-secondary">Pricing and estimates</p>
          </div>
        </div>
        {questions.map(({ question, answer, category, id }, index) => (
          <Accordion key={index} question={question} answer={answer} category={category} id={id} />
        ))}
      </div>
    </section>


  )
}

export default Faq