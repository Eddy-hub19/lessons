import React, { Component } from "react";

class TodosLists extends Component {
  render() {
    const clickHandler = () => {
      console.log("click");
    };

    return (
      <div>
        <button onClick={clickHandler}>
          /todos
        </button>
      </div>
    );
  }
}

export default TodosLists;
