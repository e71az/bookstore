import React from 'react';
import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const MainNavbar = () => (
  <>
    <Navbar
      // className="d-flex justify-self-center"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant=""
    >
      <Navbar.Brand href="#home">Math Magicians</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="linkText" href="/">Home</Nav.Link>
          <Nav.Link className="linkText" href="/calc">Calculator</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link className="linkText ml-auto" href="/quote">
        {' '}
        <FontAwesomeIcon icon={faUserAlt} />
      </Nav.Link>
    </Navbar>
  </>
);

export default MainNavbar;
