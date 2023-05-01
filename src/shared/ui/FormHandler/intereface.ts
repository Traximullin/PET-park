import { type LabelHTMLAttributes } from "react"

export interface IFormHandler extends LabelHTMLAttributes<HTMLLabelElement> {
    title?: string
    required?: boolean
}
