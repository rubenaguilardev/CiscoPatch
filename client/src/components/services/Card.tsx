type Card = {
  img: string
  alt: string
  heading: string
  description: string
}

const Card = ({img, alt, heading, description}: Card) => {
  return (
    <div>
      <div className="flex flex-col">
        <img src={img} alt={alt} className="aspect-square object-cover h-85 rounded-3xl mb-6 shadow-xl"/>
        <h2 className="text-2xl font-bold leading-[1.15] mb-4">{heading}</h2>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  )
}

export default Card