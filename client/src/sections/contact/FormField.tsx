import type { ReactNode } from "react"

type FormFieldProps = {
  id: string
  label: string
  className?: string
  children: ReactNode
}

const FormField = ({ id, label, className = "", children }: FormFieldProps) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={id} className="font-bold text-xs roboto tracking-wide">
        {label}
      </label>
      {children}
    </div>
  )
}

export default FormField
