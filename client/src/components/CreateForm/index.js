import React from "react";
import GameSearchForm from '../GameSearchForm';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./style.css";

function CreateForm(props) {
  return (
    <div className="createForm">
    <Container className="contForm">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Title your post" name="title" onChange={props.handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows="3" name="body" onChange={props.handleInputChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label> Post Type: </Form.Label>
          <Row>
            <Col sm={10} onChange={props.handleInputChange}>
              <Form.Check
                type="radio"
                label="Looking for a player"
                name="postType"
                id="formHorizontalRadios1"
                value="Looking for a player"
              />
              <Form.Check
                type="radio"
                label="Looking for a game"
                name="postType"
                id="formHorizontalRadios2"
                value="Looking for a Game"
              />
            </Col>
          </Row>
        </Form.Group>
        <GameSearchForm />
        <Button type="submit" disabled={props.disabled} onClick={props.handleFormSubmit}>Create Post</Button>
      </Form>
    </Container>
    </div>
  );
}

export default CreateForm;