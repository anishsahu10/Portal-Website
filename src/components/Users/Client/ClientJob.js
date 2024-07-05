import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './ClientJob.css'
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const ClientJob = () => {
    return (
            <div >

            <div className="courses-nav">
                <Link to="/client/jobs/" >Active Jobs</Link>
                <Link to="/client/jobs/closed">Closed Jobs</Link>
            </div>
            <div style={{height:'35%'}}>

            <Outlet />

            </div>
            </div>
        
        
    )
}
 
export default ClientJob