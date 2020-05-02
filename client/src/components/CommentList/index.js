import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CommentForm from "../CommentForm";
import Comment from "../Comment";

const CommentList = (props) => {
  const [show, setShow] = useState(false);
  const [commentObject, setCommentObject] = useState({
    author: "",
    text: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = (id) => {
    console.log("fetch comments");
  };

  const submitComment = (event) => {
    event.preventDefault();
    console.log(commentObject);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCommentObject({ ...commentObject, text: value });
  };

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
          <CommentForm onClick={submitComment} onChange={handleInputChange} />
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  View All Comments
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Comment data={commentObject} />
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentList;
