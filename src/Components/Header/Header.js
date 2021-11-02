
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import "./Header.css"
import useFirebase from './../../Hooks/useFirebase';


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
      <div>
        <Navbar.Text>
      Signed in as: <a href="#login">{user?.displayName}</a>
     
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


    //     <div className="MenuBar-container container-fluid">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-3">
    //         <div className="logo-img">
    //           <img className="w-75" src={logo} alt="" />
    //         </div>
    //       </div>
    //       <div className="col-md-9">
    //         <div className="menu-container ">
              
        
  

    //             <div className="d-flex justify-content-end my-5">
    //             <Link  to="/home" >
    //               Home
    //             </Link>
                
    //             <Link  to="/about" >
    //               About
    //             </Link>
                
    //             <Link  to="/contact" >
    //               Contact
    //             </Link>
    //             <Link  to="/login" >
    //               Login
    //             </Link>

    //             </div>
                
                
              
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    );
};

export default Header;