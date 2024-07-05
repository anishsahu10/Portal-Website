import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminJob.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import axios from "axios";
const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"
const Dropdown = ({ options, onSelect }) => {


  const [isOpen, setIsOpen] = useState(false);
  const [userType, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Call the onSelect prop with the selected option
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" style={{ borderWidth: "4px" }} onClick={toggleDropdown}>
        {userType ? userType : "Select User Type"}
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AdminAddUser = () => {
  const [selectedItem, setSelectedItem] = useState('client');
  const [dynamicField, setDynamicField] = useState('');
  const [dynamicField1, setDynamicField1] = useState('');
  const [dynamicField2, setDynamicField2] = useState('');
  const [zone,setZone]= useState()
  const [state,setState]= useState()
  const [city,setCity]= useState()
  const [pincode,setPincode]= useState()

  const handleItemChange = (event) => {
    // console.log("hi")
    setDynamicField('')
    setSelectedItem(event.target.value);
  };

  const handleDynamicFieldChange = (event) => {
    // console.log("hey")
    setDynamicField(event.target.value);
  };
  const handleDynamicField1Change = (event) => {
    // console.log("hey")
    setDynamicField1(event.target.value);
  };
  const handleDynamicField2Change = (event) => {
    // console.log("hey")
    setDynamicField2(event.target.value);
  };

  const renderDynamicField = (e) => {
    // console.log("hello")
    // e.preventDefault()
    if (selectedItem === 'manager') {
      // setDynamicField('')
      return (
        <div className="bg-white rounded p-1" style={{ display: "flex", flexDirection: "column" }}>
          <div className='mb-2' style={{ display: "flex", flexDirection: "row" }} >
            <input
              type="text"
              required
              style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
              value={zone} onChange={e=>setZone(e.target.value)}
              placeholder="enter zone"
            />
            <input
              type="text"
              style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
              value={state} onChange={e=>setState(e.target.value)}
              placeholder="enter state"
            />
          </div>

          <div className='mb-2' style={{ display: "flex", flexDirection: "row" }} >

            <input
              type="text"
              style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
              value={city} onChange={e=>setCity(e.target.value)}
              placeholder="enter city"
            />
            <input
              type="text"
              style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
              value={pincode} onChange={e=>setPincode(e.target.value)}
              placeholder="enter pincode"
            />

          </div>

        </div>
      );
    } else if (selectedItem === 'recruiter') {
      // setDynamicField('')
      return (
        <div className="w-50 bg-white rounded p-3">

          <div className="bg-white rounded p-1" style={{ display: "flex", flexDirection: "column" }}>
            <div className='mb-2' style={{ display: "flex", flexDirection: "row" }} >
              <input
                type="text"
                required
                style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
                value={zone} onChange={e=>setZone(e.target.value)}
                placeholder="enter zone"
              />
              <input
                type="text"
                style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
                required
                value={state} onChange={e=>setState(e.target.value)}
                placeholder="enter state"
              />
            </div>

            <div className='mb-2' style={{ display: "flex", flexDirection: "row" }} >

              <input
                type="text"
                required
                style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
                value={city} onChange={e=>setCity(e.target.value)}
                placeholder="enter city"
              />
              <input
                type="text"
                style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
                value={pincode} onChange={e=>setPincode(e.target.value)}
                placeholder="enter pincode"
              />

            </div>

          </div>
          <div className='mb-2'>
            <label>
              Enter Manager
            </label>
            <input
              type="text"
              required
              style={{ borderWidth: '1px', borderColor: 'darkgray', margin: "2px" }}
              value={dynamicField2}
              onChange={handleDynamicField2Change}
              placeholder="Enter Manager"
            />
          </div>
        </div>
      );
      // Render another type of field for option 2
    } else if (selectedItem === 'client') {
      return (
        <div className="w-50 bg-white rounded p-3">

          <div className='mb-2'>
            <label>
              Enter companyName
            </label>
            <input
              type="text"
              required
              style={{ borderWidth: '1px', borderColor: 'darkgray' }}
              value={dynamicField1}
              onChange={handleDynamicField1Change}
              placeholder="Enter Company Name"
            />
          </div>
        </div>
      );
      // Render another type of field for option 3
    }

    return null;
  };

  const [name, setName] = useState()
  const [location, setLocation] = useState(' ')
  const [userType, setSelectedOption] = useState("Client");
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const options = ["Client", "Manager", "Candidate", "Recruiter"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    var user = {
      'username': name,
      'email': email,
      'password': password,
      'user_position': selectedItem,
      'state':state,
      'city':city,
      'zone':zone,
      'pincode':pincode,
      'company_name': dynamicField1,
      'manager_assigned': dynamicField2
    }
    axios.post(`${BaseUrl}/admin/user`, { params: { user } })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("success")
          confirmAlert({
            title: 'Success',
            message: 'User successfully created',
            buttons: [
              {
                color: "green",
                label: 'Ok',
                onClick: () => {
                  e.target.reset();
                  setZone()
                  setCity()
                  setPincode()
                  setState()
                  setDynamicField1('')
                  setDynamicField2('')
                  // navigate('/headLogin')
                }
              }
            ]
          })
        }
        // window.location.reload();
        // setEditId(-1)
      }).catch(err => {
        console.log(err)
      })
    const submit = () => {
      confirmAlert({
        title: 'Logout?',
        message: 'Are you sure you want to logout.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              sessionStorage.clear()
              // navigate('/headLogin')
            }
          },
          {
            label: 'No',
            onClick: () => { }
          }
        ]
      })
    };
    console.log(user)
  }

  return (
    <>
      <div className="d-flex vh-100 justify-content-center" style={{ paddingTop: '1%' }}>
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <div className='mb-2'>
              <label htmlFor="">Name</label>
              <input type="text" placeholder='Enter Name' required className='form-control' onChange={e => { setName(e.target.value) }} />
            </div>
            <div className='mb-2'>
              <label htmlFor="">Email</label>
              <input type="email" placeholder='Enter Email' required className='form-control' onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div className='mb-2'>
              <label htmlFor="">Enter Password</label>
              <input type="password" placeholder="Enter Password" required className="form-control" onChange={e => { setPassword(e.target.value) }} />
            </div>
            <div className='mb-2' style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ paddingRight: '5px' }} htmlFor="item">Select User Type</label>
              <select style={{ borderWidth: '1px', borderColor: 'black' }} id="item" value={selectedItem} onChange={handleItemChange}>
                <option value="client">Client</option>
                <option value="manager">Manager</option>
                <option value="recruiter">Recruiter</option>
                <option value="candidate">Candidate</option>
              </select>


            </div>
            {renderDynamicField()}
            <button className='btn btn-success'>Submit</button>
          </form>
        </div>
      </div>/.
    </>
  )
}
export default AdminAddUser
