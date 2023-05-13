import { type FC } from "react"
import "./index.scss"
import { type ICardPoint } from "./interface"
import { CardChecked } from "shared/ui"

const CardPoint: FC<ICardPoint> = (props) => {
    const { title, } = props

    return (
        <CardChecked className="card-point">
            <p className="card-point__title">{title}</p>
            <img
                className="card-point__image"
                src="https://smapse.ru/storage/2020/06/converted/895_0_paris-disneyland-smapse-1.jpg"
                alt="image"
            />
        </CardChecked>
    )
}

export default CardPoint
