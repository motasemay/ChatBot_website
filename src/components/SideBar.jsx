import React from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import { styled, Tooltip, Zoom } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@emotion/react';
import AssistantIcon from '@mui/icons-material/Assistant';
// @ts-ignore
import SideBarStyle from "./SideBar.module.css";

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,

  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const sidebarArray1 = [

  {
    "text": "Bilsan Chatbot",
    "icon": <AutoAwesomeOutlinedIcon />,
    "path": "/chatbot",
  },
  {
    "text": "Chat History",
    "icon": <HistoryToggleOffOutlinedIcon />,
    "path": "/chatHistory",
  },
  {
    "text": "Reports",
    "icon": <TextSnippetOutlinedIcon />,
    "path": "/Reports",
  },
]
const sidebarArray2 = [

  {
    "text": "Settings",
    "icon": <SettingsOutlinedIcon />,
    "path": "/settings",
  },
    {
    "text": "New Rigester",
    "icon": <ManageAccountsIcon />,
    "path": "/register",
  },
  {
    "text": "Log Out",
    "icon": <LogoutOutlinedIcon />,
    "path": "/logout",
  },

]


function SideBar({ open, handleDrawerClose, theme }) {
  const navigate = useNavigate();
  // const theme = useTheme();

  return (
    <Drawer className={SideBarStyle.sidebarContainer} variant="permanent" open={open} >
      <DrawerHeader  >
        <IconButton onClick={handleDrawerClose} sx={{ background: "#85262a" }} className={SideBarStyle.SidebarContainer}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton >
      </DrawerHeader>
      <Divider sx={{ backgroundColor: '#ffffff20' }} />
      <List >
        {sidebarArray1.map(item => (
          <ListItem key={item.path} disablePadding
            onClick={() => {
              navigate(item.path);
            }}
            sx={{
              display: 'block',
              marginBottom: '7px',
              transition: 'background-color 0.4s ease',
           
          
              backgroundColor:
              
             

                  item.text === "Bilsan Chatbot"&&location.pathname==='/' ? '#861e23 !important' : 
                  location.pathname === item.path ? '#861e23 !important' : null,


              borderRadius:
                location.pathname === item.path ? '12px' : null,

            }}
          >
            <Tooltip title={open? null: item.text} placement='right' arrow TransitionComponent={Zoom}   >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>

            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#ffffff20' }} />


      <List >
        {sidebarArray2.map(item => (
          <ListItem key={item.path} disablePadding

            onClick={() => {
              navigate(item.path);
            }}
            sx={{
              display: 'block',
              marginBottom: '7px',
              transition: 'background-color 0.4s ease',
              backgroundColor:
                location.pathname === item.path ? '#861e23 !important' : null,
              borderRadius:
                location.pathname === item.path ? '12px' : null,


            }}
          >

            <Tooltip title={open? null:item.text} placement='right' arrow TransitionComponent={Zoom}   >

              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>

            </Tooltip>

          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar