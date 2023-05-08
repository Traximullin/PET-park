import { useId, type FC } from "react"
import "./index.scss"
import { type ITag } from "./interface"

const Tag: FC<ITag> = (props) => {
    const { name, children, ...othersProps } = props

    const id = useId()

    return (
        <div className="tag" {...othersProps}>
            <input
                className="tag__input"
                id={`tag-${id}`}
                type="radio"
                name={name}
            />
            <label
                className="tag__label"
                htmlFor={`tag-${id}`}
            >
                {children}
            </label>
        </div>
    )
}

export default Tag
