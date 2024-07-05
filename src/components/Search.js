import React from 'react';
// import './Seachbar.css';
import { Link } from 'react-router-dom';
import JSONDATA from './data.json'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"
var data = []
export function Searchbar() {

  useEffect(() => {
    axios.get(`${BaseUrl}/search`, {
      params: {
        user: 'admin',
        userId: sessionStorage.getItem("userId")
      }
    }).then(res => {
      data = []
      console.log(res.data)
      console.log(JSONDATA)
      data = res.data

    })
  }, [])

  const navigate = useNavigate();
  const handleProfile = (e) => {
    console.log(e)
    navigate(`/profile/${e.unique_id}`)

  }
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={event => {
          setSearchTerm(event.target.value)
        }}
      />
      <div className="list" style={{ background: "", backdropFilter: "blur(8px)" }}>
        {data.filter((val) => {
          // console.log(val.username)?
          if (searchTerm === "") {
            return "";
          } else if (val.username=== undefined) {
            return "";
          } else if(val.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val;
          }


        }).map((val, key) => {
          return (
            <ul className="listItems" key={key} style={{ cursor: "pointer" }} onClick={(e) => handleProfile(val)}>{val.username}</ul>
          );
        })}
      </div>
    </div>
  );
}
