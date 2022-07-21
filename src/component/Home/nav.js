import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavScrollExample() {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">مواسم</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to="/Home"> <Nav.Link href="#action1">الصفحة الرئسية</Nav.Link></Link>
            <Nav.Link href="#action2" >تسجيل الخروج</Nav.Link>
            <NavDropdown title="المزيد" id="navbarScrollingDropdown">
            <Link to="/About"><NavDropdown.Item href="About">عن</NavDropdown.Item></Link>
            <Link to="/Contact"><NavDropdown.Item href="#action4">
                تواصل معنا
              </NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/Ticket"> <Nav.Link href="#" disabled>
            تذاكري
            </Nav.Link></Link>
          </Nav>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;