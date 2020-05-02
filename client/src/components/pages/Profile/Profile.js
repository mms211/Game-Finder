import React from "react";
import Post from "../../Post";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
    <Container>
      <Row className="justify-content-md-center">
        <Post
          title="Let's play a game"
          username="brittanie_boyko"
          postType="Looking for player"
          body="Let's play a game!"
        ></Post>
        <Post
          title="Let's play a game"
          username="brittanie_boyko"
          postType="Looking for player"
          body="Let's play a game!"
        ></Post>
        <Post
          title="Let's play a game"
          username="brittanie_boyko"
          postType="Looking for player"
          body="Let's play a game!"
        ></Post>
        <Post
          title="Let's play a game"
          username="brittanie_boyko"
          postType="Looking for player"
          body="Let's play a game!"
        ></Post>
      </Row>
    </Container>
    </div>
  );
};

export default Profile;
