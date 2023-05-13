import { useId, type FC } from "react"
import "./index.scss"
import { type ICardChecked } from "./interface"

const CardChecked: FC<ICardChecked> = (props) => {
    const { className, children, ...othersProps } = props

    const id = useId()

    const currentClasses = ["card-checked"]

    if (className) currentClasses.push(className)

    return (
        <article className={currentClasses.join(" ")} {...othersProps}>
            <input
                id={`card-checked-${id}`}
                className="card-checked__input"
                type="radio"
            />
            <div className="card-checked__mark" />
            <label
                htmlFor={`card-checked-${id}`}
                className="card-checked__container"
            >
                {children}
                <div className="card-checked__darker"/>
            </label>
        </article>
    )
}

export default CardChecked
