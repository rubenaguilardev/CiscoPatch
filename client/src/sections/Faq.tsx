

const faqData = [
  {
    question: 'to be filled out',
    answer: 'to be answered'
  },
  {
    question: 'to be filled out',
    answer: 'to be answered'
  },
  {
    question: 'to be filled out',
    answer: 'to be answered'
  },
  {
    question: 'to be filled out',
    answer: 'to be answered'
  },
  {
    question: 'to be filled out',
    answer: 'to be answered'
  },
]


const Faq = () => {
  return (
    <section id='faq' className="py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {faqData.map(({ question, answer }, index) => (
          <div key={index}>
            {question}
            {answer}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq