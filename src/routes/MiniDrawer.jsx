// @ts-nocheck
import * as React from 'react';
import { createTheme, styled, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from "../components/TopBar.jsx"
import SideBar from '../components/SideBar.jsx';
import Chatbot from '../pages/chatbot/Chatbot.jsx';
import { green, red } from '@mui/material/colors';
import { Outlet, useLocation } from 'react-router-dom';

const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


//changeTHEEEMEMEMEMEM

const theme = createTheme({
  palette: {
    primary: {
      main: '#171717',       // Dark gray
      light: '#757ce8',       // Light blue
      dark: '#000000',        // Darker shade (if needed)
      contrastText: '#fff',   // White text on primary color
    },
    secondary: {
      main: '#85262a',        // Very dark gray (almost black)
      light: '#424242',       // Light gray
      dark: '#000000',        // Darker shade for secondary
      contrastText: '#ffffff' // White text on secondary color
    },
    background: {
      default: '#444',     // Default background color
      paper: '#2C2C2E',       // Paper background color
    },
    text: {
      primary: '#fff',     // Default text color
      secondary: '#757575',   // Secondary text color
    },
  },
});
  
export default function MiniDrawer({setIsLogin}) {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex', overflow:'hidden'}}>
       <CssBaseline />

      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />

      <SideBar open={open} handleDrawerClose={handleDrawerClose}  setIsLogin={setIsLogin} theme={theme}/>


      <Box component="main" sx={{ flexGrow: 1, p: 0.07 }} >
         <DrawerHeader />
        {/*<Typography sx={{ marginBottom: 2 }}>
          example eaaskdla;sdfjk;;jklas
        </Typography> */}
        <div className="outletPage">
                <Outlet/>
  
        </div>  
      </Box>
    </Box>
    
    </ThemeProvider>
  );
}
