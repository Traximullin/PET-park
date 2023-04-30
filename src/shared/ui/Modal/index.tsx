import { type FC } from "react"
import "./index.scss"
import { type IModal } from "./interface"

const Modal: FC<IModal> = (props) => {
    const { active, setActive, children, ...othersProps } = props

    const currentClasses = ["modal"]

    if (active) currentClasses.push("modal_active")

    const handleCloseClick = (): void => { setActive(prev => !prev) }

    return (
        <div
            className={currentClasses.join(" ")}
            {...othersProps}
        >
            <div className="modal__content">
                <div className="modal__close" onClick={handleCloseClick}>
                    <span className="modal__close-icon"/>
                    123
                </div>
                Привет
            </div>
        </div>
    )
}

export default Modal
