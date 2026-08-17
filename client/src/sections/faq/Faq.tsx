import Accordion from "./Accordion"
import { questions } from "./data.ts"

const Faq = () => {
  return (
    <section id='faq' className="py-32 overflow-hidden w-full">
      <h2>Frequently asked questions</h2>
      <p>Have more questions? Reach out to our team or submit an estimation request.</p>
      {questions.map(({question, answer}, index) => (
        <Accordion key={index} question={question} answer={answer} />
      ))}
    </section>
  )
}

export default Faq