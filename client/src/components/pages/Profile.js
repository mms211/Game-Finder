import React from "react";
import Post from "../Post";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Profile() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Row>
    </Container>
  );
}

export default Profile;