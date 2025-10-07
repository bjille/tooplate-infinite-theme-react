import React from "react";
import "./NavbarReact.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarReact() {
  return (
    <Navbar expand="lg" bg="secondary" data-bs-theme="dark" className="navbar tm-navbar sroll" id="tmNav" >
      <Container fluid>
        <Navbar.Brand href="#infinite" className="navbar-brand">Infinite Loop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav fa-bars" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto tm-navbar-nav">
            <Nav.Link className="nav-link tm-nav-link" href="#infinite">Home</Nav.Link>
            <Nav.Link className="nav-link tm-nav-link" href="#whatwedo" > What We Do</Nav.Link >
            <Nav.Link className="nav-link tm-nav-link" href="#testimonials" > Testimonials</Nav.Link >
            <Nav.Link className="nav-link tm-nav-link" href="#gallery" > Gallery</Nav.Link >
            <Nav.Link className="nav-link tm-nav-link" href="#contact" > Contact</Nav.Link >
          </Nav >
        </Navbar.Collapse >
      </Container >
    </Navbar >
  );
}

export default NavbarReact;
