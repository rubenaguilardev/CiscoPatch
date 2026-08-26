export type FaqItem = {
  question: string
  answer: string
  category: string
  id: string
}


export const questions: FaqItem[] = [
  // {
  //   question: "Do I need to be home for an estimate?",
  //   answer: "No, just upload a few photos of the damaged area through our online form, and we'll get you an estimate without needing to schedule an in-person visit.",
  //   category: 'General'
  // },
  // {
  //   question: "How long will it take to receive my estimate?",
  //   answer: "Once you submit your photos and details through our form, you can expect a response with your estimate within 1–2 business days.",
  //   category: "Time"
  // },
  // { 
  //   question: "How much does drywall repair cost?",
  //   answer: "It depends on the size and severity of the damage. Small patches and nail holes are typically quick and affordable, while larger cracks, water damage, or full wall restoration take more time and materials. We'll give you a clear estimate before any work begins.",
  //   category: "Cost"
  // },
  // {
  //   question: "How long does a typical repair take?",
  //   answer: "Most small to medium patch jobs are completed within a day. Larger repairs or full wall restorations may take longer, and we'll give you a clear timeline as part of your estimate.",
  //   category: "Time"
  // },
  // {
  //   question: "Will the repaired area match the rest of my wall?",
  //   answer: "Yes. We carefully match texture and finish to your existing walls so the repair blends in seamlessly, not just patched over.",
  //   category: "Repair"
  // },
  // {
  //   question: "Can you repair water-damaged drywall?",
  //   answer: "It depends on the extent of the damage. Minor water staining or softening can often be repaired, while more severe damage may require replacing the affected section. We'll assess this during your estimate.",
  //   category: "Repair"
  // },
  // {
  //   question: "How much mess should I expect, and do you clean up after?",
  //   answer: "Drywall work does create some dust, but we take care to contain it and leave the area clean once the job is done.",
  //   category: "Cleanup"
  // },
  // {
  //   question: "What areas do you serve?",
  //   answer: "We proudly serve the Inland Empire and LA County.",
  //   category: "General"
  // },
  // {
  //   question: "Do you work on commercial properties, or just homes?",
  //   answer: "Both. Whether it's a residential wall or a commercial space, we handle patching, repair, and restoration for either.",
  //   category: "General"
  // },
  // {
  //   question: "Do you paint the repaired areas or full rooms?",
  //   answer: "Yes, any paint will be part of the estimate.",
  //   category: "Repair"
  // },
  {
    question: "How much does drywall repair cost?",
    answer: "It depends on the size and severity of the damage. Small patches and nail holes are typically quick and affordable, while larger cracks, water damage, or full wall restoration take more time and materials. We'll give you a clear estimate before any work begins.",
    category: "Cost",
    id: "Cost0"
  },
  {
    question: "Are materials included in the price?",
    answer: "Yes, all materials needed for your repair, including drywall, joint compound, and paint, are included in your estimate.",
    category: "Cost",
    id: "Cost1"
  },
  {
    question: "Is the estimate free?",
    answer: "Yes, estimates are completely free with no obligation. Just submit your photos through our online form and we'll send you a detailed quote.",
    category: "Cost",
    id: "Cost2"
  },
  {
    question: "Are there any hidden fees or charges?",
    answer: "No. The price we quote in your estimate is the price you pay, unless the scope of work changes once we begin, such as discovering additional damage behind the wall.",
    category: "Cost",
    id: "Cost3"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and cash. Payment details will be confirmed when your estimate is finalized.",
    category: "Cost",
    id: "Cost4"
  }
]