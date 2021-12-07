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
    window.location.reload(true);
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

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      
    <NavBar setSearchText={setSearchText} profile={profile}/>
    <SearchBox allUsers={allUsers} setProfile={setProfile} searchText={searchText}/>
    
      <main>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} setProfile={setProfile}  />}></Route>
          <Route path="register" element={<Register setUser={setUser} user={user} />}></Route>
          <Route path="profile" element={<Profile user={user} setUser={setUser} setProfile={setProfile} profile={profile} getAProfile={getAProfile} getFriends={getFriends} />}></Route>
        </Routes>
      </main>
    <footer>
      {!user ? null : <MeetingRoomIcon onClick={()=>logoutUser()} fontSize="large"/>}
    </footer>
    </div>
  );
}

export default App;
