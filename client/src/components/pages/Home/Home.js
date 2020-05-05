import React, { useState, useEffect } from "react";
import Post from "../../Post";
import Btn from "../../Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import API from "../../../utils/API";
import "./Home.css";

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

  return (
    <div className="homeCont">
    <Container>
      <Row className="justify-content-md-center home-row">
        {posts.length ? (
          <>
            {posts.map((post) => (
              <div key={post._id}>
                <Post
                  title={post.title}
                  username={post.user}
                  body={post.body}
                  postType={post.postType}
                  createdAt={post.createdAt}
                  id={post._id}
                >
                  <Btn variant="dark" title={"View Post"} href={`/postview/${post._id}`} ></Btn>
                </Post>
              </div>
            ))}
          </>
        ) : (
          <h3>Be a trendsetter, make a post!</h3>
        )}
      </Row>
    </Container>
    </div>
  );
};

export default Home;
