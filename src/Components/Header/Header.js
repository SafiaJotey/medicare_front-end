
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import "./Header.css"



const Header = () => {
  const {user,logout}=useAuth();

    return (
      
      <>
      
  
      <Navbar className="menu" collapseOnSelect expand="lg"  variant="dark" >
  <Container>
  <Navbar.Brand className="logo" as={Link} to="/home">MEDICARE </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      
    </Nav>
    <Nav>
      {user?.email?
      <div className="d-flex align-items-center">
        <Navbar.Text>
      Signed in as: <a href="#login">{
      user.displayName? `${user?.displayName}`:`${user?.email}`
      }</a>
     
     </Navbar.Text>
       <Nav><Button onClick={logout} variant="light">Logout</Button> {' '}</Nav>
      </div>:
      
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    }
      
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>


   
    );
};

export default Header;