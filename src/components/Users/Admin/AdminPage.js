import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSiderbar';
var bcrypt = require('bcryptjs');
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const sessionValue=async (email)=>{

  const encryptedPassword = await bcrypt.hash(email, 10);
  // await console.log(encryptedPassword)
}

function AdminPage() {
  console.log(sessionStorage.getItem('user'))
    // const box = document.getElementById('sidebar');
    // console.log(box.clientWidth);
  // console.log(bcrypt.compare(sessionStorage.getItem('user'),"admin"))
  // sessionValue(sessionStorage.getItem('user'))
  return (
    <div>
      {/* <AdminDashboard /> */}
      <AdminSidebar/>
      
    </div>
  )
}

export default AdminPage