import { Box, Grid, Stack, Typography } from "@mui/material"
import Chat from "./Chat/Chat"
import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"

function Body() {
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState('Searching...')
  function getCurrentLocation() {
    let notSent = true;
    navigator.geolocation.getCurrentPosition(async function (result) {
      console.log({ result });
      const { latitude, longitude } = result.coords
      setLocation({ latitude, longitude })
      const url = `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=${latitude}&lng=${longitude}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ed7866a312msh0bafdc03242c636p1dd977jsn1836849ee767',
          'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
        }
      };
      if (notSent) {
        notSent = false;
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setAddress(result.Results[0].address)
        } catch (error) {
          console.error(error);
        }
      }
    });
  }
  console.log(location);
  useEffect(() => {
    if (navigator.geolocation) {
      console.log("Geolocation is supported by this browser :)");
      getCurrentLocation();
    } else {
      console.log("Geolocation is NOT supported by this browser :(");
    }
  }, [])
  return (
    // <Container fullWidth>

    <Grid container>
      <Grid item xs={12} md={3} sx={{ borderRight: '1px solid rgba(150,150,150,0.3)' }}>
        <Box sx={{ px: 3 }}>
          <Box sx={{
            backgroundImage: "url('/items/sunny.png')", width: '100%', height: '15vh', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '15px',
            my: 2,
            p: 2,
            boxSizing: 'border-box',
            position: 'relative'
          }}>
            <Stack>
              <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon="ion:time" color="black" />
                <Typography color="black">{new Date().toUTCString()}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon="carbon:location-filled" color="black" fontSize={20} />
                <Typography color="black">{address}</Typography>
              </Stack>
            </Stack>
            <Box sx={{ position: 'absolute', bottom: 5, right: 5 }}>

              <Typography color="white" variant="h2">27°</Typography>
            </Box>
          </Box>

          <Stack sx={{ pt: 5 }}>

          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <Chat />
      </Grid>
      {/* <Grid item xs={12} md={3} sx={{ borderLeft: '1px solid rgba(150,150,150,0.3)'}}>

        </Grid> */}

    </Grid>
    // </Container>
  )
}

export default Body