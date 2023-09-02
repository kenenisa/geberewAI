import { Container, Grid } from "@mui/material"
import Chat from "./Chat/Chat"

function Body() {
  return (
    <Container maxWidth="xl">

      <Grid container>
        <Grid item xs={12} md={3} sx={{ borderRight: '1px solid rgba(150,150,150,0.3)' }}>
        </Grid>
        <Grid item xs={12} md={6}>
          <Chat />
        </Grid>
        <Grid item xs={12} md={3} sx={{ borderLeft: '1px solid rgba(150,150,150,0.3)'}}>

        </Grid>

      </Grid>
    </Container>
  )
}

export default Body