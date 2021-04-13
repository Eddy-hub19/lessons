import React, { Component } from "react";

class UsersLists extends Component {
  render() {
    const clickHandler = () => {
      console.log('click');
    };

    return (
      <div>
        <button onClick={clickHandler}>
          /users
        </button>
      </div>
    );
  }
}

export default UsersLists;
