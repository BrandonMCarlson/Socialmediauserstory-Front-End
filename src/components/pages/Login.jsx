import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import Button from "../Button";
import useForm from "../../useForm";
import axios from "axios";
import jwtDecode from "jwt-decode";

<<<<<<< HEAD
const Login = ({loginUser, logoutUser, registerUser}) => {
=======

const Login = ({setUser}) => {
    
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
   
>>>>>>> 3e6460cd242abefe16fc3f55610988c4c5aa551b
    return ( 
        <div>
            <Button/>
<<<<<<< HEAD
            <button onClick={()=>loginUser()}>Login Here</button>
            <button onClick={()=>registerUser()}>REGISTER USER</button><button onClick={()=>logoutUser()}>LOG OUT</button>
=======
           <h1>Login Page</h1>
            <form>
                <input name="email" type="text" onChange={(event)=>handleChange(event)} placeholder="E-mail"/>
                <p></p>
                <input name="password" type="password" onChange={(event)=>handleChange(event)} placeholder="Password"/>
                <p></p>
                <button type="subbmit" onClick={(event)=>handleSubmit(event)}>Login Here</button>
            </form>

            <Link to="/register"><button>Register Page</button></Link>
>>>>>>> 3e6460cd242abefe16fc3f55610988c4c5aa551b
        </div>
     );
}
 
export default Login;