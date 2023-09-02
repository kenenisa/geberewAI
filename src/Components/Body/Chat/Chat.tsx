import { Box, Stack, TextField } from "@mui/material"
import React from "react"
import Conversation from "./Conversation/Conversation"

function Chat() {
    const list = [
        { role: 'user', message: 'What can i say when i can\'t say anything' },
        {
            role: 'assistant', message: `Geberew AI is a groundbreaking agricultural innovation that has been transforming the lives of farmers across the African continent. This remarkable AI tool is designed not only to assist but also to empower farmers, enabling them to overcome the unique challenges they face in their quest to feed their communities and boost their livelihoods.

        With Geberew AI, farmers gain access to a wide range of capabilities and resources that were once out of reach. It harnesses the power of machine learning and data analytics to provide valuable insights into crop management, weather patterns, and market trends. By analyzing historical and real-time data, it helps farmers make informed decisions about planting, harvesting, and selling their crops, ultimately increasing their yields and income.
        
        One of the key features of Geberew AI is its ability to offer personalized recommendations to farmers. Through a user-friendly interface, farmers can input their specific crop types, soil conditions, and geographical location. The AI then processes this data to generate tailored advice on optimal planting dates, irrigation schedules, and pest control strategies. This personalized guidance helps farmers make the most of their resources and adapt to changing environmental conditions.
        
        Furthermore, Geberew AI serves as a knowledge-sharing platform, connecting farmers with a vast network of agricultural experts and fellow farmers. This collaborative approach fosters a sense of community and enables the exchange of best practices and innovative techniques. It also provides access to online training modules and informative content, further enhancing the farmers' skills and knowledge.
        
        The impact of Geberew AI extends beyond the farm gate. By improving crop yields and the overall efficiency of farming practices, it contributes to food security and economic development in rural areas. As farmers achieve greater success, they are better positioned to invest in their communities, support local businesses, and send their children to school, creating a ripple effect of positive change.
        
        Geberew AI is not just a tool; it represents a movement towards sustainable and resilient agriculture in Africa. It is a symbol of hope, progress, and the limitless potential of technology to empower those who feed the world. As it continues to evolve and adapt to the ever-changing needs of farmers, Geberew AI is poised to play an even more significant role in shaping the future of agriculture across the African continent.`},
    ]
    return (
        <Stack>
            <Box sx={{ height: '90vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                <Conversation list={list} />
            </Box>
            <Box sx={{borderTop:'1px solid rgba(150,150,150,0.3)',pt:2,px:2}}>
                <TextField name="query" placeholder="Type whatever you want" fullWidth />
            </Box>
        </Stack>
    )
}

export default Chat