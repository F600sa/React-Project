import React, { useEffect, useState } from "react";
import Nav from './Home/nav'
import axios from "axios";
import { Card } from "react-bootstrap";
function Ticket() {
    const[data,setData]=useState([])
    useEffect(() => {
        axios
          .get(`https://62d7f2f49c8b5185c77f9814.mockapi.io/ticket`)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <div>
        <Nav/>
        
        <div class="grid-container">
          
        {data.map((e) => (
         
          <card class="card1" >
            <img class="img2" src="https://upload.wikimedia.org/wikipedia/ar/2/2d/%D9%85%D9%88%D8%B3%D9%85_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6_2021.jpeg"></img>
            <p class="cardtitle">email:{e.email}</p>
            <p class="cardtitle">Phone:{e.phone}</p>
            <p class="cardtitle">Age:{e.age}</p>
            <button class="ticr">delete</button><hr></hr><button class="ticr">Update</button>
          </card>
          
        ))}
      </div>
      
    </div>
  )
}

export default Ticket