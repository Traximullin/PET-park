import { type FC } from "react"
import "./index.scss"
import { type ITextHeader } from "./interface"

const TextHeader: FC<ITextHeader> = (props) => <h1 className="text-header" {...props}/>

export default TextHeader
