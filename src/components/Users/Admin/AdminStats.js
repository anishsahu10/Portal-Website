import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSiderbar';
import axios from 'axios';
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
// import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import LinearProgress from '@mui/material/LinearProgress';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

// const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"

var bcrypt = require('bcryptjs');
const BaseUrl = process.env.BaseUrl || "http://127.0.0.1:3000"
const sessionValue = async (email) => {

  const encryptedPassword = await bcrypt.hash(email, 10);
  // await console.log(encryptedPassword)
}



function AdminStats() {

  const [companyStats, setCompanyStats] = useState([])
  const [managerStats, setManagerStats] = useState([])
  useEffect(() => {

    axios.get(`${BaseUrl}/admin/stats`, {
      params: {
        user: 'admin',
        userId: sessionStorage.getItem("userId")
      }
    }).then(res => {
      console.log(res.data)
      setCompanyStats(res.data.company_stats)
      setManagerStats(res.data.manager_stats)
      console.log(companyStats)
    })
  }, [])


  console.log(sessionStorage.getItem('user'))

  const percentage = 66;
  const value = 0.66;



  // const box = document.getElementById('sidebar');
  // console.log(box.clientWidth);
  // console.log(bcrypt.compare(sessionStorage.getItem('user'),"admin"))
  // sessionValue(sessionStorage.getItem('user'))
  return (
    <>
      <div>
        {console.log(companyStats)}
        <div className="graph" style={{}}>
          <h2>Overall Recruitment Stats</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>

            <BarChart width={730} height={250} data={companyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="recruited" fill="#8884d8" />
              <Bar dataKey="number_open_positions" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>

        <div className='card' >
          <h2>Manager Stats</h2>
          <div className="card-header" style={{}}>
              {managerStats === [] ? "" :
                managerStats.map((c) => {
                  var progress=c.recuited*100.0/c.open_positions
                  return (
                    <>
                    <div id={c.unique_id} onClick={() => console.log(c.unique_id)} style={{ cursor: "pointer", marginBottom: "20px", justifyContent: "center" }}>
                      <div  style={{ backgroundColor: "lightgrey", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", marginBottom: "10px" }}>
                        <p><strong>Name:</strong> {c.username} </p>
                        <p><strong>Email ID:</strong> {c.email}</p>
                        <p><strong>User ID:</strong> {c.unique_id}</p>
                        <p><strong>Position:</strong> {c.user_position}</p>
                        <p><strong>Alloted Location:</strong> {c.pincode},{c.city},{c.state},{c.zone}</p>
                        <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>

                          <div className="progress" style={{ height: "2vh", display: "flex", width: "20%", textAlign: "center", backgroundColor: "black" }}>
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} style={{ width:`${progress}%` , backgroundColor: "green" }}>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })


              }
          </div>
        </div>
      </div>





    </>
  );
}

export default AdminStats