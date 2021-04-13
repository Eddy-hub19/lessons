import React, { Component } from "react";

class AlbumsList extends Component {
  render() {
    const clickHandler = () => {
      console.log("click");
    };

    return (
      <div>
        <button onClick={clickHandler}>
          /albums
        </button>
      </div>
    );
  }
}

export default AlbumsList;
