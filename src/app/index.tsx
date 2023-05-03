import { type FC } from "react"
import { Form, FormHandler, Input, Radio } from "shared/ui"
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
            <Radio />
        </Form>
    )
}

export default App
