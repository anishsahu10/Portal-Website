import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Form, Button, Card } from 'react-bootstrap';
const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"
const AdminJobCreation = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const navigate = useNavigate();
    const [form, setForm] = useState({})
    const [error, setError] = useState();

    const handleLocation = (e) => {
        // var requestOptions = {
        //     method: 'GET',
        //   };
        handleForm(e)

        //   fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text="${e.value}"&apiKey=e58fa630edc04a088d5273038bc64c3d`, requestOptions)
        //     .then(response => response.json())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }
    const handleJobType = (e) => {

    }
    const handleForm = (e) => {
        console.log(e.target.value, e.target.id)
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })

        console.log(form)
    };
    const handleJobCreate = async (e) => {
        e.preventDefault();
        // console.log(form)
        // jobType();

        // console.log(form)
        await axios.post(`${BaseUrl}/admin/jobcreation`, { form })
            .then(async function (response) {
                // handle success
                var _message = await response.data.Success;
                var text = "";
                text = JSON.stringify(_message)
                setError(text)
                console.log(response.data.Success);
                if (response.data.Success === "Job has been created.")
                    navigate("/admin/jobs/")
                window.location.reload();
                // console.log(response.data);
            })
            .catch(function (error) {

                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        // console.log(form)


        // for val in form:
        //     if(var.value===""):
        //         document.getElementsById(var.id)

    }

    const jobType = (e) => {
        var jobtype = document.getElementById('full')
        if (jobtype.checked)
            var job = "full"
        else
            var job = "part"
        setForm({
            ...form,
            ["jobtype"]: job
        })

    };

    const handleSubmit = (e) => { };


    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Create a new job</h2>
                    <Form onSubmit={handleJobCreate}>
                        <Form.Group id='jobTitle' className="mb-3">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control required as="select" type="select" id='jobTitle' name="payment_method" onChange={handleForm} value={form.payment_method}>
                                <option value="">Select the job type</option>
                                <option value="delivery boy">DElivery Boy</option>
                                <option value="clerk">Clerk</option>
                                <option value="peon">Peon</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group id='companyName' className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type='text' id='companyName' required name="companyName" onChange={handleForm} />
                        </Form.Group>

                        <Form.Group id='jobDescription' className="mb-3">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control type='text' id='jobDescription' required name="jobDescription" onChange={handleForm} />
                        </Form.Group>

                        <Form.Group id='jobLocation' className="mb-3">
                            <Form.Label>Job Location</Form.Label>
                            <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>

                                <Form.Control type='text' id='zone' required name="zone" onChange={handleLocation} placeholder='Enter Zone' style={{ margin: "3px" }} />
                                <Form.Control type='text' id='state' required name="state" onChange={handleLocation} placeholder='Enter State' style={{ margin: "3px" }} />
                                <Form.Control type='text' id='city' required name="city" onChange={handleLocation} placeholder='Enter City' style={{ margin: "3px" }} />
                                <Form.Control type='text' id='pincode' name="pincode" onChange={handleLocation} placeholder='Enter pincode' style={{ margin: "3px" }} />
                            </div>
                        </Form.Group>
                        <Form.Group id='open_positions' className="mb-3">
                            <Form.Label>Number of open positions</Form.Label>
                            <Form.Control type='text' id='open_positions' required name="open_positions" onChange={handleForm} />
                        </Form.Group>

                        <Form.Group id='jobType' className="mb-3">
                            <Form.Label>Job Type </Form.Label>
                            <Form.Check type="radio" label='Full' id="full" name="job-type" onChange={jobType} />
                            <Form.Check type="radio" label='Part' id="part" name="job-type" onChange={jobType} />
                        </Form.Group>

                        {error ? <p>{error}</p> : null}
                        <Button className='w-100' type='submit'>Create Job</Button>
                    </Form>
                </Card.Body>
            </Card>



        </>

    )
}

export default AdminJobCreation