import { OrganizationEventPage } from "pages"
import { type FC } from "react"
import { Header } from "shared/ui"
import "./index.scss"

const App: FC = () => {

    return (
        <>
            <Header/>
            <OrganizationEventPage />
        </>
    )
}

export default App
