import React from 'react'
import ClientSidebar from './ClientSidebar';
// import Sidebar from './siderbar';
import { Outlet } from 'react-router-dom';
// import { CImage } from '@coreui/react'

const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
function ClientPage() {
    // const box = document.getElementById('sidebar');
    // console.log(box.clientWidth);

  return (
    <div>
      {/* <AdminDashboard /> */}
      <ClientSidebar/>
      {/* <Outlet */}
      {/* <CImage fluid src="/images/react.jpg" /> */}
    </div>
  )
}

export default ClientPage