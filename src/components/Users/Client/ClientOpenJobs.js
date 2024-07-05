import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";
const ClientEditJobs= ({ company, condition, type, details, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const handleApplication=(id)=>{
    const params= {1:id.unique_id, 2:id.recruiter_id}
    navigate({
        pathname:'/client/applicant', 
        search:`?${createSearchParams(params)}`})
}
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
  useEffect(() => {
    axios.get(`${BaseUrl}/client/getJobs`, {params:{
      user:"client",unique_id:sessionStorage.getItem('userId')
    }}).then(res => {
      setJobs(res.data);
      console.log(res.data)
    })
  }, [])

  return (
    <>
    <div className="dashboard d-flex">
    <div className="d-flex card-section">

      

    <div className="cards-container">
    <div className="card-bg w-100 border d-flex flex-column p-4" style={{gridRow:"span 1",gridColumn:"span 3"}}>
    {jobs.map((c) => (
             <>
            <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{marginBottom:"20px"}}>
              <p><strong>Company Name:</strong> {c.companyName}</p>
              <p><strong>Job Description:</strong> {c.jobDescription}</p>
              <p><strong>Job Location:</strong> {c.jobLocation}</p>
              <p><strong>Job Type:</strong> {c.jobType}</p>
              <p><strong>Recruited:</strong> {c.filled_positions}</p>
              <p><strong>Open positions:</strong> {c.open_positions-c.filled_positions}</p>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="btn btn-primary" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>handleApplication(c)} >View Applications</div>
                {/* <div className="btn btn-primary" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>handleEdit(c)} >Edit</div> */}
                {/* <div className="btn btn-danger" style={{ paddingRight:"3px",paddingLeft:"3px", }} onClick={()=>handleDelete(c.unique_id)} >Delete</div> */}
              </div>
            </div>
          </>        

    ))}
     </div>
    </div>
    </div>
    </div>
    </>
  );
};


export default ClientEditJobs