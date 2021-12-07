import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import jwtDecode from "jwt-decode";
import useForm from "../../useForm";
import Button from "../Button";
import "../styles/register.css"

const Register = ({user, setUser}) => {
  
  const navigate = useNavigate();  

  const registerUser = async () => {
    if (formValue.password !== formValue.confirmPassword) {
      alert("Passwords do not match!");
      return
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

  const {
    formValue,
    handleChange,
    handleSubmit,       
    setFormValue,       
  } = useForm(registerUser);
  
  
  return ( 
        <div>
            <form>
            <h1>Register Below</h1><br/><br/>
            <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            autoFocus
            placeholder="First Name"
            onChange={(event)=>handleChange(event)}
            name="firstName"
            type="text"
            className="form-control"
            id="firstname"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(event)=>handleChange(event)}
            name="lastName"
            type="text"
            className="form-control"
            id="lastname"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            placeholder="E-mail"
            onChange={(event)=>handleChange(event)}
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
          </div>
          
        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input
            placeholder="Password"
            onChange={(event)=>handleChange(event)}
            name="password"
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            placeholder="Confirm Password"
            onChange={(event)=>handleChange(event)}
            name="confirmPassword"
            type="password"
            className="form-control"
            id="password"
            required
          />
            </div>
            <button className="our-button" type="subbmit" onClick={(event)=>handleSubmit(event)}>Register Here</button>
            </form>
        </div>
       
     );
}

export default Register;