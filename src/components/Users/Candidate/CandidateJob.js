import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import { confirmAlert } from 'react-confirm-alert'; //
import { Height } from "@mui/icons-material";
import { height } from "@mui/system";
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const CandidateJob= ({ company, condition, type, details, onEdit, onDelete }) => {

  const [jobs, setJobs] = useState([]);

  const handleApply=(id)=>{

    const submit = () => {
      confirmAlert({
        title: 'Are you sure?',
        message: "Are you sure you want to apply for the job",
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              apply(id)
              // sessionStorage.clear()
              // navigate('/clientLogin')
            }
          },
          {
            label: 'No',
            onClick: () => {
            }
          }
        ]
      })
    };
    submit()
  }
  const apply=(id)=>{
    axios.post(`${BaseUrl}/addApplication`,{params:{ user:"candidate",unique_id:sessionStorage.getItem('userId'),job_id:id}})
    .then((res,err)  =>{

      console.log(res)
      if(res.status===200){
        window.location.reload() 
      }
      else{
        const error = () => {
          confirmAlert({
            title: 'Server Error! Please try again',
            message: err,
            buttons: [
              {
                label: 'ok',
                onClick: () => {
                  window.location.reload()
                }
              }
            ]
          })
        };
        error()
        
      }
    })
  }
  useEffect(() => {
    axios.get(`${BaseUrl}/candidate/getNewJobs`, {params:{
      user:"candidate",unique_id:sessionStorage.getItem('userId')
    }}).then(res => {
      setJobs(res.data);
    })
  }, [])

  return (
    <>
    <div className="dashboard d-flex">
    <div className="d-flex card-section">

      

    <div className="cards-container">
    <div className="card-bg w-100 border d-flex flex-column p-4" style={{ gridRow:"span 1",gridColumn:"span 3"}}>
    {jobs.map((c) => (
             <>
            <div id={c.unique_id} className="card-bg w-100 border p-4" style={{ display:"grid", gridTemplateColumns:"1fr 1fr " ,marginBottom:"20px"}}>
              <div>

              <p><strong>Company Name:</strong> {c.companyName}</p>
              <p><strong>Job Description:</strong> {c.jobDescription}</p>
              <p><strong>Job Location:</strong> {c.jobLocation}</p>
              <p><strong>Job Type:</strong> {c.jobType}</p>
              </div>
              <div  style={{ display: 'flex', justifyContent: 'flex-end', alignItems:"center" }}>
                <button className="btn btn-primary" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px', height:'25%'}} onClick={()=>handleApply(c)} >Apply</button>
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


export default CandidateJob