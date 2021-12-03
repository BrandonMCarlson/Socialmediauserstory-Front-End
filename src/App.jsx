import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const registerUser = async () => {
    await axios
      .post("http:localhost:5000/api/users", {
        name: "Cust0",
        email: "cust0@cust0.com",
        password: "cust0",
      })
      .then((res) => {
        localStorage.setItem("token", res.headers["x-auth-token"]);
        const user = jwtDecode(localStorage.getItem("token"));
        setUser(user);
        console.log("token", res.headers["x-auth-token"]);
      })
      .catch((error) => console.log(error));
    console.log(user);
  };

  const loginUser = async () => {
    await axios
        .post("http:localhost:5000/api/auth", {
          email: "cust0@cust0.com",
          password: "cust0",
        })
        .then((res) => {
          localStorage.setItem("token", res.data);
          const user = jwtDecode(localStorage.getItem("token"));
        })
        .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
