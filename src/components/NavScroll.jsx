import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import JSONDATA from './data.json'
const BaseUrl = process.env.BaseUrl || "http://127.0.0.1:3000"

const NavBar = () => {

  // const [searchTerm, setSearchTerm] = useState('')
  // const [data, setData] = useState('')
  // useEffect(()=>{
  //   setData(JSONDATA)
  // },[])

  // console.log(data)
  // useEffect(() => {
  //   axios.get(`${BaseUrl}/search`,{
  //     query:{
  //       username:searchTerm
  //     }
  //     }).then(res => {
  //     setData(res)
  //   })
  // }, [])


  return (
    <>

      <Navbar className="navbar" bg="primary" expand="lg" sticky='top' >
        <Container fluid>
          <Navbar.Brand >KVHR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 m-5"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About us</Nav.Link>
              <NavDropdown title="Register" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to='/headReg'>Head</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/managementReg'>
                  Management
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/recruiteReg'>
                  Recruiter
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/candidateReg'>
                  Candidate
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/clientReg'>
                  Client
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Login" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to='/headLogin' >Head Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/recruiterLogin'>
                  Recruiter Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/candidateLogin'>
                  Candidate Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/managementLogin'>
                  Management Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/clientLogin'>
                  Client Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <div style={{ backgroundColor: "white" }}>
              <input
                type="text"
                placeholder="Search..."
                className="search"
                onChange={event => {
                  setSearchTerm(event.target.value)
                }}
              />
              {searchTerm === '' ? '' :
                data.map((val) => {
                  return (
                    <div className="list" key={val.id}>
                      <ul className="listItems">{val.value}</ul>
                    </div>
                  );
                })}
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default NavBar;