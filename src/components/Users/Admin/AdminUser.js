import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminJob.css'
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const AdminUser = () => {
    return (
            <>
            <div className="courses-nav">
                <Link to="/admin/user/" >Manage User</Link>
                <Link to="/admin/user/add">Add new User</Link>
            </div>
            <Outlet />
            </>
        
    )
}
 
export default AdminUser