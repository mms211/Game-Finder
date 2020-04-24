import React, { useState } from "react";
import API from "../../utils/API";
import CreateForm from "../CreateForm";
import { useHistory } from 'react-router-dom';

const CreatePost = () => {
  const [formObject, setFormObject] = useState([]);
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.savePost({
      postType: formObject.postType,
      user: "username goes here",
      title: formObject.title,
      body: formObject.body,
    })
    .then(() => history.push("/"))
    .catch((err) => console.log(err));
  }

  return (
    <CreateForm
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      disabled={!(formObject.title && formObject.body)}
    />
  );
}

export default CreatePost;
