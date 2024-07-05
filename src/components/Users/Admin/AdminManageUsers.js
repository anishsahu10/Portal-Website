import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink
} from "cdbreact";
import './AdminManageUsers.css'
import { Dashboard } from './Dashboard';
const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"
const AdminManageUsers = () => {

  const [sname, ssetName] = useState()
  const [slocation, ssetLocation] = useState(' ')
  const [suserType, ssetSelectedOption] = useState("All");
  const [zone, setZone] = useState()
  const [state, setState] = useState()
  const [city, setCity] = useState()
  const [pincode, setPincode] = useState()

  const handleItemChange = (e) => {
    ssetSelectedOption(e.target.value)
    console.log(e.target.value)

  }

  const [position, setPosition] = useState('example_user');
  const [jobLocation, setJobLocation] = useState('example_user');
  const [users, setUsers] = useState([]);
  // const [job, setJob] = useState();
  const [editId, setEditId] = useState(-1);

  // console.log(sessionStorage);



  const handleEdit = (id) => {

    // var text=
    // console.log(text+"1");
    // setCompanyName(id.companyName) 
    // console.log("company name : " + companyName)
    // text=
    // console.log(text);
    // id.jobLocation="location"
    setPosition(id.user_position);
    setJobLocation(id.user_location);
    setCity(id.city)
    setState(id.state)
    setZone(id.zone)
    setPincode(id.pincode)
    // setJobType(id.jobType);


    // console.log(job);
    setEditId(id.unique_id);

  }

  const handleDelete = (id) => {
    axios.delete(`${BaseUrl}/admin/user`, { params: { "unique_id": id } })
      .then(res => {
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
  }

  const handleUpdate = (id) => {
    // console.log("jello "+ companyName);
    var send = {
      'unique_id': id.unique_id,
      'user_position': position,
      'zone': zone,
      'state': state,
      'city': city,
      'pincode': pincode,

    };
    console.log(send)
    axios.put(`${BaseUrl}/admin/user`, { send })
      .then(res => {
        console.log(res);
        window.location.reload();
        setEditId(-1)
      }).catch(err => {
        console.log(err)
      })

  }

  useEffect(() => {
    console.log("request sent")
    axios.get(`${BaseUrl}/admin/user`, {
      params: {
        user: 'admin',
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
              <label style={{ paddingRight: '5px' }} htmlFor="item">Search By User Type</label>
              <select style={{ borderWidth: '1px', borderColor: 'black' }} id="item" value={suserType} onChange={handleItemChange}>
                <option value="All">All</option>
                <option value="client">Client</option>
                <option value="manager">Manager</option>
                <option value="recruiter">Recruiter</option>
                <option value="candidate">Candidate</option>
              </select>


            </div>
            <div className="card-bg border d-flex flex-column p-4" style={{ height: "70vh", gridRow: "span 1", gridColumn: "span 3", overflowY: "scroll" }}>
              <>
                {users.filter((val) => {
                  if (suserType === "All") {
                    return users;
                  } else if (val.user_position === suserType) {
                    return val;
                  }

                }).map((c) => (
                  c.unique_id === editId ?
                    <>
                      <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{ marginBottom: "20px" }}>
                        <p><strong>Name:</strong>{c.username} </p>
                        {/* <p><strong>Email ID:</strong> {c.email}</p> */}
                        <p><strong>User ID:</strong> {c.unique_id}</p>
                        <p><strong>Position:</strong> <input style={{ background: "lightgrey" }} type="text" value={position} onChange={e => setPosition(e.target.value)} /></p>
                        <p><strong>Alloted Location:</strong><input style={{ background: "lightgrey" }} type="text" value={zone} onChange={e => setZone(e.target.value)} />
                          <input style={{ background: "lightgrey" }} type="text" value={state} onChange={e => setState(e.target.value)} />
                          <input style={{ background: "lightgrey" }} type="text" value={city} onChange={e => setCity(e.target.value)} />
                          <input style={{ background: "lightgrey" }} type="text" value={pincode} onChange={e => setPincode(e.target.value)} />
                        </p>
                        <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <div className="btn btn-success" style={{ paddingRight: "3px", paddingLeft: "3px", marginRight: '10px' }} onClick={() => { handleUpdate(c) }} >Update</div>

                        </div>

                      </div>
                    </> : <>
                      <div id={c.unique_id} className="card-bg w-100 border d-flex flex-column p-4" style={{ marginBottom: "20px" }}>
                        <p><strong>Name:</strong> {c.username} </p>
                        {/* <p><strong>Email ID:</strong> {c.email}</p> */}
                        <p><strong>User ID:</strong> {c.unique_id}</p>
                        <p><strong>Postion:</strong> {c.user_position}</p>
                        <p><strong>Alloted Location:</strong> <span >{c.city}</span><span> {c.state} </span><span> {c.pincode}</span></p>
                        <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <div className="btn btn-primary" style={{ paddingRight: "3px", paddingLeft: "3px", marginRight: '10px' }} onClick={() => handleEdit(c)} >Edit</div>
                          <div className="btn btn-danger" style={{ paddingRight: "3px", paddingLeft: "3px", }} onClick={() => handleDelete(c.unique_id)} >Remove</div>
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



export default AdminManageUsers