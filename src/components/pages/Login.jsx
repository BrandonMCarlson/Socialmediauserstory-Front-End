import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import Button from "../Button";
import useForm from "../../useForm";
import axios from "axios";
import jwtDecode from "jwt-decode";


const Login = ({setUser, setProfile}) => {
    
    const navigate = useNavigate();

    const loginUser = async () => {
        await axios
            .post("http://localhost:5000/api/auth", {
              email: formValue.email,
              password: formValue.password,
            })
            .then((res) => {
              localStorage.setItem("token", res.data);
              const user = jwtDecode(localStorage.getItem("token"));
              setUser(user);
              setProfile(user);
              navigate("/profile");
            })
            .catch((error) => console.log(error));
      };

      const {
        formValue,
        handleChange,
        handleSubmit,       
        setFormValue,       
      } = useForm(loginUser);
   
    return ( 
        <div>
            <Button/>
           <h1>Login Page</h1>
            <form>
                <input name="email" type="text" onChange={(event)=>handleChange(event)} placeholder="E-mail"/>
                <p></p>
                <input name="password" type="password" onChange={(event)=>handleChange(event)} placeholder="Password"/>
                <p></p>
                <button type="subbmit" onClick={(event)=>handleSubmit(event)}>Login Here</button>
            </form>

            <Link to="/register"><button>Register Page</button></Link>
        </div>
     );
}
 
export default Login;