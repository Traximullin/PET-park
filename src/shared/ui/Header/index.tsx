import { type FC } from "react"
import { Logo, Menu } from ".."
import "./index.scss"

const Header: FC = () => {
    return (
        <header className="header">
            <Logo />
            <Menu />
        </header>
    )
}

export default Header
