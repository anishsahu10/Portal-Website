import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminJob.css'
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const AdminJob = () => {
    return (
            <div >

            <div className="courses-nav">
                <Link to="/admin/jobs/" >Open Hirings</Link>
                {/* <Link to="/admin/jobs/closedHirings" >Closed Hirings</Link> */}
                <Link to="/admin/jobs/addJob">Create new Job</Link>
            </div>
            <div style={{height:'35%'}}>

            <Outlet />

            </div>
            </div>
        
        
    )
}
 
export default AdminJob