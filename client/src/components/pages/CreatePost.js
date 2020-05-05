import React, { useState, useContext } from "react";
import API from "../../utils/API";
import CreateForm from "../CreateForm";
import { useHistory } from 'react-router-dom';
import UserContext from '../../utils/UserContext'

const CreatePost = () => {
  const [formObject, setFormObject] = useState([]);
  const history = useHistory();
  /**
   * UserContext.Provider is wrapped around the <Router> in src/App.js.
   * So anywhere within that file tree, you should be able to access
   * current user id or email like so:
   */
  const { id } = useContext(UserContext);

  console.log(id);
  // console.log(email);
  // expected output: current logged in user's userId.

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.savePost({
      postType: formObject.postType,
      userId: id,
      // email: email,
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
