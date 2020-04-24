import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

function Post(props) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="post-wrapper">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.username}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2">{props.postType}</Card.Subtitle>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Post;
