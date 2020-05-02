import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Comment(props) {
    return (
        <Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>comment goes here</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    );
  }

export default Comment;