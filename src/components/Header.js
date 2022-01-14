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

      {/* <Navbar>
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar className="justify-content-end">
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Nav.Link className="dark" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="dark" href="#features">
                About Us
              </Nav.Link>
              <Nav.Link className="dark" href="#pricing">
                Services
              </Nav.Link>
              <Nav.Link className="dark" href="#features">
                Products
              </Nav.Link>
              <Nav.Link className="dark" href="#pricing">
                Portfolio
              </Nav.Link>
              <Nav.Link className="dark" href="#pricing">
                <Button style={{ borderRadius: "15px", background: "#512da8" }}>
                  Contact US
                </Button>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Navbar> */}
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
              <Nav.Link className="dark" href="#features">
                About Us
              </Nav.Link>
              <Nav.Link className="dark" href="#pricing">
                Services
              </Nav.Link>
              <Nav.Link className="dark" href="#features">
                Products
              </Nav.Link>
              <Nav.Link className="dark" href="#pricing">
                Portfolio
              </Nav.Link>
              <Nav.Link className="dark" href="#pricing">
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
