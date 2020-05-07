import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import Moment from "react-moment";
import CommentList from "../CommentList";

function Post(props) {
  const dateToFormat = props.createdAt;

  return (
    <Card className="post-wrapper">
      <Card.Header>
        <Row justify-content-md-center>
          <Col>
            <Image
              src={
                props.postType === "Looking for a player"
                  ? require("../../assets/images/player.png")
                  : require("../../assets/images/game.png")
              }
              className="post-icon"
            />{" "}
            <Card.Text>
              <small className="text-muted">{props.postType}</small>
            </Card.Text>
          </Col>
          <Col>
            <Card.Text>
              <small className="text-muted username">{props.username}</small>
              <br />
              <small>
                Posted{" "}
                <Moment fromNow ago>
                  {dateToFormat}
                </Moment>{" "}
                ago{" "}
              </small>
            </Card.Text>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="center-icons">
        {props.children}
        <CommentList postId={props.id} />
      </Card.Footer>
    </Card>
  );
}

export default Post;
