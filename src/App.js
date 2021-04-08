import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/todos";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  const fetchTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1 onClick={incCounter}>HELLO REACT {counter}</h1>
      {!!todos.length && (
        <div>
          <hr />
          <h3>{todos[0].title} - {todos[0].completed.toString()}</h3>
          <hr />
        </div>
      )}
    </>
  );
};

export default App;
