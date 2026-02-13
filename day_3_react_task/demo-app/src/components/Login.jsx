// Login.jsx
import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const { user, login, logout } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (user) {
    return (
      <div>
        <p>You are logged in as {user.name}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Login</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={() => login(name, email)}>Login</button>
    </div>
  );
}

export default Login;
