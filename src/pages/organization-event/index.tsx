import { type FC } from "react"
import { BaseLayout, Grid, Space } from "shared/layouts"
import { Box, Calendar, DoteNumber, Tag, Text } from "shared/ui"

const OrganizationEventPage: FC = () => {
    return (
        <BaseLayout>
            <Grid gap="14px" gridTemplateColumns="1fr 0.5fr 1fr">
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
            </Grid>
            <Box>
                <Text.Title>
                    Количество человек
                </Text.Title>
                <Space gap="5px">

                </Space>
            </Box>
        </BaseLayout>
    )
}

export default OrganizationEventPage
