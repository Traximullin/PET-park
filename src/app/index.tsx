import { useState, type FC } from "react"
import { Button, Modal } from "shared/ui"
import "./index.scss"

const App: FC = () => {
    const [active, setActive] = useState(false)

    return (
        <>
            <Button onClick={() => { setActive(prev => !prev) }}>Привет</Button>
            <Modal active={active} setActive={setActive}/>
        </>
    )
}

export default App
