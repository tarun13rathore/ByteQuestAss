import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Style.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <p className="phma">
        <AiOutlineMail />
        <span className="phma1">Info@kuchbhi.com</span>
        {"      "}
        <AiOutlinePhone />
        <span className="phma1">+91 454544445, +91 4844848455</span>
      </p>
      <Navbar bg="light" expand="lg">
        <Container style={{ marginTop: "-17px" }}>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav
              className="  my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="dark " href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="dark" href="#about">
                About Us
              </Nav.Link>
              <Nav.Link className="dark" href="#service">
                Services
              </Nav.Link>
              <Nav.Link className="dark" href="#product">
                Products
              </Nav.Link>
              <Nav.Link className="dark" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="dark" href="#contact">
                <Button style={{ borderRadius: "15px", background: "#512da8" }}>
                  Contact US
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
