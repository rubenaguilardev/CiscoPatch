import { Info, Clock, CircleDollarSign, Toolbox } from 'lucide-react'
import type { LucideIcon } from "lucide-react"

export type headingItem = {
  title: string
  subtitle: string
  icon: LucideIcon
}

export type FaqItem = {
  question: string
  answer: string
  category: string
  id: string
}

export const headings: headingItem[] = [
  { title: "General", subtitle: "About CiscoPatch", icon: Info },
  { title: "Time", subtitle: "Scheduling & timelines", icon: Clock },
  { title: "Cost", subtitle: "Pricing and estimates", icon: CircleDollarSign },
  { title: "Repair", subtitle: "The repair process", icon: Toolbox }
]



export const questions: FaqItem[] = [
  {
    question: "Do I need to be home for an estimate?",
    answer: "No, just upload a few photos of the damaged area through our online form, and we'll get you an estimate without needing to schedule an in-person visit.",
    category: "General",
    id: "General0"
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the Inland Empire and LA County.",
    category: "General",
    id: "General1"
  },
  {
    question: "Do you work on commercial properties, or just homes?",
    answer: "Both. Whether it's a residential wall or a commercial space, we handle patching, repair, and restoration for either.",
    category: "General",
    id: "General2"
  },
  {
    question: "Will you clean up after the repair is finished?",
    answer: "Yes, we treat your home with respect. Once the repair is complete, we clean up all dust, debris, and materials, leaving the space as tidy as we found it.",
    category: "General",
    id: "General3"
  },
  {
    question: "Do I need to move furniture out of the room before you arrive?",
    answer: "Not necessarily. We can move small furniture and cover larger items to protect them from dust, but if you'd like to clear the area yourself beforehand, that's always welcome too.",
    category: "General",
    id: "General4"
  },
  {
    question: "How long will it take to receive my estimate?",
    answer: "Once you submit your photos and details through our form, you can expect a response with your estimate within 1–2 business days.",
    category: "Time",
    id: "Time0"
  },
  {
    question: "How long does a typical repair take?",
    answer: "Most small to medium patch jobs are completed within a day. Larger repairs or full wall restorations may take longer, and we'll give you a clear timeline as part of your estimate.",
    category: "Time",
    id: "Time1"
  },
  {
    question: "How quickly can you start once I approve the estimate?",
    answer: "In most cases, we can schedule your repair within a few business days of approval, depending on current availability and the scope of work.",
    category: "Time",
    id: "Time2"
  },
  {
    question: "Do repairs need to happen all in one visit?",
    answer: "Most repairs are completed in a single visit. Larger jobs involving multiple steps, like patching, texture matching, and painting, may require a follow-up visit to allow drying time between stages.",
    category: "Time",
    id: "Time3"
  },
  {
    question: "What if I need emergency repairs?",
    answer: "We do our best to accommodate urgent situations, such as water damage or safety hazards. Let us know it's time-sensitive when you submit your request, and we'll prioritize scheduling accordingly.",
    category: "Time",
    id: "Time4"
  },
  {
    question: "Do you paint the repaired areas or full rooms?",
    answer: "Yes, any paint will be part of the estimate.",
    category: "Repair",
    id: "Repair0"
  },
  {
    question: "Will the repaired area match the rest of my wall?",
    answer: "Yes. We carefully match texture and finish to your existing walls so the repair blends in seamlessly, not just patched over.",
    category: "Repair",
    id: "Repair1"
  },
  {
    question: "Can you repair water-damaged drywall?",
    answer: "It depends on the extent of the damage. Minor water staining or softening can often be repaired, while more severe damage may require replacing the affected section. We'll assess this during your estimate.",
    category: "Repair",
    id: "Repair2"
  },
  {
    question: "Do you handle repairs on textured or popcorn ceilings?",
    answer: "Yes, we can match a variety of ceiling textures, including popcorn and knockdown finishes, so your repair blends in with the rest of the ceiling.",
    category: "Repair",
    id: "Repair3"
  },
  {
    question: "What causes most drywall damage?",
    answer: "Common causes include accidental impacts, water leaks, settling cracks, and nail or screw holes from hanging items. We can repair damage from nearly any cause.",
    category: "Repair",
    id: "Repair4"
  },
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