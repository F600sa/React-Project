import Nav from './nav'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function TextControlsExample() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const postData = () => {
    axios
      .post(`https://62d7f2f49c8b5185c77f9814.mockapi.io/con`, {
        email,
        textarea,
      })
      .then((res) => {
        console.log(res);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
  <>
  <Nav/>
    <div class="Form1">
        <h6>Enter Your Email</h6>
        <input type="email"
        class="inptic"
        placeholder="name@example.com" 
         onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        <h6>Enter Your Massege</h6>
        <textarea 
        class="inptic"
        as="textarea" rows={3}  onChange={(e) => {
          setTextarea(e.target.value);
        }}/>
        <button class="ticr2" onClick={postData}>LogIn</button>
    </div>
</>
  );
}

export default TextControlsExample;