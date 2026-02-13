import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Toggle(){   
      const { theme } = useContext(ThemeContext);
    
      const styles = {
        padding: "20px",
        marginTop: "20px",
        background: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      };  
    const  handle_click=()=>{
        setisloggedin((prev)=>!prev);
        setMsg(!isloggedin?"Welcome back":"Please login");
};
    const [isloggedin, setisloggedin] = useState(false);
    const [msg, setMsg] = useState("Please Login");
      return(
        <div style={styles}>
            <h1>
            {msg}
        </h1>
        <button onClick={handle_click}> {!isloggedin ? "Login" : "Logout "}
</button>
        </div>
       
         );
}
export default Toggle