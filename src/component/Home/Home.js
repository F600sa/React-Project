import React from 'react'
import Nav from './nav'
import Card from './Card'
import City from './data'
import Footer from './Footer'
import GetCard from '../company/GetCard'
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <div>
      
         <Nav></Nav>
         <GetCard>
         </GetCard>
          {/* <Row>
          {City.map((el) => {
            return (
              <Col style={{ marginBottom: "10px" }}>
                <Card
                city={el.city}
                  img={el.img}
                  price={el.price}
                />
           </Col>
            );
          })}
       </Row>  */}
       <Footer/>
    </div>
  )
}

export default Home