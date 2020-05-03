import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Comment = (props) => {
  console.log("comment props:", props);
  return (
    <Card.Body>
      <ListGroup variant="flush">
        {props.commentData.length ? (
          <>
            {props.commentData.map((comment) =>
              comment.postId === props.postId ? (
                <div key={comment._id}>
                  <ListGroup.Item>
                    {comment.body} {comment.username}
                  </ListGroup.Item>
                </div>
              ) : (
                <h3>No Results to Display</h3>
              )
            )}
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </ListGroup>
    </Card.Body>
  );
};

export default Comment;
