import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import Box from '@mui/material/Box';
import { NavLink, Outlet } from 'react-router-dom';
const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"
const RecruiterSidebar = () => {
    // const box = document.getElementById("sidebar");
    // console.log(box.clientWidth);

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
                                <a href="/recruiter" className="text-decoration-none" style={{ color: 'inherit' }}>
                                    Recruiter
                                </a>
                            </CDBSidebarHeader>

                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    <NavLink to="/recruiter/" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="columns">Active Jobs</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink to="/recruiter/jobcreation" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="table">Create new job</CDBSidebarMenuItem>
                                    </NavLink>
                                    {/* <NavLink exact to="/recruiter/recruitmentstats" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Recruitment Stats</CDBSidebarMenuItem>
                        </NavLink> */}
                                    <NavLink exact to="/recruiter/user" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="chart-line">Manage Users</CDBSidebarMenuItem>
                                    </NavLink>

                                    <NavLink exact to="/recruiter/profile" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="exclamation-circle">My Profile</CDBSidebarMenuItem>
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
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default RecruiterSidebar;