import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

function Post() {
  return (
    <Card style={{ width: "18rem" }} className="post-wrapper">
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Looking for Player</Card.Subtitle>
        <Card.Text>
          Join our super fun game!
        </Card.Text>
        <Card.Link href="#">Game Title</Card.Link>
        <Card.Link href="#">Join Game!</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Post;
