import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Content = () => {
  return (
    <>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://picsum.photos/1200/300?grayscale"
          alt=""
        />
      </div>
      <Container className="text-center pt-3">
        <p>It is a long established</p>
        <h4>Products</h4>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          arrows={false}
        >
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
        </Carousel>
      </Container>

      <Container className="text-center pt-3">
        <p>It is a long established</p>
        <h4>Services</h4>
        <Carousel
          responsive={responsive1}
          infinite={true}
          autoPlay={true}
          arrows={false}
        >
          <div>
            <Card style={{ width: "180px" }}>
              <Card.Img src="https://picsum.photos/seed/picsum/200" />
              <Card.Body>
                <Card.Title>WebSite Design & Development</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "180px" }}>
              <Card.Img src="https://picsum.photos/seed/picsum/200" />
              <Card.Body>
                <Card.Title>WebSite Design & Development</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "180px" }}>
              <Card.Img src="https://picsum.photos/seed/picsum/200" />
              <Card.Body>
                <Card.Title>WebSite Design & Development</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "180px" }}>
              <Card.Img src="https://picsum.photos/seed/picsum/200" />
              <Card.Body>
                <Card.Title>WebSite Design & Development</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "180px" }}>
              <Card.Img src="https://picsum.photos/seed/picsum/200" />
              <Card.Body>
                <Card.Title>WebSite Design & Development</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel>
      </Container>
      <Container className="text-center pt-3">
        <p>It is a long established</p>
        <h4>Porfolio / Case Studies</h4>
        <Row className="pt-4">
          <div className="col-md-4">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </div>
          <div className="col-md-4">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </div>
          <div className="col-md-4">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </div>
        </Row>
      </Container>
      <Container className="text-center pt-3 pb-5">
        <p>It is a long established</p>
        <h4>Developers On Demand</h4>
        <Row className="pt-4">
          <div className="col-md-4">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </div>
          <div className="col-md-4">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </div>
          <div className="col-md-4">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Content;
