import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from '../../utils/API';

const GameSearchForm = () => {
  const [search, setSearch] = useState("");
  const [searchState, setSearchState] = useState("ready");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchState("working");
    const url = `https://www.boardgameatlas.com/api/search?name=${search}&client_id=`;
    API.boardGameAtlasSearch(url)
      .then((res) => {
        console.log(res);
      })
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="gameInput">
          <Form.Control
            type="text"
            placeholder="Search for a Game..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit" onClick={handleFormSubmit}>Search</Button>
      </Form>
    </div>
  )
}

export default GameSearchForm;
