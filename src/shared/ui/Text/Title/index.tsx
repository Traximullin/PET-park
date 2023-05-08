import { type FC } from "react"
import "./index.scss"
import { type ITextTitle } from "./interface"

const TextTitle: FC<ITextTitle> = (props) => <h2 className="text-title" {...props} />

export default TextTitle
