import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavBar(props) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href={`#${props.navlinks[0].toLowerCase()}`}>{props.brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="justify-content-end">
            {props.navlinks.map((link, index) => {
              return <Nav.Link key={index} href={`#${link.toLowerCase()}`}>{link}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;