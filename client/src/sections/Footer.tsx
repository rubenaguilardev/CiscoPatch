import logofooter from "../assets/header/logo-footer.svg"

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 lg:py-32 overflow-hidden w-full">
      <div className="container space-y-8 mx-auto px-4 md:px-16 py-8 relative bg-foreground rounded-2xl">
        <div className="flex items-end gap-2 text-white">
          <img src={logofooter} alt="Cisco Patch footer logo" />
          <span className="font-bold translate-y-1.5">CiscoPatch</span>
        </div>
        <div className="text-secondary font-bold">
          <p>Seamless Repairs.</p>
          <p>Lasting Walls.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer