import React, { useState } from 'react';

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';

import API from '../../utils/API';

const GameSearchForm = () => {
  const [search, setSearch] = useState("");
  const [searchState, setSearchState] = useState("ready");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchState("working");
    const url = `https://www.boardgameatlas.com/api/search?name=${search}`;
    API.boardGameAtlasSearch(url)
      .then((res) => {
        setSearchState("resolved");
        setResults(res.data);
      })
  }

  return (
    <div>
      <Form>
        <Form.Row>
          <Col>
            <Form.Group controlId="gameInput">
              <Form.Control
                type="text"
                placeholder="Search for a Game..."
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button className="btn-dark" type="submit" onClick={handleFormSubmit}>Search</Button>
          </Col>
        </Form.Row>
      </Form>
      {searchState !== "resolved"
        ? ""
        : <ListGroup>
          {results.map(game => (
            <ListGroup.Item key={game.id}>
              {game.name}
            </ListGroup.Item>
          ))}
        </ListGroup>}
    </div>
  )
}

export default GameSearchForm;
