import Accordion from "./Accordion"
import { questions } from "./data.ts"

const Faq = () => {
  return (
    <section id='faq' className="py-32 overflow-hidden w-full ">
      <div className="container space-y-4 mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl xl:text-3xl mb-4 font-medium uppercase text-primary tracking-wide leading-none">Frequently asked questions</h2>
          <p className="text-lg font-medium leading-normal">Have more questions? Reach out to our team or submit an estimation request.</p>
        </div>
    
        {questions.map(({question, answer}, index) => (
          <Accordion key={index} question={question} answer={answer} />
        ))}
        </div>
    </section>
      
      
  )
}

export default Faq