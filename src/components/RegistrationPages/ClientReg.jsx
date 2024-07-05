import React, {useRef,useState} from 'react';
import axios from 'axios';
import {Form, Button, Card} from 'react-bootstrap';
// import { useAuth } from '../../context/AuthContext';
const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
export default function ClientReg() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const company_name = useRef();
  var text=""
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
  const [error,setError]=useState();

  const [form, setForm]= useState({})

  const handleForm= (e) =>{
    // console.log(e.target.value, e.target.name)
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault( )
    await axios.post(`${BaseUrl}/clientReg`,{form})
    .then(async function (response) {
      // handle success
      var _message = await response.data.Success;
      text="";
      text=JSON.stringify(_message)
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
  } ;
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Register as Client</h2>
          <Form onSubmit={handleSubmit}>
          <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required name ="email" onChange={handleForm} />
            </Form.Group>
          <Form.Group id='company_name'>
              <Form.Label>Company Name</Form.Label>
              <Form.Control type='text' ref={company_name} required name ="company_name" onChange={handleForm} />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' ref={passwordRef} required name ="password" onChange={handleForm}/>
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required name ="confirm_password" onChange={handleForm} />
            </Form.Group>
            {error?<p>{error}</p>:null}  
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
