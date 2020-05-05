import React, { useState, useEffect } from "react";
import Post from "../../Post";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Profile.css";
import API from "../../../utils/API";
import NavBar from "../../NavBar";

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
                      onClick={() => deletePost(post._id)}
                      id={post._id}
                    ></Post>
                  </div>
                ) : (
                  <></>
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
