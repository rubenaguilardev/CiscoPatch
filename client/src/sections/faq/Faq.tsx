import Accordion from "./Accordion"


const questions = [
  {
    question: "Do I need to be home for an estimate?",
    answer: "No, just upload a few photos of the damaged area through our online form, and we'll get you an estimate without needing to schedule an in-person visit."
  },
  {
    question: "How long will it take to receive my estimate?",
    answer: "Once you submit your photos and details through our form, you can expect a response with your estimate within 1–2 business days."
  },
  { 
    question: "How much does drywall repair cost?",
    answer: "It depends on the size and severity of the damage. Small patches and nail holes are typically quick and affordable, while larger cracks, water damage, or full wall restoration take more time and materials. We'll give you a clear estimate before any work begins."
  },
  {
    question: "How long does a typical repair take?",
    answer: "Most small to medium patch jobs are completed within a day. Larger repairs or full wall restorations may take longer, and we'll give you a clear timeline as part of your estimate."
  },
  {
    question: "Will the repaired area match the rest of my wall?",
    answer: "Yes. We carefully match texture and finish to your existing walls so the repair blends in seamlessly, not just patched over."
  },
  {
    question: "Can you repair water-damaged drywall, or does it need to be replaced?",
    answer: "It depends on the extent of the damage. Minor water staining or softening can often be repaired, while more severe damage may require replacing the affected section. We'll assess this during your estimate."
  },
  {
    question: "How much mess should I expect, and do you clean up after?",
    answer: "Drywall work does create some dust, but we take care to contain it and leave the area clean once the job is done."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the Inland Empire and LA County."
  },
  {
    question: "Do you work on commercial properties, or just homes?",
    answer: "Both. Whether it's a residential wall or a commercial space, we handle patching, repair, and restoration for either."
  },
  {
    question: "Do you paint the repaired areas or full rooms?",
    answer: "Yes, any paint will be part of the estimate."
  },
  
]

const Faq = () => {
  return (
    <section id='faq' className="py-32 overflow-hidden w-full">
      <h2>Frequently asked questions</h2>
      <p>Have more questions? Reach out to our team or submit an estimation request.</p>
      <Accordion />
    </section>
  )
}

export default Faq