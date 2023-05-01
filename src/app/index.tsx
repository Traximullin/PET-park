import { type FC } from "react"
import { Form, FormHandler, Input } from "shared/ui"
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
        </Form>
    )
}

export default App
