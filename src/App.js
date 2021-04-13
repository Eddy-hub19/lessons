import React, { useState, useEffect } from "react";
import ListsPost from "./Components/Component/Component";

const url = "https://jsonplaceholder.typicode.com/todos/";

const App = () => {
  return (
    <div>
      <ListsPost />
      
    </div>
  );
};
export default App;
