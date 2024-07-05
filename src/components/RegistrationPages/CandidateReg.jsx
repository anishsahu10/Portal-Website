import React, { useRef, useState } from 'react';
import axios from 'axios';
import $ from "jquery";
import { Form, Button, Card } from 'react-bootstrap';
// import { useAuth } from '../../context/AuthContext';
const BaseUrl = process.env.BaseUrl
export default function CandidateReg() {
  console.log(BaseUrl)
  var text = ""
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // console.log(emailRef)
  const [error, setError] = useState();

  const [form, setForm] = useState({})

  $(document).ready(function () {
    let imagesPreview = function (input, placeToInsertImagePreview) {
      if (input.files) {
        let filesAmount = input.files.length;
        for (let i = 0; i < filesAmount; i++) {
          let reader = new FileReader();
          reader.onload = function (event) {
            $($.parseHTML("<img>"))
              .attr("src", event.target.result)
              .appendTo(placeToInsertImagePreview);
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    $("#input-files").on("change", function () {
      imagesPreview(this, "div.preview-images");
    });
  });

  const handleForm = (e) => {
    // console.log(e.target.value, e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BaseUrl}/candidateReg`, { form })
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
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Node.js upload images</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      div.preview-images > img {\n        width: 30%;\n      }\n    "
        }}
      />
      <Card>
        <p></p>
        <Card.Body>
          <h2 className='text-center mb-4'>Register as Candidate</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required name="email" onChange={handleForm} />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' ref={passwordRef} required name="password" onChange={handleForm} />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required name="confirm_password" onChange={handleForm} />
            </Form.Group>
            <div className="container">
              <div className="row">
                <div className="col-sm-8 mt-3">
                  <h4>Node.js upload images - bezkoder.com</h4>
                  <form
                    className="mt-4"
                    action="http://127.0.0.1:3000/upload"
                    method="POST"
                    encType="multipart/form-data"

                  >
                    <div className="form-group">
                      <input
                        type="file"
                        name="file"
                        multiple=""
                        id="input-files"
                        className="form-control-file border"
                      />
                      {/* <input
                    type="file"
                    name="file"
                    id="input-files"
                    class="form-control-file border"
                  /> */}
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <div className="preview-images" />
                  hello
                </div>
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
