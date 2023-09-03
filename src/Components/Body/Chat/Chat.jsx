import { Box, Container, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import Conversation from "./Conversation/Conversation"
import { Icon } from "@iconify/react"

function Chat({ address }) {
    const [list, setList] = useState([])
    const [input, setInput] = useState('');
    const base_url = 'https://geberew-backend.onrender.com'
    const handleSubmit = () => {
        if (input != "") {
            const newList = [...list, { role: 'user', message: input }, { role: 'assistant', message: 'Generating...' }]
            fetch(base_url + '/query', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: input,
                    location: address
                })
            }).then(e => e.json()).then(res => {
                setList([...(newList.slice(0, -1)), { role: 'assistant', message: res.openai.message[1].message }])
            }).catch(console.log)
            setList(newList)
            setInput("")
        }
    }
    return (
        <Stack>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                {/* <Stack direction="row" spacing={1}> */}
                <Box sx={{ width: 150 }}>
                    <img src="items/geberew.png" alt="ai image" width="150" />
                </Box>
                {/* <Typography variant="h5" color="#64BD64">
                        Geberew AI
                    </Typography> */}
                {/* </Stack> */}
            </Box>
            <Box sx={{ height: '82vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                <Conversation list={list} />
            </Box>
            <Container fixed sx={{ borderTop: '1px solid rgba(150,150,150,0.3)', pt: 2, px: 2, pb: 5 }}>
                <OutlinedInput name="query" placeholder="Type whatever you want" fullWidth
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleSubmit}
                                edge="end"
                            >
                                <Icon icon="majesticons:send" />
                            </IconButton>
                        </InputAdornment>
                    } />
            </Container>
        </Stack>
    )
}

export default Chat