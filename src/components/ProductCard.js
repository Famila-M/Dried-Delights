import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const ProductCard = ({ imageSrc, title, desc }) => {
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Added!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enjoy your day with our dried delights!!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <Card className="m-3">
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <div className="text-center">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProductCard;
