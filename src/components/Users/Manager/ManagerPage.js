import React from 'react'
import ManagerSidebar from './ManagerSidebar';
// import Sidebar from './siderbar';
import { Outlet } from 'react-router-dom';
// import { CImage } from '@coreui/react'
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"

function ManagerPage() {
    // const box = document.getElementById('sidebar');
    // console.log(box.clientWidth);

  return (
    <div>
      {/* <AdminDashboard /> */}
      <ManagerSidebar/>
      {/* <Outlet */}
      {/* <CImage fluid src="/images/react.jpg" /> */}
    </div>
  )
}

export default ManagerPage