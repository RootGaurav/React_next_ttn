import React from "react";

import ThemeProvider from "./contexts/ThemeProvider.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";
import ThemedBox from "./components/ThemedBox.jsx";
import Toggle from "./components/Toggle.jsx";
import UserProvider from "./contexts/UserProvider.jsx";
import Login from "./components/Login.jsx";
import UserProfile from "./components/UserProfile.jsx";
function App() {
  return (
    // <ThemeProvider>
          

    //   <h1>Theme Context Demo</h1>
    //   <ThemeToggler />
    //   <ThemedBox />
    //   <Toggle/>
    // </ThemeProvider>
    <UserProvider>
      <h1>User Context Demo</h1>
      <Login />
      <UserProfile />
    </UserProvider>
  );
}

export default App;



