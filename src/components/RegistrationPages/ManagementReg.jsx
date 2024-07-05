import { Form, Button, Card } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import './css.css'
// import { useAuth } from '../../context/AuthContext';
const BaseUrl = process.env.BaseUrl || "https://kvhrr.onrender.com"
export default function ManageReg() {

  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  const emailRef = useRef();
  const [pass,setPass]=useState();
  var text = ""
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup } = useAuth();
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  // async function handleSubmit(e){
  //   e.prevenDefault();

  //   if(passwordRef.current.value !== 
  //     passwordConfirmRef.current.value){
  //       return setError('Passwords do not match')
  //     }

  //     try{
  //       setError('')
  //       setLoading(true)
  //       await signup(emailRef.current.value, passwordRef.current.value)
  //     }catch{
  //       setError("Failed to create an account")
  //     }
  //     setLoading(false);

  // }
  const [error, setError] = useState();

  const [form, setForm] = useState({})

  const handleForm = (e) => {
    // console.log(e.target.value, e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BaseUrl}/managementReg`, { form })
      .then(async function (response) {
        // handle success
        var _message = await response.data.Success;
        text = "";
        text = JSON.stringify(_message)
        setError(text)
        console.log(response.data.Success);
        // console.log(response.data);
      })
      .catch(function (error) {

        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // console.log(form)
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Register as Management</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required name="email" onChange={handleForm} />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' ref={passwordRef} required name="password" onChange={handleForm} />
            </Form.Group>
            <div class="form-group">
              <label class="col-md-4 control-label">Password</label>
              <div class="col-md-6">
                <input id="password-field" type="password" class="form-control" name="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
              </div>
            </div>

            {error ? <p>{error}</p> : null}
            <Button className='w-100' type='submit'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Log In
      </div>
    </>
  )
}
