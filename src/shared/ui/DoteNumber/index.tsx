import { useId, type FC } from "react"
import "./index.scss"
import { type IDoteNumber } from "./interface"

const DoteNumber: FC<IDoteNumber> = (props) => {
    const { name, children, ...othersProps } = props

    const id = useId()

    return (
        <div className="dote-number" {...othersProps}>
            <input
                id={`dote-number-${id}`}
                className="dote-number__input"
                name={name}
                type="radio"
            />
            <label
                htmlFor={`dote-number-${id}`}
                className="dote-number__label"
            >
                {children}
            </label>
        </div>
    )
}

export default DoteNumber
