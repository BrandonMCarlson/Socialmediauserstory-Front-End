import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import mainHeader from "./components/mainHeader";
import { Route, Routes } from "react-router";
import jwtDecode from "jwt-decode";

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
    registerUser();
    loginUser();
  }, []);

  return (
    <div className="App">
      <mainHeader/>
    </div>
  );
}

export default App;
