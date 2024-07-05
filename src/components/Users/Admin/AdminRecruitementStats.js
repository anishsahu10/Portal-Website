import React, { useState,useEffect } from "react";
import axios from "axios";
import Popup from 'reactjs-popup';
import $ from 'jquery'; 
// import React from 'react';
// import "./App.css";  
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
var stats=[]

const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const AdminRecruitmentStats = () => {
  const options = ["Company", "Manager", "Location", "Recruiter"];

  const [selectedOption, setSelectedOption] = useState("");
  const [showGraph, setShowGraph] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowGraph(true);
  };

  useEffect(() => {
    stats=[]
    axios.get(`${BaseUrl}/stats`,{
      params: {
        user: 'admin',
        userId: sessionStorage.getItem("userId")
      }
      }).then(res => {
        console.log(res.data)
      
    })
  }, [])


  return (
    <>
    <div className="dashboard d-flex">
    <div className="d-flex card-section">

      

    <div className="cards-container">
    <div className="card-bg w-100 border d-flex flex-column p-4" style={{gridRow:"span 1",gridColumn:"span 3"}}>
    {stats===[]? stats.map((c) => (
          <>
            <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{marginBottom:"20px"}}>
              <p><strong>Company Name:</strong> {c.companyName}</p>
              <p><strong>Recruited:</strong> {c.jobDescription}</p>
              <p><strong>Recruitment left:</strong> {c.jobLocation}</p>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="btn btn-primary" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} >Edit</div>
                {/* <div className="btn btn-danger" style={{ paddingRight:"3px",paddingLeft:"3px", }} onClick={()=>handleDelete(c.unique_id)} >Delete</div> */}
              </div>
            </div>
          </>
    )):
          <p>"No stats"</p>
    }


     </div>
    </div>
    </div>
    </div>
    </>
  );
};

//   return (
//     <div>
//       {/* <h1>My App</h1> */}
//       <div className="graph">
//         <h2>Recruitment Stats</h2>
//         <BarChart
//           width={500}
//           height={300}
//           data={companyData}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 80,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
//         </BarChart>
//       </div>
//       <Dropdown options={options} onSelect={handleOptionSelect} />
//       {showGraph && (
//         <div className="graph">
//           {selectedOption === "Company" && (
//             <div>
//               <h2>Company Stats</h2>
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={companyData}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 80,
//                   bottom: 5,
//                 }}
//                 barSize={20}
//               >
//                 <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
//               </BarChart>
//             </div>
//           )}
//           {selectedOption === "Manager" && (
//             <div>
//               <h2>Manager Stats</h2>
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={managerData}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 80,
//                   bottom: 5,
//                 }}
//                 barSize={20}
//               >
//                 <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
//               </BarChart>
//             </div>
//           )}
//           {selectedOption === "Location" && (
//             <div>
//               <h2>Location Stats</h2>
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={locationData}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 80,
//                   bottom: 5,
//                 }}
//                 barSize={20}
//               >
//                 <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
//               </BarChart>
//             </div>
//           )}
//           {selectedOption === "Recruiter" && (
//             <div>
//               <h2>Recruiter Stats</h2>
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={recruiterData}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 80,
//                   bottom: 5,
//                 }}
//                 barSize={20}
//               >
//                 <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
//               </BarChart>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
 
export default AdminRecruitmentStats