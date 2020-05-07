import React, { useState, useEffect } from "react";
import Post from "../../Post";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import "./Profile.css";
import NavBar from "../../NavBar";
import Header from "../../Header";
import API from "../../../utils/API";

import "./Profile.css";

const Profile = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    API.getAllPosts()
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id) => {
    API.deletePost(id)
      .then((res) => loadPosts())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <CardGroup>
          {posts.length ? (
            <Row>
              {posts.map((post) =>
                post.user === props.user.email ? (
                  <div key={post._id}>
                    <Post
                      title={post.title}
                      username={post.user}
                      body={post.body}
                      postType={post.postType}
                      createdAt={post.createdAt}
                      id={post._id}
                    >
                      <Button variant="light">
                        <img
                          src={require("../../../assets/images/delete.png")}
                          alt="delete button"
                          onClick={() => deletePost(post._id)}
                          className="iconButton"
                        />
                        {" "}Delete Post
                      </Button>
                    </Post>
                  </div>
                ) : (
                  <h3></h3>
                )
              )}
            </Row>
          ) : (
            <h3>Be a trendsetter, make a post!</h3>
          )}
        </CardGroup>
      </Container>
    </>
  );
};

export default Profile;
