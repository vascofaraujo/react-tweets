import React, { useState } from "react";
import Person from "./fetchRandomUser";

function App(){

  const [users] = useState([
    {name: "devEd", message: "Hello World", likes: "3"},
    {name: "Cristiano Ronaldo", message: "HODL", likes: "76k"},
    {name: "ASDF", message: "dd", likes: "1"}
  ]);

  return(
    <div className="app">
      <div>
        <h1>Very important Tweets</h1>
      </div>
      <div>
        <Person  />
        <Person />
        <Person />
      </div>
    </div>
  );
}

export default App;
