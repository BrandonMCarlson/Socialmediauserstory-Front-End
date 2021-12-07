import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";

const Login = ({loginUser, logoutUser, registerUser}) => {
    return ( 
        <div>
            <h1>Login</h1>
            <Button/>
            <button onClick={()=>loginUser()}>Login Here</button>
            <button onClick={()=>registerUser()}>REGISTER USER</button><button onClick={()=>logoutUser()}>LOG OUT</button>
        </div>
     );
}
 
export default Login;