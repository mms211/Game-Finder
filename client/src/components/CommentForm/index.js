import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CommentForm = (props) => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="Add a comment..."
          onChange={props.onChange}
        />
        <Button variant="dark" type="submit" onClick={props.onClick}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CommentForm;
