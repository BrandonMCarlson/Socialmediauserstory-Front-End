import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
  
  const initialState = {
    firstname: "",
      lastname: "",
      email: "",
    password: "",
    confirmPassword: "",
    
  };
  
const [data, setData] = React.useState(initialState);

const handleChange = (event) => {
  setData({...data, 
    [event.target.name]: event.target.value });
    // console.log(data)
};

const handleConfirmPassword = () => {
  // event.target.name = event.target.value;
  if (data.confirmPassword !== data.password) {
    alert('Password is Mismatched')
    return false
  }
}

  const registerUser = async () => {
    await axios
      .post("http://localhost:5000/api/users/register", {
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword
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
    debugger
    await axios
        .post("http://localhost:5000/api/auth", {
          email: "cust3@cust3.com",
          password: "cust3",
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

  const updateAboutMe = async () => {
    await axios
      .put(`http://localhost:5000/api/users/61aad32098c81a5fe8132bbc`, {
            firstName: user.firstName,
            lastName: user.lastName,
            aboutMe: "update from FRONTEND 2",
            email: user.email,
            password: user.password,
      }, 
      { headers: { 'x-auth-token': localStorage.getItem('token') } })
      .then((res) => {
        setUser(res.data);
        console.log(user);
      });
  }


  // useEffect(() => {

  // }, [user]);

  return (
    <div className="App">
      

    
     
      <main>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
<<<<<<< HEAD
          <Route path="login" element={<Login loginUser={loginUser} />}></Route>
          <Route path="register" element={<Register registerUser={registerUser} handleChange={handleChange} handleConfirmPassword={handleConfirmPassword} firstName={data.firstname} lastName={data.lastname} email={data.email} password={data.password} confirmPassword={data.confirmPassword} />}></Route>
          <Route path="profile" element={<Profile updateAboutMe={updateAboutMe} getAProfile={getAProfile} getFriends={getFriends} />}></Route>
=======
          <Route path="login" element={<Login loginUser={loginUser} setUser={setUser} />}></Route>
          <Route path="register" element={<Register registerUser={registerUser} />}></Route>
          <Route path="profile" element={<Profile user={user} updateAboutMe={updateAboutMe} getAProfile={getAProfile} getFriends={getFriends} />}></Route>
>>>>>>> 3e6460cd242abefe16fc3f55610988c4c5aa551b
        </Routes>
      </main>
   
    </div>
  );
}

export default App;
