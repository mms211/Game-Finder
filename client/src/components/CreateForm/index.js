import React from "react";
import Form from "react-bootstrap/Form";
import "./style.css";

function CreateForm() {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Add a Title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>What Game are you Playing?</Form.Label>
        <Form.Control type="text" placeholder="Title of Game" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select a Post Type</Form.Label>
        <Form.Control as="select">
          <option>Looking for a Player</option>
          <option>Looking for a Game</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    </Form>
  );
}

export default CreateForm;
