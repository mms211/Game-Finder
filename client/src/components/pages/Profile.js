import React from "react";
import Post from "../Post";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Post />
      </Row>
    </Container>
  );
}

export default Profile;