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
  import './AdminManageUsers.css'
//   import { Dashboard } from './Dashboard';
  import 'react-confirm-alert/src/react-confirm-alert.css' 
  import { confirmAlert } from 'react-confirm-alert'; //
  let applicant=[]
  const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
  const AdminApplicant= () => {
    
    const queryParameters = new URLSearchParams(window.location.search)
    var job_id=queryParameters.get('1')
    var recruiter_id=queryParameters.get('2')
    console.log(job_id,recruiter_id)
    
//   const handleItemChange = (e)=>{
//     ssetSelectedOption(e.target.value)
//     console.log(e.target.value)
    
//   }

  const [position, setPosition] = useState('example_user');
  const [jobLocation, setJobLocation] = useState('example_user');
  const [users, setUsers] = useState([]);
  // const [job, setJob] = useState();
  const [editId,setEditId] = useState(-1);
  
  // console.log(sessionStorage);

  
  
  const handleReject=(id)=>{
      const reject = () => {
          confirmAlert({
              title: 'Reject',
              message:"Are you sure you want to reject? " ,
              buttons: [
                  {
                      label: 'YEs',
                      onClick: () => {
                          axios.post(`${BaseUrl}/applicants`, {params:{
                            user:"recruiter",unique_id:sessionStorage.getItem('userId'),_id:id['0']._id,status:"reject"
                          }}).then(res => {
                              console.log(res.data)
                              // setUsers(res.data)
                              applicant.push(res.data)
                          // console.log(applicant)
                          
                          // console.log("Hello",applicant)
                      })
                          window.location.reload()
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
    reject()
    
    
}
const handleRecruit=(id)=>{
    
    const recruit = () => {
        confirmAlert({
            title: 'Recruit',
            message: "Are you sure you want to recruit ?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.post(`${BaseUrl}/applicants`, {params:{
                            user:"recruiter",unique_id:sessionStorage.getItem('userId'),_id:id['0']._id,status:"recuit"
                          }}).then(res => {
                              console.log(res.data)
                              // setUsers(res.data)
                              applicant.push(res.data)
                          // console.log(applicant)
                          
                          // console.log("Hello",applicant)
                      })
                        
                        // window.location.reload()
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
    recruit()
  }

//     // var text=
//     // console.log(text+"1");
//     // setCompanyName(id.companyName) 
//     // console.log("company name : " + companyName)
//     // text=
//     // console.log(text);
//     // id.jobLocation="location"
//     setPosition(id.user_position);
//     setJobLocation(id.user_location);
//     // setJobType(id.jobType);


//     // console.log(job);
//     setEditId(id.unique_id);

//   }

//   const handleDelete=(id)=>{
    //     // axios.delete(`${BaseUrl}/applications/:`,{"job_id":id})
    //     // .then(res=>{
        //     //   window.location.reload()
        //     // }).catch(err=>{
            //     //   console.log(err)
            //     // })
            //   }
            
            //   const handleUpdate=(id)=>{
                //     // // console.log("jello "+ companyName);
                //     // var send={ 'unique_id':id.unique_id,
                //     //   'user_position':position,
                //     // 'user_location':jobLocation
                
                //     // };
                //     // console.log(send)
                //     // axios.put(`${BaseUrl}/admin/user`,{send})
                //     // .then(res=>{
                    //     //   console.log(res);
                    //     //   window.location.reload();
                    //     //   setEditId(-1)
                    //     // }).catch(err=>{
                        //     //   console.log(err)
                        //     // })  

//   }

  useEffect(() => {
    applicant=[]
      axios.get(`${BaseUrl}/applicants`, {params:{
          user:"recruiter",unique_id:sessionStorage.getItem('userId'),job_id:job_id
        }}).then(res => {
            console.log(res.data)
            // setUsers(res.data)
            applicant.push(res.data)
        // console.log(applicant)
        
        // console.log("Hello",applicant)
    })
}, [])

return (
    <>        
        
          
        <div className="dashboard d-flex">
        <div className="d-flex card-section">
        <div className="cards-container">
        <div className='mb-2'>
        <label style={{paddingRight:'5px'}} htmlFor="item">Search By User Type</label>
                     <select style={{borderWidth:'1px', borderColor:'black'}} id="item"  > 
                        <option value="All">All</option>
                        <option value="Client">Client</option>
                        <option value="Manager">Manager</option>
                        <option value="Recruiter">Recruiter</option>
                        <option value="Candidate">Candidate</option>
                    </select>

                    
                    </div>
        <div className="card-bg w-100 border d-flex flex-column p-4" style={{height:"80vh",gridRow:"span 1",gridColumn:"span 3", overflowY:"scroll"}}>
        {applicant===[]?applicant.map((c) => {
            return(
            <>
            <div id={c.status} className="card-bg w-100 border d-flex flex-column p-4" style={{gridRow:"span 1",gridColumn:"span 3"}} >
              <p><strong>Name:</strong> {""} </p>
               <p><strong>Email ID:</strong> {c['0'].status}</p> 
              <p><strong>User ID:</strong> {c.unique_id}</p>
              <p><strong>Postion:</strong> {c.user_position}</p>
              <p><strong>Alloted Location:</strong> {c.user_location}</p>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                 <div className="btn btn-success" style={{  paddingRight:"3px",paddingLeft:"3px", marginRight: '10px' }} onClick={()=>handleRecruit(c)} >Recruit</div>
                <div className="btn btn-danger" style={{ paddingRight:"3px",paddingLeft:"3px", }}  onClick={()=>handleReject(c)} >Reject</div> 
              </div>
            </div>
          </>   
            
          
          )}): "No applicants" }
     </div>
    </div>
    </div>
    </div>
    
</>
  );
};



export default AdminApplicant