import { useState } from "react";
function Toggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h2>{isLoggedIn ? "Logout" : "Login"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle</button>
    </div>
  );
}
export default Toggle;
