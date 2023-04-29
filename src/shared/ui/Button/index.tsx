import { type FC } from "react"
import "./index.scss"
import { type IButton } from "./interface"

const Button: FC<IButton> = (props) => {
    return (
        <button className="button button_theme_outline" {...props}>

        </button>
    )
}

export default Button
