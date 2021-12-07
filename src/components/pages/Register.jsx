import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";
import "../styles/register.css"

const Register = ({registerUser, firstName, lastName, email, password, confirmPassword, handleChange, handleConfirmPassword }) => {
    return ( 
        <div>
            <form onSubmit={()=>registerUser()}>
            <h1>Register Below</h1><br/><br/>
            <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            autoFocus
            value={firstName}
            onChange={handleChange}
            name="firstname"
            type="text"
            className="form-control"
            id="firstname"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            value={lastName}
            onChange={handleChange}
            name="lastname"
            type="text"
            className="form-control"
            id="lastname"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleChange}
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
            value={password}
            onChange={handleChange}
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
            value={confirmPassword}
            onChange={handleChange}
            onBlur={handleConfirmPassword}
            name="confirmPassword"
            type="password"
            className="form-control"
            id="password"
            required
          />
            </div>
            <button type="submit">Sign Up</button>
            </form>
        </div>
       
     );
}
 
export default Register;