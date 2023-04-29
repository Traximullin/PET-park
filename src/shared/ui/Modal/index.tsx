import { type FC } from "react"
import "./index.scss"
import { type IModal } from "./interface"

const Modal: FC<IModal> = (props) => {
    const { children, ...othersProps } = props

    return (
        <div className="modal" {...othersProps}>
            <div className="modal__content">
                123
            </div>
        </div>
    )
}

export default Modal
