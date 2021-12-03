import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";



function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
  await axios.get('http:localhost:5000/api').then((response) => {
    console.log(response.data);
    setUsers(response.data);
  });
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
