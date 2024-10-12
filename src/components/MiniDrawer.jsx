// @ts-nocheck
import * as React from 'react';
import { createTheme, styled, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from "./TopBar"
import SideBar from './SideBar';
import Chatbot from '../pages/chatbot/Chatbot';
import { green, red } from '@mui/material/colors';

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
      main: '#2b2a2a',       // Dark gray
      light: '#757ce8',       // Light blue
      dark: '#000000',        // Darker shade (if needed)
      contrastText: '#fff',   // White text on primary color
    },
    secondary: {
      main: '#171717',        // Very dark gray (almost black)
      light: '#424242',       // Light gray
      dark: '#000000',        // Darker shade for secondary
      contrastText: '#ffffff' // White text on secondary color
    },
    background: {
      default: '#f0f0f0',     // Default background color
      paper: '#ffffff',       // Paper background color
    },
    text: {
      primary: '#000000',     // Default text color
      secondary: '#757575',   // Secondary text color
    },
  },
});
  
export default function MiniDrawer() {
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

    <Box sx={{ display: 'flex' }}>
       <CssBaseline />

      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />

      <SideBar open={open} handleDrawerClose={handleDrawerClose} theme={theme}/>


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          example eaaskdla;sdfjk;;jklas
        </Typography>

      </Box>
    </Box>
    
    </ThemeProvider>
  );
}
