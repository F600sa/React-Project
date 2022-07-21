import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from "react";
import { Link } from 'react-router-dom';
// import axios from "axios";
import { useNavigate } from "react-router-dom";
function BasicExample() {
    const Navl=useNavigate()
    const email=useRef()
    const password=useRef()
   const handleSubmit=()=>{
        if(email.current.value=="a@gmail.com"&&password.current.value=="12345"){
            Navl("/CreateCard");   
        } 
         else{
            Navl("/Home")
        }}
  return (
    <div class="login">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;