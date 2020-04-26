// Login.jsx
import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API";

function PrivateRoute({ children, ...rest }) {
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);

  ///might not need
  const history = useHistory();

  useEffect(() => {
    return checkTokens();
  }, []);

  const checkTokens = () => {
    API.checkTokens()
      .then((res) => {
        console.log("API res:", res);
        if (res.status === 200) {
          setLoading(false);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error("redirect error", err);
        setRedirect(true);
        setLoading(false);
      });
  };

  return (
    <Route
      {...rest}
      render={() =>
        loading
          ? console.log("loading", loading)
          : !redirect
          ? (console.log("redirect should be false", redirect), children)
          : redirect
          ? (console.log("redirect should be true", redirect),
            (<Redirect to="/auth" />))
          : console.log("y tho")
      }
    />
  );
}
export default PrivateRoute;
