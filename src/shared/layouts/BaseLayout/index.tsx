import { type FC } from "react"
import "./index.scss"
import { type IBaseLayout } from "./interface"

const BaseLayout: FC<IBaseLayout> = (props) => <main className="base-layout" {...props} />

export default BaseLayout
