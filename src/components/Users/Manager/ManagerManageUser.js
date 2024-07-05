import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink } from "cdbreact";
import './ManagerManageUsers.css'
// import { Dashboard } from './Dashboard';
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const ManagerManageUsers= () => {

  const [sname,ssetName]= useState()
  const [slocation,ssetLocation]= useState(' ')
  const [suserType, ssetSelectedOption] = useState("All");

  const handleItemChange = (e)=>{
    ssetSelectedOption(e.target.value)
    console.log(e.target.value)
    
  }

  const [postion, setPosition] = useState('example_user');
  const [jobLocation, setJobLocation] = useState('example_user');
  const [users, setUsers] = useState([]);
  // const [job, setJob] = useState();
  const [editId,setEditId] = useState(-1);
  
  // console.log(sessionStorage);



  const handleEdit=(id)=>{

    // var text=
    // console.log(text+"1");
    // setCompanyName(id.companyName) 
    // console.log("company name : " + companyName)
    // text=
    // console.log(text);
    // id.jobLocation="location"
    setPosition(id.user_postion);
    setJobLocation(id.user_location);
    // setJobType(id.jobType);
    

    // console.log(job);
    setEditId(id.unique_id);

  }

  const handleDelete=(id)=>{
    axios.delete(`${BaseUrl}/admin/user`,{"unique_id":id})
    .then(res=>{
      window.location.reload()
    }).catch(err=>{
      console.log(err)
    })
  }

  const handleUpdate=(id)=>{
    // console.log("jello "+ companyName);
    var send={ 'unique_id':id.unique_id,
      'user_position':postion,
    'user_location':jobLocation
      
    };
    console.log(send)
    axios.put(`${BaseUrl}/admin/user`,{send})
    .then(res=>{
      console.log(res);
      window.location.reload();
      setEditId(-1)
    }).catch(err=>{
      console.log(err)
    })  

  }

  useEffect(() => {
    console.log("request sent")
    axios.get(`${BaseUrl}/manager/user`,{
      params: {
        user: 'manager',
        userId: sessionStorage.getItem("userId")
      }
      

      }).then(res => {
        console.log(res.data);
      setUsers(res.data);
      console.log("users")
      console.log(users)
    })
  }, [])

  return (
    <>
    <div className="dashboard d-flex">
    <div className="d-flex card-section">
    <div className="cards-container">
      <div className='mb-2'>
    <label style={{paddingRight:'5px'}} htmlFor="item">Search By User Type</label>
                  <select style={{borderWidth:'1px', borderColor:'black'}} id="item" value={suserType} onChange={handleItemChange}>
                    <option value="All">All</option>
                    <option value="Client">Client</option>
                    <option value="Manager">Manager</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Candidate">Candidate</option>
                  </select>

                  
                </div>
    <div className="card-bg w-100 border d-flex flex-column p-4" style={{height:"25%",gridRow:"span 1",gridColumn:"span 3", overflowY:"scroll"}}>
    <>
    {users.map((c) => (
      c.unique_id === editId?
      <>
            <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{marginBottom:"20px"}}>
              <p><strong>Name:</strong> </p>
              {/* <p><strong>Email ID:</strong> {c.email}</p> */}
              <p><strong>User ID:</strong> {c.unique_id}</p>
              <p><strong>Postion:</strong> <input style={{background:"lightgrey"}} type="text" value={postion} onChange={e=>setPosition(e.target.value)}/></p>
              <p><strong>Alloted Location:</strong><input style={{background:"lightgrey"}} value={jobLocation} type="text"  onChange={e=>setJobLocation(e.target.value)}/></p>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="btn btn-success" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>{handleUpdate(c)}} >Update</div>
                
              </div>
              
            </div>
            </>: <>
            <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{marginBottom:"20px"}}>
              <p><strong>Name:</strong> </p>
              {/* <p><strong>Email ID:</strong> {c.email}</p> */}
              <p><strong>User ID:</strong> {c.unique_id}</p>
              <p><strong>Postion:</strong> {c.user_position}</p>
              <p><strong>Alloted Location:</strong> {c.user_location}</p>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="btn btn-primary" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>handleEdit(c)} >Edit</div>
                <div className="btn btn-danger" style={{ paddingRight:"3px",paddingLeft:"3px", }} onClick={()=>handleDelete(c.unique_id)} >Remove</div>
              </div>
            </div>
          </>        
          
          ))}
          </>
     </div>
    </div>
    </div>
    </div>
    
</>
  );
};



export default ManagerManageUsers