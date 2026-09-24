import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type HTMLAttributes,
} from "react"
import { ImagePlus, X } from "lucide-react"
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

const MAX_PHOTOS = 5

const isSameFile = (a: File, b: File) =>
  a.name === b.name && a.size === b.size && a.lastModified === b.lastModified

const ContactForm = () => {
  const [photos, setPhotos] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const previewUrls = useMemo(
    () => photos.map((photo) => URL.createObjectURL(photo)),
    [photos],
  )

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [previewUrls])

  const updatePhotos = (next: File[]) => {
    const transfer = new DataTransfer()
    next.forEach((photo) => transfer.items.add(photo))
    if (fileInputRef.current) fileInputRef.current.files = transfer.files
    setPhotos(next)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const added = Array.from(e.target.files ?? []).filter(
      (file) => !photos.some((photo) => isSameFile(photo, file)),
    )
    updatePhotos([...photos, ...added].slice(0, MAX_PHOTOS))
  }

  const removePhoto = (index: number) => {
    updatePhotos(photos.filter((_, i) => i !== index))
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
      <FormField id="attach" label="Attach">
        <label
          htmlFor="attach"
          className="flex flex-col items-center justify-center gap-2 min-h-30 p-4 rounded-lg bg-white border border-dashed border-light-border/60 text-muted cursor-pointer hover:bg-primary/5 hover:border-primary/50 has-focus-visible:outline-2 has-focus-visible:outline-primary transition-colors duration-200"
        >
          {previewUrls.length > 0 ? (
            <>
              <div className="flex flex-wrap justify-center gap-3">
                {previewUrls.map((url, index) => (
                  <div key={url} className="relative">
                    <img
                      src={url}
                      alt={`Selected photo ${index + 1}`}
                      className="h-14 w-14 object-cover rounded-md shadow-sm"
                    />
                    <button
                      type="button"
                      aria-label={`Remove photo ${index + 1}`}
                      onClick={(e) => {
                        e.preventDefault()
                        removePhoto(index)
                      }}
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-foreground text-white hover:bg-primary cursor-pointer"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium">
                {photos.length} photo{photos.length > 1 ? "s" : ""} selected
                {photos.length < MAX_PHOTOS && " · Click to add more"}
              </span>
            </>
          ) : (
            <>
              <ImagePlus className="h-7 w-7 text-primary" />
              <span className="text-sm font-medium">
                Upload photos of the damage
              </span>
            </>
          )}
          <input
            type="file"
            id="attach"
            name="attach"
            accept="image/*"
            multiple
            ref={fileInputRef}
            className="sr-only"
            required
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
