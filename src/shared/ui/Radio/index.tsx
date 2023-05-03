import { type FC } from "react"
import "./index.scss"
import { type IRadio } from "./interface"

const Radio: FC<IRadio> = (props) => {
    const { ...othersProps } = props

    return (
        <input
            className="radio__input"
            type="radio"
            {...othersProps}
        />
    )
}

export default Radio
