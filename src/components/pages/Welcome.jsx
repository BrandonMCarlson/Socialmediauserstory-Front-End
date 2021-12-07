import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";
import MainHeader from "../MainHeader";
const Welcome = () => {
    return ( 
        <div>
             <MainHeader />
            <h1>Welcome</h1>
            <Button/>
        </div>
     );
}
 
export default Welcome;
