import React, { useState } from "react";
import "./App.css";

// Controled Inputs - коли ми самі все котролюємо
// Uncontrolled - коли керує браузер

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    pass: "",
  });

  const handleSumbit = () => {
    alert(JSON.stringify(userData, null, 2));

    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      pass: "",
    });
  };

  const updateUserData = (e) => {
    const {
      target: { value, name },
    } = e;

    if(name === 'firstName' && value.split(' ').length > 1) {
      setUserData({ ...userData, [name]: value, lastName: '' });

      return
    }

    if (name == "age" && Number(value) > 30) {
      return;
    }

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h1> INPUTS </h1>
      <input
        value={userData.firstName}
        onChange={updateUserData}
        type="text"
        name="firstName"
        placeholder="enter your first name"
      />
      <br />
      <br />
      <input
        value={userData.lastName}
        onChange={updateUserData}
        lastName
        type="text"
        name="lastName"
        placeholder="enter your last name"
      />
      <br />
      <br />
      <input
        value={userData.email}
        onChange={updateUserData}
        email
        type="email"
        name="email"
        placeholder="enter your email"
      />
      <br />
      <br />
      <input
        value={userData.age}
        onChange={updateUserData}
        age
        type="number"
        name="age"
        placeholder="enter your age"
      />
      <br />
      <br />
      <input
        value={userData.pass}
        onChange={updateUserData}
        pass
        type="password"
        name="pass"
        placeholder="enter your pass"
      />
      <br />
      <br />

      {userData.age > 20 ? <h3> you are old </h3> : <h3> you are young </h3>}

      <button onClick={handleSumbit}>submit</button>
    </div>
  );
}

export default App;
