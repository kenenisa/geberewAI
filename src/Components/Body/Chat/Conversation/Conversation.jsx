/* eslint-disable react/prop-types */
import { Box, Button, Card, CardContent, Container, Stack, TextField } from "@mui/material"
import { Icon } from '@iconify/react';
function UserCard({ item }) {
    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ borderRadius: '50%', border: '1px solid #aaa', ml: 2, width: 50, height: 47, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Icon icon="ic:twotone-person" fontSize={25} />
            </Box>
            <TextField value={item.message} disabled fullWidth sx={{
                borderRadius: 3, '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius: 3,
                    }
                }
            }} />
        </Stack>
    )
}

function AssistantCard({ item }) {
    return (
        <Stack direction="row" spacing={2}>
            <Box>
                <img src="items/ai.png" alt="AI png" />
            </Box>
            <Stack>
                <Card elevation={6} sx={{ borderRadius: 3 }}>
                    <CardContent>
                        {item.message}
                    </CardContent>
                </Card>

            </Stack>
        </Stack>
    )
}
function Conversation({ list }) {
    return (
        <Container maxWidth="md">
            {list.map((item, key) => (
                <Box key={key} sx={{ my: 3, mx: 2 }}>
                    {item.role == 'user' ? <UserCard item={item} /> : <AssistantCard item={item} />}
                </Box>
            ))}
            <Box sx={{ display: "flex", justifyContent: 'center', py: 3 }}>
                <Button
                    variant="outlined"
                    color="neutral"
                    startIcon={<Icon icon="typcn:refresh-outline" />}
                >Regenerate response</Button>
            </Box>
        </Container>
    )
}

export default Conversation