import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/Post";
import { Route, Routes } from "react-router";
import jwtDecode from "jwt-decode";
import Welcome from "./components/pages/Welcome";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";

function App() {
  const [user, setUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [profile, setProfile] = useState({});
  const [searchText, setSearchText] = useState("");
  
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

const getAllUsers = async () => {
  await axios
    .get("http://localhost:5000/api/users")
    .then((res) => {
      setAllUsers(res.data);
      console.log(res.data);
    })
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


  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      
    <NavBar />
    <SearchBox allUsers={allUsers} setProfile={setProfile} searchText={searchText}/>
    
      <main>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="login" element={<Login setUser={setUser} />}></Route>
          <Route path="register" element={<Register setUser={setUser} user={user} />}></Route>
          <Route path="profile" element={<Profile user={user} updateAboutMe={updateAboutMe} getAProfile={getAProfile} getFriends={getFriends} />}></Route>
        </Routes>
      </main>
   
    </div>
  );
}

export default App;
