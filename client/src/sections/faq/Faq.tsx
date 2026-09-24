import Accordion from "./Accordion"
import { questions, headings } from "./data.ts"
import { useState } from "react"

type Label = string

const labels: Label[] = ["General", "Time", "Repair", "Cost"]

const Faq = () => {
  const [activeLabel, setActiveLabel] = useState("General")
  const [openId, setOpenId] = useState<string | null>(null)

  const filteredQuestions = questions.filter((question) =>
    question.id.includes(activeLabel),
  )
  const heading =
    headings.find((heading) => heading.title === activeLabel) ?? headings[0]
  const Icon = heading.icon

  const handleLabelChange = (label: string) => {
    setActiveLabel(label)
    setOpenId(null)
  }

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-24 lg:py-32 overflow-hidden w-full">
      <div className="container space-y-4 mx-auto px-4 md:px-6 relative">
        <div className="bg-foreground p-8 rounded-2xl lg:bg-[url('/faq-bg.png')] bg-no-repeat bg-bottom-right lg:bg-size-[350px_145px] xl:bg-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl xl:text-3xl font-bold  text-white tracking-wide leading-none">
              Frequently Asked Questions
            </h2>
            <p className="max-w-130 lg:text-lg pb-8 md:pb-0 text-secondary font-medium leading-normal">
              Have more questions? Reach out to our team or submit an estimation
              request.
            </p>
          </div>
          <a href="#contact">
            <button className="absolute top-[75%] md:top-[58%] left-[55%] md:left-[72%] lg:left-[58%] text-white text-xs lg:text-sm font-bold bg-primary rounded-full py-10 px-2.5 lg:py-11 lg:px-2 xl:py-12 xl:px-4 border-10 md:border-12 lg:border-14 border-white cursor-pointer hover:bg-[#cc411f]">
              Get Estimate
            </button>
          </a>
        </div>
      </div>
      <div className="container space-y-4 mx-auto md:px-6 relative">
        <div className="flex justify-center md:gap-1 mt-24 md:mt-32">
          {labels.map((label) => (
            <div
              key={label}
              onClick={() => handleLabelChange(label)}
              className={`flex justify-center items-center py-1.5 px-2.5 md:px-10 rounded-t-xl text-sm regular-res md:text-base lg:text-lg font-bold ${label === activeLabel ? "bg-foreground text-primary" : "text-secondary md:hover:bg-muted/90"} transition-colors duration-250 ease-in-out cursor-pointer`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="container space-y-4 mx-auto px-4 md:px-6 relative">
        <div className="max-w-206 mx-auto py-8 flex flex-col text-white bg-foreground rounded-2xl">
          <div className="flex items-center gap-3 mb-4 px-6 md:px-8">
            <div className="flex items-center gap-3">
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              <div>
                <h3 className="text-lg font-bold ">{heading.title}</h3>
                <p className="font-bold text-sm md:text-sm text-secondary">
                  {heading.subtitle}
                </p>
              </div>
            </div>
          </div>

          {filteredQuestions.map(
            ({ question, answer, category, id }, index) => {
              const nextItem = filteredQuestions[index + 1]
              const hideBorder = openId === id || openId === nextItem?.id

              return (
                <Accordion
                  key={id}
                  question={question}
                  answer={answer}
                  category={category}
                  id={id}
                  isOpen={openId === id}
                  onToggle={() => handleToggle(id)}
                  hideBorder={hideBorder}
                />
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}

export default Faq
