import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap';
import { Container, Row, Col  ,Card} from "react-bootstrap";
import Nav from "../Home/nav"
function Getcon() {
    const[data,setData]=useState([])
   
   
  //   const getData = ()=>{
  //     axios.get(`https://62d7f2f49c8b5185c77f9814.mockapi.io/Card`)
  //     .then((getData) =>{
  //         setData(getData.data)

  //   })
  // }
    useEffect(() => {
        
        axios
          .get(`https://62d7f2f49c8b5185c77f9814.mockapi.io/con`)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
           
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      // const onDelete=(id)=>{
      //   axios.delete(`https://62d7f2f49c8b5185c77f9814.mockapi.io/Card${id}`)
      //   .then(()=>{
      //       getData()

      //   })
      // }
  return (
    <div>
        <Nav/>
      <div class="grid-container">
      {/* <div class="card"> */}
        
     {data.map((e) => ( 
       
            <card class="card2" >
            {/* <Link to="/Riyadh"><h4>Email:</h4> </Link><br/> */}
          <p class="cardtitle">{e.email}</p><br/>
          <p class="cardtitle">{e.textarea}</p><br/>
          
          </card>
     ))}
    </div>
    {/* </div> */}

    
    
    </div>
  )
}

export default Getcon