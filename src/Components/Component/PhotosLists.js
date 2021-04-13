import React, { Component } from "react";

class PhototsLists extends Component {
  render() {
    const clickHandler = () => {
      console.log("click");
    };

    return (
      <div>
        <button onClick={clickHandler}>
          /photos
        </button>
      </div>
    );
  }
}

export default PhototsLists;
