import React from 'react';

const UserContext = React.createContext({
  id: "",
  email: "",
  setUser: () => undefined,
  // handleLogout: () => undefined
});

export default UserContext;
