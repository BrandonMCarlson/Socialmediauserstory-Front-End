import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "./components/Post";
import jwtDecode from "jwt-decode";
import Welcome from "./components/pages/Welcome";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

function App() {
  const [user, setUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [profile, setProfile] = useState({});
  const [searchText, setSearchText] = useState("");
  const [request, setRequest] = useState({});
  

  const initialState = {
    firstname: "",
      lastname: "",
      email: "",
    password: "",
    confirmPassword: "",
  };
  
const [data, setData] = React.useState(initialState);
const navigate = useNavigate();


const getAllUsers = async () => {
  await axios
    .get("http://localhost:5000/api/users")
    .then((res) => {
      setAllUsers(res.data);
      console.log(res.data);
    })
}

   const logoutUser = async () => {
    console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
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
  
  const getAProfile = (friend) => {   
      axios
      .get(`http://localhost:5000/api/users/${friend}`, { headers: { 'x-auth-token': localStorage.getItem('token') } })
      .then((res) => {
        setRequest(res.data);
        console.log(res.data)
      })
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
    <NavBar setSearchText={setSearchText} profile={profile}/>
    <SearchBox allUsers={allUsers} setProfile={setProfile} searchText={searchText}/>
      <div>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} setProfile={setProfile}  />}></Route>
          <Route path="register" element={<Register setUser={setUser} user={user} />}></Route>
          <Route path="profile" element={<Profile user={user} setUser={setUser} setProfile={setProfile} profile={profile} getAProfile={getAProfile} getFriends={getFriends} request={request} setRequest={setRequest} />}></Route>
        </Routes>
        <div className="footer-div">
        {!user ? null : <MeetingRoomIcon onClick={()=>logoutUser()} fontSize="large"/>}
      </div>
      </div>
   
    </div>
  );
}

export default App;
