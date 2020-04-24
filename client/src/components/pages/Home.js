import React, { useState, useEffect } from "react";
import Post from "../Post";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";
import Btn from "../Button";

const Home = () => {
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
    <Container>
      <Row className="justify-content-md-center">
        {posts.length ? (
          <>
            {posts.map((post) => (
              <div key={post._id}>
                <Post
                  title={post.title}
                  username={post.user}
                  body={post.body}
                  postType={post.postType}
                ></Post>
                <Col>
                  <Btn
                    title="Delete Post"
                    onClick={() => deletePost(post._id)}
                  ></Btn>
                </Col>
              </div>
            ))}
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Row>
    </Container>
  );
};

export default Home;
