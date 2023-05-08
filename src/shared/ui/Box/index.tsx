import { type FC } from "react"
import "./index.scss"
import { type IBox } from "./interface"

const Box: FC<IBox> = (props) => <div className="box" {...props}/>

export default Box
