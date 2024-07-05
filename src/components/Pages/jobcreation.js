import React from "react";  
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useRef,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import {Form, Button, Card} from 'react-bootstrap';
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const JobCreation = ()=>{

    const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

    const navigate = useNavigate();
    const [form, setForm]= useState({})
    const [error,setError]=useState();
   
    const handleForm= (e) =>{
        console.log(e.target.value, e.target.id)
        setForm({
        ...form,
        [e.target.id] : e.target.value
        })

        console.log(form)
    };
    const handleJobCreate= async(e) =>{
        e.preventDefault();
        console.log("form")
        // jobType();
       
        // console.log(form)
        await axios.post(`${BaseUrl}/addJob`,{form})
        .then(async function (response) {
          // handle success
          var _message = await response.data.Success;
          const text="";
          text=JSON.stringify(_message)
          setError(text)
          console.log(response.data.Success);
          navigate("/head/jobs")
          // console.log(response.data);
        })
        .catch(function (error) {
          
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
        console.log(form)
        
            
        // for val in form:
        //     if(var.value===""):
        //         document.getElementsById(var.id)

    }   

    const jobType =(e)=>{
        var jobtype = document.getElementById('full')
        if(jobtype.checked)
            var job="full"
        else
            var job="part"
        setForm({
            ...form,
            ["jobtype"] : job
            })
        
      } ;

      const handleSubmit= (e) =>{};


    return (
        <>
            <Card>
                <Card.Body>
                <h2 className='text-center mb-4'>Create a new job</h2>
                <Form onSubmit={handleJobCreate}>
                <Form.Group id='jobTitle'  className="mb-3">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type='text' id='jobTitle' required name ="jobTitle" onChange={handleForm} />
                    </Form.Group>
                    
                    <Form.Group id='companyName' className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type='text' id='companyName' required name ="companyName" onChange={handleForm}/>
                    </Form.Group>
                    
                    <Form.Group id='jobDescription' className="mb-3">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control type='text' id='jobDescription' required name ="jobDescription" onChange={handleForm}/>
                    </Form.Group>
                    
                    <Form.Group id='jobLocation'  className="mb-3">
                    <Form.Label>Job Location</Form.Label>
                    <Form.Control type='text' id='jobLocation' required name ="jobLocation" onChange={handleForm}/>
                    </Form.Group>

                    <Form.Group  id='jobType'  className="mb-3">
                        <Form.Label>Job Type </Form.Label>
                        <Form.Check type="radio" label='Full' id="full" name="job-type" onChange={jobType}/>
                        <Form.Check type="radio" label='Part' id="part" name="job-type" onChange={jobType}/>
                    </Form.Group>
                
                    {error?<p>{error}</p>:null}  
                    <Button className='w-100' type='submit'>Create Job</Button>
                </Form>
                </Card.Body>
            </Card>



            </>



    );
    
}

export default JobCreation;