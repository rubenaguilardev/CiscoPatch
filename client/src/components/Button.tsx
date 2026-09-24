import type { ReactNode } from "react"

type ButtonProps = {
  className?: string
  size?: "sm" | "default" | "lg"
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

const Button = ({
  className = "",
  size = "default",
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-white hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/25"

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

  return (
    <button type={type} className={classes} onClick={onClick}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

export default Button
