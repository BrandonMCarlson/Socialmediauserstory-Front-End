import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "./components/MainHeader";
import { Route, Routes } from "react-router";
import jwtDecode from "jwt-decode";
import Welcome from "./components/pages/Welcome";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  const [user, setUser] = useState([]);
  const [friends, setFriends] = useState([]);
  const [profile, setProfile] = useState({});

  const registerUser = async () => {
    await axios
      .post("http://localhost:5000/api/users/register", {
        firstName: "Cust3",
        lastName: "Cust3",
        email: "cust3@cust3.com",
        password: "cust3",
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
        .post("http://localhost:5000/api/auth", {
          email: "cust1@cust1.com",
          password: "cust1",
        })
        .then((res) => {
          localStorage.setItem("token", res.data);
          const user = jwtDecode(localStorage.getItem("token"));
          setUser(user);
        })
        .catch((error) => console.log(error));
  };

   const logoutUser = async () => {
    console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    setUser(null);
    console.log(localStorage.getItem("token"));
  };

  const getFriends = async () => {   
    await axios
      .get("http://localhost:5000/api/users", { headers: { 'x-auth-token': localStorage.getItem('token') } })
      .then((res) => {
        setFriends(res.data);
        console.log(res.data)
      })
  }
  
  const getAProfile = async () => {   
    await axios
      .get(`http://localhost:5000/api/users/61a6f519f357f2f6fdfec15f`, { headers: { 'x-auth-token': localStorage.getItem('token') } })
      .then((res) => {
        setProfile(res.data);
        console.log(res.data)
      })
  }


  // useEffect(() => {
  //   // registerUser();
  //   // loginUser();
  // }, []);

  return (
    <div className="App">
      hi
    <button onClick={()=>registerUser()}>REGISTER USER</button><button onClick={()=>logoutUser()}>LOG OUT</button>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="login" element={<Login loginUser={loginUser} />}></Route>
          <Route path="register" element={<Register registerUser={registerUser} />}></Route>
          <Route path="profile" element={<Profile getAProfile={getAProfile} getFriends={getFriends} />}></Route>
        </Routes>
      </main>
   
    </div>
  );
}

export default App;
