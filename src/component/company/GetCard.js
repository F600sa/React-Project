import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap';
import { Container, Row, Col  ,Card} from "react-bootstrap";
function GetCard() {
    const[data,setData]=useState([])
   
   
  //   const getData = ()=>{
  //     axios.get(`https://62d7f2f49c8b5185c77f9814.mockapi.io/Card`)
  //     .then((getData) =>{
  //         setData(getData.data)

  //   })
  // }
    useEffect(() => {
        
        axios
          .get(`https://62d7f2f49c8b5185c77f9814.mockapi.io/Card`)
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
      <div class="grid-container">
      {/* <div class="card"> */}
        
     {data.map((e) => (
            <card class="card4" >
            <Link to="/Riyadh"><img class="img6" src={e.img} /></Link><br/>
          <p class="cardtitle">{e.title}</p><br/>
          <p class="price">السعر:{e.price}</p><br/>
          <Link to="/Riyadh"> <p><button>حجز</button></p></Link>
          </card>
     ))}
    </div>
    {/* </div> */}

  
    
    
    </div>
  )
}

export default GetCard