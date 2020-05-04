import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const CommentForm = (props) => {
  return (
    <InputGroup>
      <FormControl
        as="textarea"
        rows="3"
        placeholder="Add a comment..."
        onChange={props.onChange}
        value={props.value}
      />
      <InputGroup.Append>
        <Button variant="dark" type="submit" onClick={props.onClick}>
          Submit
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default CommentForm;
