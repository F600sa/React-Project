import { Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function BasicExample(props) {
  return (<div>
    <div class="grid-container">
    
    
    <Card
        style={{
        
        //   color: "white",
          width: "18rem",
        
        }}
      >
       
        <Card.Img className="Card-img" src={props.img} />
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>{props.city}</Card.Title>
          {/* <Card.Text className="para">{props.story}</Card.Text> */}
        </Card.Body>
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>{props.price}</Card.Title>
          {/* <Card.Text className="para">{props.story}</Card.Text> */}
        </Card.Body>
        <Card.Body>
          <Link to="/Riyadh">حجز</Link>
        </Card.Body> 
        
      </Card>
     
      </div>
      </div>
     
  );
}

export default BasicExample;