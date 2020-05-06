import React, { useState, useEffect } from "react";
import Post from "../../Post";
import Btn from "../../Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
      <div className="profile-page">
        <Container>
          {posts.length ? (
            <Row className="justify-content-md-center home-row">
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
                      <Btn
                        variant="dark"
                        title={"Delete Post"}
                        onClick={() => deletePost(post._id)}
                      ></Btn>{" "}
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
        </Container>
      </div>
    </>
  );
};

export default Profile;
