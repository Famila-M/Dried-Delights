import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section id="about" className="bg-light py-3">
      <div className="text-center my-2 py-3">
        <h2 className="display-5 text-primary">About Us</h2>
      </div>

      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <div className="p-3">
              {/* <h2 className="h1 text-center"></h2> */}
              <p className="lead.text-muted" style={{ textAlign: "justify" }}>
                Welcome to Dried Delights, your ultimate destination for premium
                quality dried fruits and vegetables! At Dried Delights, we are
                passionate about providing you with the finest selection of
                dehydrated produce that captures the essence of nature's
                goodness.
                <br />
                <br />
                Our journey began with a vision to offer healthy and convenient
                snack options that are not only delicious but also packed with
                essential nutrients. We carefully source the freshest fruits and
                vegetables, and through our state-of-the-art dehydration
                process, we preserve their natural flavors, colors, and
                nutritional value.
                <br />
                <br />
                What sets Dried Delights apart is our commitment to quality and
                sustainability. We prioritize using organic and non-GMO
                ingredients whenever possible, ensuring that every bite of our
                dried fruits and vegetables is free from additives and
                artificial preservatives. We believe in promoting a healthy
                lifestyle while also being mindful of our impact on the
                environment.
                <br />
                <br />
                Whether you're looking for a quick and nutritious snack on the
                go, ingredients to enhance your culinary creations, or wholesome
                additions to your pantry, Dried Delights has you covered. Our
                diverse range of products includes everything from tangy dried
                mango slices to crispy apple chips and vibrant beetroot powder.
                <br />
                <br />
                Join us on a journey of flavor and wellness with Dried Delights.
                Explore our collection, indulge in nature's bounty, and
                experience the joy of wholesome snacking. Thank you for choosing
                Dried Delights – where every bite is a delight!
              </p>
            </div>
          </Col>

          <Col md={5}>
            <Image
              src={require("../assets/about-us.jpeg")}
              fluid={true}
              alt="aboutus"
              rounded
            ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
