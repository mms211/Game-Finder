import React, { useState, useContext } from "react";
import API from "../../utils/API";
import CreateForm from "../CreateForm";
import { useHistory } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import NavBar from "../NavBar";
import Header from "../Header";

const CreatePost = () => {
  const [formObject, setFormObject] = useState([]);
  const history = useHistory();
  const { id, email } = useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.savePost({
      postType: formObject.postType,
      userId: id,
      user: email,
      title: formObject.title,
      body: formObject.body,
    })
      .then(() => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <NavBar />
      <CreateForm
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        disabled={!(formObject.title && formObject.body)}
      />
    </>
  );
};

export default CreatePost;
