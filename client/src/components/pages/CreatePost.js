import React, { useState } from "react";
import API from "../../utils/API";
import CreateForm from "../CreateForm";

function CreatePost() {
  const [formObject, setFormObject] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.savePost({
      postType: formObject.postType,
      user: "username goes here",
      title: formObject.title,
      body: formObject.body,
    })
      .then((res) => console.log(res))
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
