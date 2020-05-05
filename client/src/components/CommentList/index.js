import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CommentForm from "../CommentForm";
import Comment from "../Comment";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";

const CommentList = (props) => {
  console.log(props);
  const { email } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [commentObject, setCommentObject] = useState({
    author: email,
    body: "",
  });
  const [responseData, setResponseData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    API.getCommentsByPost(props.postId)
      .then((res) => setResponseData(res.data.data))
      .catch((err) => console.log(err));
  };

  const submitComment = (event) => {
    event.preventDefault();
    const { author, body } = commentObject;
    if (!author || !body) return;

    API.saveComment({
      username: email,
      body: body,
      postId: props.postId,
    })
      .then(() => fetchComments())
      .then(() => setCommentObject({ body: "" }))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCommentObject({ ...commentObject, body: value, author: email });
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Comments
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave A Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentForm onClick={submitComment} onChange={handleInputChange} value={commentObject.body} />
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  View All Comments
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Comment commentData={responseData} postId={props.postId} />
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentList;
