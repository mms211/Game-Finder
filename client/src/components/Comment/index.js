import React from "react";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import "./style.css";

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
              <p className="no-comment">No Comments yet. Stay tuned!</p>
            )
          )}
        </>
      ) : (
        <p className="no-comment">No Comments yet. Stay tuned!</p>
      )}
    </Card>
  );
};

export default Comment;
