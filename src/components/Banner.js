import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/dehydration.jpg")}
                alt="banner"
                rounded
              />
              <Carousel.Caption>
                <h3>FlavorBurst Dehydrated Produce.</h3>
                <p className="d-none d-sm-block">
                  Explore nutritious dehydrated fruits and veggies for tasty,
                  convenient meals and snacks.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/dried fruits.jpeg")}
                alt="banner1"
                rounded
              />
              <Carousel.Caption>
                <h3>FlavorBurst Dehydrated Produce.</h3>
                <p className="d-none d-sm-block">
                  Explore nutritious dehydrated fruits and veggies for tasty,
                  convenient meals and snacks.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/dried fruits 1.jpg")}
                alt="banner2"
                rounded
              />
              <Carousel.Caption>
                <h3>FlavorBurst Dehydrated Produce.</h3>
                <p className="d-none d-sm-block">
                  Explore nutritious dehydrated fruits and veggies for tasty,
                  convenient meals and snacks.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">NutriFusion Collection</h2>
        <p className="lead.text-muted">
          Our Dried Delights, where the goodness of dried fruits and vegetables
          meets innovative nutrition.
        </p>
      </div>
    </Container>
  );
};

export default Banner;
