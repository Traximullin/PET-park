import { useId, type FC } from "react"
import "./index.scss"

const Checkbox: FC = (props) => {
    const { ...othersProps } = props

    const id = useId()

    return (
        <div className="checkbox">
            <input
                className="checkbox__input"
                id={`checkbox-${id}`}
                type="checkbox"
                {...othersProps}
            />
            <label
                className="checkbox__label"
                htmlFor={`checkbox-${id}`}
            />
        </div>
    )
}

export default Checkbox
