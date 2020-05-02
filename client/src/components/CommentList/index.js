import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CommentForm from "../CommentForm";
import Comment from "../Comment";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";

const CommentList = () => {
  const { email } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [commentObject, setCommentObject] = useState({
    author: email,
    body: "",
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
    const { author, body } = commentObject;
    if (!author || !body) return;
    
    API.saveComment({
      username: email,
      body: body,
    })
    .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCommentObject({ ...commentObject, body: value });
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
