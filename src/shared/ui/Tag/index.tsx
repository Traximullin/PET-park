import { type FC } from "react"
import "./index.scss"
import { type ITag } from "./interface"

const Tag: FC<ITag> = (props) => <div className="tag" {...props}/>

export default Tag
