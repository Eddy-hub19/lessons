import React, { Component, useState, useEffect } from "react";

let interval;

// class Comp extends Component {
//   componentDidMount() {
//     interval = setInterval(() => {
//       console.log("fetching new data about airplanes");
//     }, 2000);
//     console.log("component did mount child");
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");

//     clearInterval(interval);
//   }

//   render() {
//     console.log("child render");
//     return <h1> Child </h1>;
//   }
// }

// class App extends Component {
//   state = {
//     counter: 0,
//   };

//   //Ця штука потрібна для того,щоб реагувати на якісь внутрішні і звонішні зміни,після рірендеру

//   componentDidMount() {
//     console.log("component did mount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("component did update");
//   }

//   incCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   render() {
//     console.log("parent render");
//     return (
//       <>
//         <h1 onClick={this.incCounter}>LifeCycle {this.state.counter}</h1>
//         {!!(this.state.counter % 2) && <Comp />}
//       </>
//     );
//   }
// }
// export default App;

const Comp = () => {
  useEffect(() => {
    interval = setInterval(() => {
      console.log("fetching new data about airplanes");
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return <h1>child</h1>;
};
const App = () => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  //use Effect - штука де ми записуємо побічні дії

  useEffect(() => {
    console.log("did mount parent");
  }, []);

  useEffect(() => {
    return () => console.log("did mount parent");
  }, []);

  useEffect(() => {
    console.log("did update parent");

    return () => {
      console.log("parent unmount");
    };
  }, [counter]);
  return (
    <>
      <h1 onClick={incCounter}>LifeCycle {counter}</h1>
      {!!(counter % 2) && <Comp />}
    </>
  );
};

export default App;
