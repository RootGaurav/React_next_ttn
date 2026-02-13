import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    padding: "20px",
    marginTop: "20px",
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return <div style={styles}>Current Theme: {theme}</div>;
}

export default ThemedBox;
