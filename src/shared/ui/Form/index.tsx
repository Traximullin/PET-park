import { type FC } from "react"
import "./index.scss"
import { type IForm } from "./interface"

const Form: FC<IForm> = (props) => {

    return (
        <form className="form" {...props} />
    )
}

export default Form
