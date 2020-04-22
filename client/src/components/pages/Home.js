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
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      {console.log(posts.data)}
      <Row className="justify-content-md-center">
        {posts.length ? (
          <>
            {posts.map((post) => (
              <Post
                key={post._id}
                title={post.title}
                username={post.user}
                body={post.body}
                postType={post.postType}
              ></Post>
            ))}
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Row>
    </Container>
  );
}

export default Home;
