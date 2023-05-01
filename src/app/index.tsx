import { type FC } from "react"
import { Form, FormHandler, Input } from "shared/ui"
import Checkbox from "shared/ui/Checkbox"
import "./index.scss"

const App: FC = () => {

    return (
        <Form>
            <FormHandler
                required
                title="Имя"
            >
                <Input />
            </FormHandler>
            <Checkbox/>
        </Form>
    )
}

export default App
