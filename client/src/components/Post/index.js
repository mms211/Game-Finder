import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./style.css";
import Moment from "react-moment";
import CommentList from "../CommentList";

function Post(props) {
  const dateToFormat = props.createdAt;

  return (
    <>
      <Card className="text-center post-wrapper" border="secondary">
        <Card.Header>
          <Moment fromNow ago>
            {dateToFormat}
          </Moment>{" "}
          ago
        </Card.Header>
        <Card.Body>
          <Image
            src={
              props.postType === "Looking for a player"
                ? require("../../assets/images/player.png")
                : require("../../assets/images/game.png")
            }
            className="post-icon"
          />
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.postType}
          </Card.Subtitle>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {props.children}
          <CommentList postId={props.id} />
        </Card.Footer>
      </Card>
    </>
  );
}

export default Post;
