import {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import $ from 'jquery'; 
import React from 'react';
import './AdminEditJobs.css'
import { createSearchParams, useNavigate } from "react-router-dom";

import axios from "axios";
const BaseUrl= process.env.BaseUrl ||  "https://kvhrr.onrender.com"

const AdminEditJobs= () => {

  const [companyName,setCompanyName]= useState()
  const [number,setNumber]= useState()
  const [jobDescription,setJobDescription]= useState()
  const [jobType,setJobType]= useState()
  const [jobLocation,setJobLocation]= useState()
  const [zone,setZone]= useState()
  const [state,setState]= useState()
  const [city,setCity]= useState()
  const [pincode,setPincode]= useState()
  const [jobs, setJobs] = useState([]);
  // const [job, setJob] = useState();
  const [editId,setEditId] = useState(-1);
  
  // console.log(sessionStorage);



  const handleEdit=(id)=>{

    // var text=
    // console.log(text+"1");
    setCompanyName(id.companyName) 
    // console.log("company name : " + companyName)
    // text=
    // console.log(text);
    setJobDescription(id.jobDescription);
    // setJobLocation(id.jobLocation);
    setZone(id.zone)
    setCity(id.city)
    setState(id.state)
    setPincode(id.pincode)
    setJobType(id.jobType);
    setNumber(id.open_positions);
    

    // console.log(job);
    setEditId(id.unique_id);

  }

  const handleDelete=(id)=>{
    axios.delete(`${BaseUrl}/admin/Jobs`,{params:{"unique_id":id}})
    .then(res=>{
      console.log(res)
      window.location.reload()
    }).catch(err=>{
      console.log(err)
    })
  }

  const handleUpdate=(id)=>{
    // console.log("jello "+ companyName);
    var send={
      "companyName":companyName,
      "jobDescription":jobDescription,
      "jobType":jobType,
    "jobLocation":jobLocation,
    "unique_id":id.unique_id
    };
    console.log(send)
    axios.put(`${BaseUrl}/admin/Jobs`,{send})
    .then(res=>{
      console.log(res);
      window.location.reload();
      setEditId(-1)
    }).catch(err=>{
      console.log(err)
    })  

  }
  const navigate = useNavigate();
  // const [jobs, setJobs] = useState([]);
  const handleApplication=(id)=>{
    const params= {1:id.unique_id, 2:id.recruiter_id}
    navigate({
        pathname:'/admin/applicant', 
        search:`?${createSearchParams(params)}`})
}


  useEffect(() => {
    axios.get(`${BaseUrl}/admin/Jobs`,{
      params: {
        user: 'admin',
        userId: sessionStorage.getItem("userId")
      }
      }).then(res => {
      setJobs(res.data);
    })
  }, [])

  return (
    <>
    <div className="dashboard d-flex">
    <div className="d-flex card-section">

      

    <div className="cards-container">
    <div className="card-bg w-100 border d-flex flex-column p-4" style={{gridRow:"span 1",gridColumn:"span 3"}}>
    {jobs.map((c) => (
            c.unique_id === editId?
            <>
            <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{marginBottom:"20px"}}>
              <p><strong>Company Name:</strong><input id="company"style={{background:"lightgrey"}} type="text" value={companyName} onChange={e=>{setCompanyName(e.target.value)}}/></p>
              <p><strong>Job Description:</strong> <input style={{background:"lightgrey"}} type="text" value={jobDescription} onChange={e=>{setJobDescription(e.target.value)}}/></p>
              <p><strong>Job Location:</strong>
               <input style={{background:"lightgrey"}} type="text" value={zone} onChange={e=>setZone(e.target.value)}/>
              <input style={{background:"lightgrey"}} type="text" value={state} onChange={e=>setState(e.target.value)}/>
              <input style={{background:"lightgrey"}} type="text" value={city} onChange={e=>setCity(e.target.value)}/>
              <input style={{background:"lightgrey"}} type="text" value={pincode} onChange={e=>setPincode(e.target.value)}/>
              </p>
              <p><strong>Job Type:</strong> <input style={{background:"lightgrey"}} type="text" value={jobType} onChange={e=>setJobType(e.target.value)}/></p>
              <p><strong>Recruited:</strong> {c.filled_positions}</p>
              <p><strong>Total positions:</strong> <input style={{background:"lightgrey"}} type="text" value={number} onChange={e=>setNumber(e.target.value)}/></p>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="btn btn-success" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>{handleUpdate(c)}} >Update</div>
                
              </div>
              
            </div>
            </>: <>
            <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{marginBottom:"20px"}}>
              <p><strong>Company Name:</strong> {c.companyName}</p>
              <p><strong>Job Description:</strong> {c.jobDescription}</p>
              <p><strong>Job Location:</strong> <span >{c.city}</span><span> {c.state} </span><span> {c.pincode}</span></p>
              <p><strong>Job Type:</strong> {c.jobType}</p>
              <p><strong>Recruited:</strong> {c.filled_positions}</p>
              <p><strong>Total positions:</strong> {c.open_positions}</p>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="btn btn-grey" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>handleApplication(c)} >View Applications</div>
                <div className="btn btn-primary" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>handleEdit(c)} >Edit</div>
                <div className="btn btn-danger" style={{ paddingRight:"3px",paddingLeft:"3px", }} onClick={()=>handleDelete(c.unique_id)} >Delete</div>
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


export default AdminEditJobs