import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import API from "../../utils/API";

function PrivateRoute({ children, ...rest }) {
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return checkTokens();
  }, []);

  const checkTokens = () => {
    API.checkTokens()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        setRedirect(true);
        setLoading(false);
      });
  };

  return (
    <Route
      {...rest}
      render={() =>
        loading ? null : !redirect ? children : <Redirect to="/auth" />
      }
    />
  );
}
export default PrivateRoute;
