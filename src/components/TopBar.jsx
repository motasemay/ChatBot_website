import { Box, IconButton, Stack, styled, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import topBarStyle from "./TopBar.module.css";
import SearchBar from './SearchBar';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));


function TopBar({ open, handleDrawerOpen }) {

    return (
        <AppBar position="fixed" open={open} className={topBarStyle.topBarContainer}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                        {
                            marginRight: 5,
                        },
                        open && { display: 'none' },
                    ]}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Bilsan ChatBot
                </Typography>
                <SearchBar />

                <Box flexGrow={1} />

                <Stack direction={'row'}>

                    <IconButton>
                        <DarkModeOutlinedIcon  fontSize='large'/>
                    </IconButton>
                    <IconButton>
                        <LightModeOutlinedIcon fontSize='large'/>
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar