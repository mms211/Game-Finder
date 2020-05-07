import React, { useState, useEffect } from "react";
import Post from "../../Post";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import CardGroup from "react-bootstrap/CardGroup";
import API from "../../../utils/API";
import Header from "../../Header";
import NavBar from "../../NavBar";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    postType: "",
    showAll: true,
  });

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

  const filterPosts = (event) => {
    const { name } = event.target;
    switch (name) {
      case "player":
        setFilter({
          postType: "Looking for a player",
          showAll: false,
        });
        break;
      case "game":
        setFilter({
          postType: "Looking for a Game",
          showAll: false,
        });
        break;
      default:
        setFilter({
          postType: "",
          showAll: true,
        });
    }
  };
  const onClick = (event) => {
    filterPosts(event);
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="homeCont">
        <Container>
          <DropdownButton
            className="dropdown"
            variant="dark"
            id="dropdown-item-button"
            title="Filter By Type"
          >
            <Dropdown.Item as="button" name="player" onClick={onClick}>
              Looking for a Player
            </Dropdown.Item>
            <Dropdown.Item as="button" name="game" onClick={onClick}>
              Lookng for a Game
            </Dropdown.Item>
            <Dropdown.Item as="button" name="all" onClick={onClick}>
              View All Posts
            </Dropdown.Item>
          </DropdownButton>

          <CardGroup>
            {posts.length ? (
              <Row>
                {posts.map((post) =>
                  filter.showAll ? (
                    <Post
                      key={post._id}
                      title={post.title}
                      username={post.user}
                      body={post.body}
                      postType={post.postType}
                      createdAt={post.createdAt}
                      id={post._id}
                    >
                      <Button variant="light"
                      href={`/postview/${post._id}`}>
                        <img
                          src={require("../../../assets/images/view.png")}
                          alt="view button"
                          className="iconButton"
                        />
                        {" "}View Post
                      </Button>
                    </Post>
                  ) : post.postType === filter.postType ? (
                    <Post
                      key={post._id}
                      title={post.title}
                      username={post.user}
                      body={post.body}
                      postType={post.postType}
                      createdAt={post.createdAt}
                      id={post._id}
                    >
                      <Button variant="light"
                      href={`/postview/${post._id}`}
                      >
                        <img
                          src={require("../../../assets/images/view.png")}
                          alt="view button"
                          className="iconButton"
                        />
                        {" "}View Post
                      </Button>
                    </Post>
                  ) : (
                    <p></p>
                  )
                )}
              </Row>
            ) : (
              <h3>Be a trendsetter, make a post!</h3>
            )}
          </CardGroup>
        </Container>
      </div>
    </>
  );
};

export default Home;
