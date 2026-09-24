import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type HTMLAttributes,
} from "react"
import { ImagePlus } from "lucide-react"
import Button from "../../components/Button"
import FormField from "./FormField"

type Input = {
  id: string
  label: string
  type: string
  placeholder: string
  autoComplete: string
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"]
}

const inputs: Input[] = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
    autoComplete: "given-name",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
    autoComplete: "family-name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "johndoe@email.com",
    autoComplete: "email",
  },
  {
    id: "mobile",
    label: "Mobile",
    type: "tel",
    placeholder: "(909)951-9282",
    autoComplete: "tel",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "123 Main Ct",
    autoComplete: "street-address",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "Riverside",
    autoComplete: "address-level2",
  },
  {
    id: "zip",
    label: "ZIP",
    type: "text",
    placeholder: "92225",
    autoComplete: "postal-code",
    inputMode: "numeric",
  },
]

const fieldClasses =
  "py-2.5 px-4 rounded-lg bg-white border border-light-border/30 focus:outline-primary focus:bg-primary/5"

const ContactForm = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setPreviewUrl(file ? URL.createObjectURL(file) : null)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 lg:gap-8">
        {inputs.map(
          ({ id, label, type, placeholder, autoComplete, inputMode }) => (
            <FormField
              key={id}
              id={id}
              label={label}
              className={id === "address" ? "col-span-2" : ""}
            >
              <input
                type={type}
                required
                id={id}
                name={id}
                placeholder={placeholder}
                autoComplete={autoComplete}
                inputMode={inputMode}
                className={`${fieldClasses} placeholder:text-sm`}
              />
            </FormField>
          ),
        )}
      </div>
      <FormField id="description" label="Description">
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          placeholder="Description of work..."
          className={`${fieldClasses} resize-none placeholder:text-sm`}
        />
      </FormField>
      <FormField id="attach" label="Attach (optional)">
        <label className="flex flex-col items-center justify-center gap-2 h-30 rounded-lg bg-white border border-dashed border-light-border/60 text-muted cursor-pointer hover:bg-primary/5 hover:border-primary/50 has-focus-visible:outline-2 has-focus-visible:outline-primary transition-colors duration-200">
          {previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt="Selected photo preview"
                className="h-16 w-16 object-cover rounded-md shadow-sm"
              />
              <span className="text-xs font-medium">Click to change photo</span>
            </>
          ) : (
            <>
              <ImagePlus className="h-7 w-7 text-primary" />
              <span className="text-sm font-medium">
                Upload a photo of the damage
              </span>
            </>
          )}
          <input
            type="file"
            id="attach"
            name="attach"
            accept="image/*"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>
      </FormField>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
