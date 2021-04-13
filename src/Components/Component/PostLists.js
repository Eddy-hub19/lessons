import React, { Component } from "react";

class PostList extends Component {
  state = {
    
  }
  render() {
    const iterPosts = () => {
      console.log("red");
    };
    return (
      <div>
        <button onClick={iterPosts}>/posts</button>
      </div>
    );
  }
}
export default PostList;
