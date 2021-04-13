import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/todos/";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  const fetchTodos = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${counter}`); // 'https://jsonplaceholder.typicode.com/todos/2'
    const data = await response.json();

    // setTimeout(() => {
    setTodo(data);
    setIsLoading(false);
    // }, 1000);
  };
  useEffect(() => {
    fetchTodos();
    return () => {
      setTodo(null);
    };
  }, [counter]);

  return (
    <>
      <h1 onClick={incCounter}>HELLO REACT {counter}</h1>

      {!todo && isLoading && <h1> LOADING DATA... </h1>}

      {!!todo && (
        <>
          <hr />
          <h3>
            {todo.title} - {todo.completed.toString()} {todo.id}
          </h3>
          <hr />
        </>
      )}
    </>
  );
};

export default App;
