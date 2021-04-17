import React from "react";
import "./App.css";

// Uncontroled Inputs

const App = () => {
  const firstName = React.useRef();
  const LastName = React.useRef();
  const email = React.useRef();
  const age = React.useRef();
  const password = React.useRef();

  // const inputs = React.useRef({
  //   firstName: React.useRef(),
  //   LastName: React.useRef(),
  //   email: React.useRef(),
  //   age: React.useRef(),
  //   password: React.useRef(),
  // });

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log({ firstName });

    // firstName.current.style.background = "red";
    // firstName.current.focus();
    // firstName.current.value = ''

    //1

    //   const {
    //     target: {
    //       elements: { firstName, lastName, email, age, pass },
    //     },
    //   } = evt;

    alert(
      JSON.stringify(
        {
          firstName: firstName.current.value,
          lastName: LastName.current.value,
          email: email.current.value,
          age: age.current.value,
          pass: password.current.value,
        },
        null,
        2
      )
    );

    firstName.current.value = "";
    LastName.current.value = "";
    email.current.value = "";
    age.current.value = "";
    password.current.value = "";

    alert("Human your data saved");
  };

  return (
    <div>
      <h1> INPUTS </h1>
      <form onSubmit={onSubmit}>
        <input
          ref={firstName}
          type="text"
          name="firstName"
          placeholder="enter your first name"
        />
        <br />
        <br />
        <input
          ref={LastName}
          type="text"
          name="lastName"
          placeholder="enter your last name"
        />
        <br />
        <br />
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="enter your email"
        />
        <br />
        <br />
        <input
          ref={age}
          type="number"
          name="age"
          placeholder="enter your age"
        />
        <br />
        <br />
        <input
          ref={password}
          type="password"
          name="pass"
          placeholder="enter your pass"
        />
        <br />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
