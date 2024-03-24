import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const SpecialWeek = () => {
  const [show, setShow] = useState(false);

  return (
    <section id="musttry" className="my-3">
      <div className="text-center my-2 py-3">
        <h2 className="display-5 text-primary">
          <i class="bi bi-calendar-heart"></i> Featured Flavor of the Week!!
        </h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <Image
              src={require("../assets/sweet dried mango.jpg")}
              fluid={true}
              alt="mangobliss"
              rounded
            ></Image>
          </Col>
          <Col md={5}>
            <div className="p-3">
              <h2 className="h1 text-center">Mango Bliss</h2>
              <p className="lead.text-muted" style={{ textAlign: "justify" }}>
                "Mango Bliss" encapsulates the heavenly essence of ripe, sweet
                mangoes in every delightful bite. Indulge in a tropical paradise
                as you savor the chewy texture and intense fruity flavor of our
                premium dried mango slices. Perfect for snacking, baking, or
                adding a burst of sunshine to your favorite recipes, "Mango
                Bliss" is a delectable treat that will transport your taste buds
                to a state of pure joy and satisfaction.
              </p>
              <Button variant="primary" onClick={() => setShow(true)}>
                <i class="bi bi-cart4"></i> Buy Now
              </Button>
            </div>
          </Col>
        </Row>

        <ToastContainer
          className="position-fixed center-0 end-0 p-3"
          position={"top-center"}
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Hey You!!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>This is Coming to you soon!!!</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default SpecialWeek;
