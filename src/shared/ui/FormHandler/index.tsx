import { type FC } from "react"
import "./index.scss"
import { type IFormHandler } from "./intereface"

const FormHandler: FC<IFormHandler> = (props) => {
    const { children, title, required, ...othersProps } = props

    return (
        <label className="form-handler" {...othersProps}>
            {
                title &&
                <span className="form-handler__title">{title}{required && "*"}</span>
            }
            {children}
            <span className="form-handler__error">Error</span>
        </label>
    )
}

export default FormHandler
