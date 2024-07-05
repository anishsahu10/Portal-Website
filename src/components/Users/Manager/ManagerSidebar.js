import React, { useState, useEffect } from 'react';
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

import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"
const ManagerSidebar = () => {

    

  var w = window.innerWidth;
  var h = window.innerHeight;
  var padd = w / 10;
  var text = [{ "val": 2, "status": "unread" }, { "val": 3, "status": "read" }]
  const [notification, setNotification] = useState(0)

  // useEffect(() => {
  //   axios.get(`${BaseUrl}/search`, {
  //     params: {
  //       user: 'admin',
  //       userId: sessionStorage.getItem("userId")
  //     }
  //   }).then(res => {
  //     text = []
  //     console.log(res.data)
  //     // console.log(JSONDATA)
  //     text = res.data

  //   })
  // }, [])

  const handleNotification = (e) => {

    if (notification === 0) {
      setNotification(1)
      // console.log("notification")
      // console.log("notification", text)
    }
    else {
      setNotification(0)
      text.map((c)=>{

      })
      // console.log("hide notification")
    }

  }
  const datacount = 1
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
            navigate('/headLogin')
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    })
  };
    // const box = document.getElementById("sidebar");
    // console.log(box.clientWidth);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box
                    component="sidebar"
                    sx={{ flexGrow: 1, width: { sm: `calc(%)` } }}
                >


                    <div id='sidebar' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                        <CDBSidebar textColor="#fff" backgroundColor="#333">
                            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                                <a href="/admin" className="text-decoration-none" style={{ color: 'inherit' }}>
                                    Admin
                                </a>
                            </CDBSidebarHeader>

                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    <NavLink to="/manager/" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="columns">Active Jobs</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink to="/manager/jobcreation" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="table">Create new job</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/manager/recruitmentstats" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="user">Recruitment Stats</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to="/manager/user" activeClassName="activeClicked">
                                        <CDBSidebarMenuItem icon="chart-line">Manage Users</CDBSidebarMenuItem>
                                    </NavLink>

                                    <NavLink exact to="/manager/profile" activeClassName="activeClicked">
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
                    sx={{ p: 2, width: { sm: `calc(90%)` } }}
                >
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", maxHeight: "5vh", overflowBlock: "hidden" }}>

                        {/* <Searchbar /> */}
                        {(datacount > 0) ?
                            <span class="fa-stack fa-1x" data-count={datacount} onClick={handleNotification}>
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-bell fa-stack-1x fa-inverse"></i>
                                {notification === 1 ?
                                    <div style={{ display: "flex", flexDirection: "column", zIndex: "2000", marginTop: "2em", width: padd * 2, marginLeft: -padd * 2 + padd / 10, border: "1px solid blue", boxSizing: "border-box" }}>
                                        {text === [] ? "" :
                                            text.map((c) => {
                                                console.log("should show")
                                                if (c.status === "unread") {
                                                    return (
                                                        <div style={{ background: "lightgrey" }}> {c.val}</div>
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <div> {c.val}</div>
                                                    );
                                                }

                                            })}
                                    </div> : ""}

                            </span>
                            : <span class="fa-stack fa-1x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-bell fa-stack-1x fa-inverse"></i>
                            </span>
                        }
                    </div>
                    <Outlet />
                </Box>
            </Box>
        </>

    );
};

export default ManagerSidebar;