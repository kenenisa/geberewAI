/* eslint-disable react/prop-types */
import { Box, Card, CardContent, CardHeader } from "@mui/material"


function UserCard({ item }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Card sx={{ width: '80%' }}>
                <CardHeader subheader='you' />
                <CardContent>
                    {item.message}
                </CardContent>
            </Card>
        </Box>
    )
}

function AssistantCard({ item }) {
    return (
        <Box sx={{ alignSelf: 'right', width: '80%' }}>
            {item.message}
        </Box>
    )
}
function Conversation({ list }) {
    return (
        <Box>
            {list.map((item, key) => (
                <Box key={key} sx={{ my: 3, mx:2 }}>
                    {item.role == 'user' ? <UserCard item={item} /> : <AssistantCard item={item} />}
                </Box>
            ))}
        </Box>
    )
}

export default Conversation