import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import useForm from "../../useForm";
import Buttons from "../Button";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import heman from  "../../images/heman.jpg";
import kyle from "../../images/kyle.jpg";
import "../styles/register.css";

const Register = ({ user, setUser }) => {
  const navigate = useNavigate();

  const registerUser = async () => {
    if (formValue.password !== formValue.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    await axios
      .post("http://localhost:5000/api/users/register", {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        password: formValue.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.headers["x-auth-token"]);
        const user = jwtDecode(localStorage.getItem("token"));
        setUser(user);
        navigate("/profile");
        console.log("token", res.headers["x-auth-token"]);
      })
      .catch((error) => console.log(error));
    console.log(user);
  };

  const { formValue, handleChange, handleSubmit, setFormValue } =
    useForm(registerUser);

  return (
    <div className="register-grid">
      <div className="heman-style">
        <img className="heman-image" width="300" src={heman} alt="heman hey" />
      </div>
      <div className="flex">
        <form>
          <div>
            <h1 className="heading">Register Below</h1>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="firstName" label="First Name" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="lastName" label="Last Name" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="email" label="E-mail" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" type="password" name="password" label="Password" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
          <TextField id="outlined-basic"  type="password" name="confirmPassword" label="Confirm Password" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="flex-button">
            <Button type="subbmit" onClick={(event)=>handleSubmit(event)} variant="contained">Register</Button>
          </div>
          <div className="terms">
                By creating an account you agree to our
                <p>Terms of <a target="_blank" href="https://www.youtube.com/watch?v=eh7lp9umG2I">Service and Privacy Policy</a></p> 
          </div>
        </form>
      </div>
      <div className="heman-style">
          <img src={kyle}  className="kyle-image" alt="karate kyle" />
      </div>
  
    </div>
  );
};

export default Register;
