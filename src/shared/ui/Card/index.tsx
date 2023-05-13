import { type FC } from "react"
import "./index.scss"
import { type ICard } from "./interface"

const Card: FC<ICard> = (props) => {
    const { children, className, ...othersProps } = props

    const currentClasses = ["card"]

    if (className) currentClasses.push(className)

    return (
        <article
            className={currentClasses.join(" ")} {...othersProps}
        >
            {children}
        </article>
    )
}

export default Card
