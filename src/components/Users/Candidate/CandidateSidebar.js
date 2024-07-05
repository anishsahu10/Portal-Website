import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import { NavLink, Outlet } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Impo

const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const CandidateSidebar = () => {
    // const box = document.getElementById("sidebar");
    // console.log(box.clientWidth);
    const navigate = useNavigate();
   
    const submit = () => {
        confirmAlert({
          title: 'Logout?',
          message: 'Are you sure you want to logout.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                sessionStorage.clear()
                navigate('/candidateLogin')
              }
            },
            {
              label: 'No',
              onClick: () => {}
            }
          ]
        })
      };

  return (
    <>
        <Box sx={{ display: 'flex' }}>
            <Box
            component="sidebar"
            sx={{ flexGrow: 1, width: { sm: `calc(25%)` } }}
            >


                <div id='sidebar' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/candidate" className="text-decoration-none" style={{ color: 'inherit' }}>
                    Candidate
                    </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/candidate/" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="columns">My applications</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/candidate/job" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="table">Apply for job</CDBSidebarMenuItem>
                        </NavLink>
                        {/* <NavLink exact to="/candidate/recruitmentstats" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Recruitment Stats</CDBSidebarMenuItem>
                        </NavLink> */}
                        {/* <NavLink exact to="/manager/manageUsers" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">Manage Users</CDBSidebarMenuItem>
                        </NavLink> */}

                        <NavLink exact to="/candidate/profile"  activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="exclamation-circle">My Profile</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="logout"  onClick={submit}>Logout</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                        >
                        Sidebar Footer
                    </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
                </div>
            </Box>
            <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(60%)` } }}
            >
                <Outlet/>
            </Box>
        </Box>
    </>
  );
};

export default CandidateSidebar;