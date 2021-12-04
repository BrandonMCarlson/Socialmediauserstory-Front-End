import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";

const Login = ({loginUser}) => {
    return ( 
        <div>
            <h1>Login</h1>
            <Button/>
            <button onClick={()=>loginUser()}>Login Here</button>
        </div>
     );
}
 
export default Login;