import React from 'react'
import RecruiterSidebar from './RecruiterSidebar';
// import Sidebar from './siderbar';
import { Outlet } from 'react-router-dom';
// import { CImage } from '@coreui/react'
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"

function RecruiterPage() {
    // const box = document.getElementById('sidebar');
    // console.log(box.clientWidth);

  return (
    <div>
      {/* <AdminDashboard /> */}
      <RecruiterSidebar/>
      {/* <Outlet */}
      {/* <CImage fluid src="/images/react.jpg" /> */}
    </div>
  )
}

export default RecruiterPage