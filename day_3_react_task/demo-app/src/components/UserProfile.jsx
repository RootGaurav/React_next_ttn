// UserProfile.jsx
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>No user logged in.</p>;
  }

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
