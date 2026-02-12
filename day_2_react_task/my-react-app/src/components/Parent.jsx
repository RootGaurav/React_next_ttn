import { useState } from "react";
function Parent() {
  const [msg, setMsg] = useState("Gaurav");
  return (
    <div>
      <h2>Parent</h2>
      <p>{msg}</p>
      <button onClick={() => setMsg("Gaurav Updated")}>Update</button>
    </div>
  );
}

export default Parent;
