import { type FC } from "react"
import { BaseLayout, Space } from "shared/layouts"
import { Box, Calendar, Tag } from "shared/ui"

const OrganizationEventPage: FC = () => {
    return (
        <BaseLayout>
            <Space gap="14px">
                <Box>
                    <Calendar />
                </Box>
                <Box>
                    <Tag name="time">10:00</Tag>
                </Box>
                <Box>

                </Box>
            </Space>
        </BaseLayout>
    )
}

export default OrganizationEventPage
