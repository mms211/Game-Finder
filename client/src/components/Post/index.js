import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./style.css";
import Moment from "react-moment";
import CommentList from "../CommentList";

function Post(props) {
  const dateToFormat = props.createdAt;

  return (
    <Card className="post-wrapper">
      <Card.Header>
        <Image
          src={
            props.postType === "Looking for a player"
              ? require("../../assets/images/player.png")
              : require("../../assets/images/game.png")
          }
          className="post-icon"
        />{" "}
        {props.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.body}</Card.Text>
        <Card.Text>
          <small className="text-muted">
            {props.username} {"- "}
            Posted{" "}
            <Moment fromNow ago>
              {dateToFormat}
            </Moment>{" "}
            ago{" "}
          </small>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {props.children}
        <CommentList postId={props.id} />
      </Card.Footer>
    </Card>
  );
}

export default Post;
