import React, { Component } from "react";

class CommentsList extends Component {
  render() {
    const clickHandler = () => {
      console.log("click");
    };

    return (
      <div>
        <button onClick={clickHandler}>
          /comments
        </button>
      </div>
    );
  }
}

export default CommentsList;
