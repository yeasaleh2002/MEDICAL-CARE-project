import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {

       // useAuth import
    const { user, handleSignOut } = useAuth();

    return (
    
   <div>

       <Navbar   collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>


      {/* navbar brand part */}
  <Navbar.Brand> 


      {/* navbar image part */}
  <img alt="" src="https://i.ibb.co/wWbMN8C/HEAD-Top-9-Medical-Apps-for-Doctors-Hero-no-text.png" width="55" height="55" className="header-img d-inline-block align-top"/>{' '} 
  <span className="fw-bold text-danger fs-3 p-3"> MEDICAL CARE</span>
      </Navbar.Brand>


      {/* navbar route part */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
       <NavLink className="nav-link fs-5" to="/home">Home</NavLink>             
       <NavLink className="nav-link fs-5" to="/services">Service</NavLink>          
       <NavLink className="nav-link fs-5" to="/doctor">Doctor</NavLink>
       <NavLink className="nav-link fs-5" to="/blogs">Blogs</NavLink>
       <NavLink className="nav-link fs-5" to="/about">About Us</NavLink>    
       <NavLink className="nav-link fs-5" to="/contact">Contact</NavLink>
       <NavLink className="nav-link fs-5" to="/login">LogIn</NavLink>
       
       
       <span className="fs-5 ms-2 pt-2">{user.displayName} </span>
            {user?.displayName && <button  className="fs-5 ms-2" onClick={handleSignOut}>log out</button>}
        
 
 {/* 
{user?.displayName && <span className="fs-5 ms-2 pt-2" >Hello {user.displayName} </span>}

 
{ 
 user.displayName ?
 <button  className="fs-5 ms-2" onClick={handleSignOut}>log out</button>
:  
  
      <NavLink className="nav-link fs-5" to="/login"> <button> LogIn </button> </NavLink>
  }

  */}



    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
   </div>
       
       
    );
}; 

export default Header;