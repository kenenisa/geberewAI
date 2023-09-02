import { ThemeProvider, createTheme } from '@mui/material/styles';
import Body from './Components/Body/Body';


function App() {
  const theme = createTheme({
    palette: {
      mode:'dark',
      primary: {
        main: "#45DF7D",
      },
    },
  });
  return (
    <>
     <ThemeProvider theme={theme}>
        <Body/>
     </ThemeProvider> 
    </>
  )
}

export default App
