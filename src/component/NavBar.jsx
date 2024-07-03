import React from 'react';
import FarmersLogo from '../images/farmersLogo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Container className='d-flex justify-content-between'>
        <div className='logo'>
          <img src={FarmersLogo} alt='Farmers Logo' />
        </div>
        <Navbar className='align-items-start'>
          <Container className='mt-2'>
            <Nav.Link className='p-3'>Home</Nav.Link>
            <Nav.Link className='p-3'>About Us</Nav.Link>
            <Nav.Link className='p-3'>Services</Nav.Link>
            <Nav.Link className='p-3'>FAQ</Nav.Link>
            <Nav.Link className='p-3'>Contact Us</Nav.Link>
            <Nav className='p-2 viewmore1'>View More</Nav>
            <Nav className='p-2 viewmore2'>View More</Nav>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default NavBar;
