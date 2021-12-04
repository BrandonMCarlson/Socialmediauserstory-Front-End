import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";

const Register = ({registerUser}) => {
    return ( 
        <div>
            <h1>Register</h1>
            <Button/>
            <button onClick={()=>registerUser()}>Register HERE</button>
        </div>
     );
}
 
export default Register;