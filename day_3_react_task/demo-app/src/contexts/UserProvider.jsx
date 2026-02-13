import React, { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [user, setUser] = useState(null); 

  const login = (name, email) => {
    setUser({ name, email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
