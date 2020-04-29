import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Comment() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Leave a Comment
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Leave A Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    View All Comments
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm a comment</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Comment;