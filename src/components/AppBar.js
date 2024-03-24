import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo_icon from "../assets/fruits.png";
import Cart from "./Cart";

const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-primary">
            <span>
              <img src={logo_icon} alt="" /> Dried Delights
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#products" className="fw-bold">
              Products
            </Nav.Link>
            <Nav.Link href="#musttry" className="fw-bold">
              Must Try
            </Nav.Link>
            <Nav.Link href="#about" className="fw-bold">
              About Us
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-bold">
              Contact US
            </Nav.Link>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
