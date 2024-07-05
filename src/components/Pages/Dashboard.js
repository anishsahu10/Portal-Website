import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import Home from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavScroll';
import { useState } from 'react';
import JobCreation from './jobcreation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientLogin from '../LoginForms/ClientLogin';
import { Link, Outlet } from 'react-router-dom'
// import Information from '../Information';
// import Homepage from '../Homepage';
// import HeadLogin from '../LoginForms/HeadLogin';
// import ManagementLogin from '../LoginForms/ManagementLogin';
// import RecruiterLogin from '../LoginForms/RecruiterLogin';
// import ClientLogin from '../LoginForms/ClientLogin';
// import CandidateLogin from '../LoginForms/CandidateLogin';
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const drawerWidth = 200;
var component2 = <ClientLogin/>
var component = <JobCreation/>
function ResponsiveDrawer(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const Navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <NavBar/> */}
      <Toolbar />
      <Divider />
      <List>

        <ListItem  disablePadding >
            <ListItemButton>
              {/* <ListItemIcon>
                  <Home />
              </ListItemIcon> */}
              <ListItemText ><Link to ="/admin/">Active Job Openings</Link></ListItemText>
            </ListItemButton>
        </ListItem>

        <ListItem  disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                  <Home />
              </ListItemIcon> */}
              <ListItemText><Link to ="/admin/jobcreation">Create new job</Link></ListItemText>
            </ListItemButton>
        </ListItem>

        <ListItem  disablePadding >
            <ListItemButton>
              {/* <ListItemIcon>
                  <Home />
              </ListItemIcon> */}
              <ListItemText><Link to ="/admin/recruitmentstats">Recruitment Stats</Link></ListItemText>
            </ListItemButton>
        </ListItem>

        <ListItem  disablePadding >
            <ListItemButton>
              {/* <ListItemIcon>
                  <Home />
              </ListItemIcon> */}
              <ListItemText><Link to ="/admin/jobcreation">Create new job</Link></ListItemText>
            </ListItemButton>
        </ListItem>

        <ListItem  disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                  <Home />
              </ListItemIcon> */}
              <ListItemText>Client</ListItemText>
            </ListItemButton>
        </ListItem>

        
        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [visible, setVisible] = useState(false);

function makeVisible() {
  if(visible === false){
    setVisible(true)
  } else setVisible(false);
}


// const buttonString = "Show"

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
          <div className='container' disablePadding >
            <div className='row' >
              <div className='col-1'>

                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
              </IconButton>
              </div>
              <div className='col-9'>

                <NavBar/>
              </div>

            </div>
            </div>
          
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Outlet/>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
