import React, { useState } from "react";
import Login from "../Login";
import Btn from "../Button";

const Authentication = () => {
  const [authObject, setAuthObject] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setAuthObject({ ...authObject, [name]: value });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("email:", authObject.email, "password:", authObject.password);
  }

  return (
    <>
      <Login onSubmit={onSubmit} handleInputChange={handleInputChange} />
      <Btn title={"Already have an account?"} onClick={() => console.log("switch to login")}/>
    </>
  );
}
export default Authentication;
