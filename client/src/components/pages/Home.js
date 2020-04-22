import React, { useState, useEffect } from "react";
import Post from "../Post";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import API from "../../utils/API";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts() {
    API.getAllPosts()
    .then(res => {
      setPosts(res.data)
    })
    .catch(err => console.log(err));
};

  return (
    <Container>
      {console.log(posts.data)}
        {posts.length ? (
      <Row className="justify-content-md-center">
        {posts.map((post) => (
              <Post key={post._id} title={post.title}></Post>
            ))}
        </Row>
        ) : (
          <h3>No Results to Display</h3>
        )}
    </Container>
  );
}

export default Home;
