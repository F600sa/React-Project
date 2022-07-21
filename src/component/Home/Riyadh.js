import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Riyadh() {
    const navigate1 = useNavigate();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
  
    const postData = () => {
      axios
        .post(`https://62d7f2f49c8b5185c77f9814.mockapi.io/ticket`, {
          email,
          phone,
          age
        })
        .then((res) => {
          console.log(res);
          navigate1("/Home");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div>
          <Nav/>
          <table>
          <tr><td> <input type="email"
          class="inptic"
           placeholder="name@example.com" 
           onChange={(e) => {
            setEmail(e.target.value);
          }}/>
         <input type="Number"
         class="inptic"
          placeholder='Phone'
            onChange={(e) => {
            setPhone(e.target.value);
          }}>
          </input>
         <input type="Number"
         class="inptic"
          placeholder='Age'
            onChange={(e) => {
            setAge(e.target.value);
          }}
          ></input>
          <button class="ticr" onClick={postData}>submit</button></td></tr>
          </table>
      </div>
    )}

export default Riyadh