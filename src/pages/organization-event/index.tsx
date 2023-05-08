import { type FC } from "react"
import { BaseLayout, Space } from "shared/layouts"
import { Box, Calendar, Tag, Text } from "shared/ui"

const OrganizationEventPage: FC = () => {
    return (
        <BaseLayout>
            <Space gap="14px">
                <Box>
                    <Text.Title>
                        Дата мероприятия
                    </Text.Title>
                    <Calendar />
                </Box>
                <Box>
                    <Text.Title>
                        Время начала
                    </Text.Title>
                    <Tag name="time">10:00</Tag>
                </Box>
                <Box>
                    <Text.Title>
                        Тип праздника
                    </Text.Title>
                </Box>
            </Space>
        </BaseLayout>
    )
}

export default OrganizationEventPage
