import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App (){


return(
<input type="number" min={5} style={{border: "3px solid green"}}/>        
)
};

root.render(<App/>)