import React from "react";
import "./App.css";

const App = () => {
  const firstName = React.useRef();
  const onSubmit = (evt) => {

    evt.preventDefault();
    console.log({firstName});
    firstName.current.value = ''

    //1

    //   const {
    //     target: {
    //       elements: { firstName, lastName, email, age, pass },
    //     },
    //   } = evt;

    //   alert(
    //     JSON.stringify(
    //       {
    //         firstName: firstName.value,
    //         lastName: lastName.value,
    //         email: email.value,
    //         age: age.value,
    //         pass: pass.value,
    //       },
    //       null,
    //       2
    //     )
    //   );
  };

  return (
    <div>
      <h1> INPUTS </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="enter your first name"/>
        <br />
        <br />
        <input type="text" name="lastName" placeholder="enter your last name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="enter your email" />
        <br />
        <br />
        <input type="number" name="age" placeholder="enter your age" />
        <br />
        <br />
        <input type="password" name="pass" placeholder="enter your pass" />
        <br />
        <br />

        <button ref={firstName} onClick={onSubmit} type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
