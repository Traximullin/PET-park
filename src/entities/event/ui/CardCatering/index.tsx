import { type FC } from "react"
import "./index.scss"
import { CardChecked } from "shared/ui"

const CardCatering: FC = () => {
    return (
        <CardChecked className="card-catering">
            <img
                className="card-catering__image"
                src="https://static.tildacdn.com/tild3334-3630-4137-a530-306263303536/IMG_6544-2.png"
                alt="catering"
            />
            <p className="card-catering__title">
                Title
            </p>
            <span className="card-catering__information">
                123
            </span>
        </CardChecked>
    )
}

export default CardCatering
