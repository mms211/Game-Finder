import React from "react";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";

const Comment = (props) => {
  return (
    <Card>
      {props.commentData.length ? (
        <>
          {props.commentData.map((comment) =>
            comment.postId === props.postId ? (
              <>
                <Card.Header></Card.Header>
                <Card.Body key={comment._id}>
                  <blockquote className="blockquote mb-0">
                    <p> {comment.body} </p>
                    <footer
                      style={{ fontStyle: "italic" }}
                      className="blockquote-footer"
                    >
                      {comment.username}
                      {",  "}
                      <Moment fromNow ago>
                        {comment.createdAt}
                      </Moment>{" "}
                      ago
                    </footer>
                  </blockquote>
                </Card.Body>
              </>
            ) : (
              <h3>No Comments to Display</h3>
            )
          )}
        </>
      ) : (
        <h3>No Comments to Display</h3>
      )}
    </Card>
  );
};

export default Comment;
