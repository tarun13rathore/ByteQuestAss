import React from "react";
import { Container, Form, FormControl, Button, Row } from "react-bootstrap";
import "./Style.css";

const Footer = () => {
  return (
    <>
      <div className="footerCon" id="contact">
        <Container>
          <Row className="pt-5 pb-5">
            <div className="col-md-6" style={{ color: "white" }}>
              <h1>Let's Discuss</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-6">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  style={{
                    margin: "39px",
                    borderRadius: "20px",
                    height: "45px",
                  }}
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="signBtn">
                  Sign Up
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="pt-5">
          <Row>
            <div className="col-md-3">
              <h3>Logo</h3>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
            <div className="col-md-3">
              <h5>Links</h5>
              <p>Our Clients</p>
              <p>Privacy Policy</p>
              <p>Our Benefits</p>
            </div>
            <div className="col-md-3">
              <h5>Information</h5>
              <p>Our Clients</p>
              <p>Privacy Policy</p>
              <p>Our Benefits</p>
            </div>
            <div className="col-md-3">
              <h5>Contact Us </h5>
              <p>+91 454544445, +91 4844848455</p>
              <p>Info@kuchbhi.com</p>
              <p>Address h pahoch sako toh pahocho</p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
