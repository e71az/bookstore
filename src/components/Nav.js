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
      className="d-flex ml-5"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant=""
    >
      <Navbar.Brand className="font-weight-bold" href="#home">
        Bookstore CMS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="linkText" href="/">
            Books
          </Nav.Link>
          <Nav.Link className="linkText" href="/calc">
            Categories
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link className="linkText mr-5" href="/quote">
        {' '}
        <FontAwesomeIcon className="user-icon" icon={faUserAlt} />
      </Nav.Link>
    </Navbar>
  </>
);

export default MainNavbar;
