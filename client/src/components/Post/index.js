import React from "react";
import Card from "react-bootstrap/Card";
import Btn from "../Button";
import "./style.css";
import Moment from 'react-moment';

function Post(props) {
  const dateToFormat = props.createdAt
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          {props.username}{" "}
          <Moment fromNow ago>{dateToFormat}</Moment>
          {" "}ago 
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.postType}
          </Card.Subtitle>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Btn variant="dark" title={"Delete"} onClick={props.onClick}></Btn>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Post;
