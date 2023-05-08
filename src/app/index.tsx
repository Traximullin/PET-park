import { type FC } from "react"
import { Space } from "shared/layouts"
import { Box, Calendar } from "shared/ui"
import "./index.scss"

const App: FC = () => {

    return (
        <Space gap="12px">
            <Box>
                <Calendar />
            </Box>
            <Box>
                <Calendar />
            </Box>
            <Box>
                <Calendar />
            </Box>
        </Space>
    )
}

export default App
