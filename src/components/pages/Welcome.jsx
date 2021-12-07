import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";
import Welcomecss from "../pages/Welcome.css";

const Welcome = () => {
    return ( 
        <div>
            <h1>Welcome</h1>
            <Button/>
        </div>
     );
}
 
export default Welcome;
