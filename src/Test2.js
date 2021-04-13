import React, { Component } from "react";

class Test1 extends Component {
  buttonHandler = () => {
    console.log("work");
  };

  render() {
    console.log("render 1");
    return (
      <>
        {console.log("render 2")}
        <div>
          <button onClick={this.buttonHandler}> Push </button>
        </div>
        <div></div>
      </>
    );
  }
}

export default Test1;
