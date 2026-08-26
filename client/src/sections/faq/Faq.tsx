// import Accordion from "./Accordion"
// import { questions } from "./data.ts"

import { useState } from "react"

const labels = ['General', 'Time', 'Cost', 'Repair', 'Cleanup']

const Faq = () => {

  const [activeLabel, setActiveLabel] = useState("General")
  return (
    <section id='faq' className="py-32 overflow-hidden w-full">
      <div className="container space-y-4 mx-auto px-4 md:px-6 relative">
        <div className="bg-foreground p-8 rounded-2xl lg:bg-[url('/faq-bg.png')] bg-no-repeat bg-bottom-right">
          <div className="py-5">
            <h2 className="text-xl xl:text-3xl mb-4 font-bold uppercase text-primary tracking-wide leading-none">
              Frequently asked questions
            </h2>
            <p className="max-w-130 lg:text-lg text-secondary font-medium leading-normal">
              Have more questions? Reach out to our team or submit an estimation request.
            </p>
          </div>
          <button className='absolute top-[66%] md:top-[58%] left-[65%] text-white text-xs lg:text-sm font-bold bg-primary rounded-full py-10 px-2 xl:py-12 xl:px-4 border-12 md:border-14 border-white cursor-pointer'>
            Get Estimate
          </button>
        </div>

        
    
        {/* {questions.map(({question, answer}, index) => (
          <Accordion key={index} question={question} answer={answer} />
        ))} */}
        </div>
        <div className="flex justify-center text-center gap-0.75 mt-32">
          {labels.map((label, index) => (
            <div key={index} className="py-4 w-40 bg-foreground text-primary text-lg font-bold rounded-t-lg">{label}</div>
          ))}
        </div>
    </section>
      
      
  )
}

export default Faq