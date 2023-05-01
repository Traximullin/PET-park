import { type FC } from "react"
import "./index.scss"

const Menu: FC = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">Развлечения</li>
                <li className="menu__item">О нас</li>
                <li className="menu__item">Полезное</li>
                <li className="menu__item">Организовать праздник</li>
            </ul>
        </nav>
    )
}

export default Menu
