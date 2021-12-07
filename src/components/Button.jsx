import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import Buttoncss from "../components/Button.css";

const Button = () => {
    return ( 
        <div>
            <Link to="/"><button className="our-button">Welcome Page</button></Link>
            <Link to="/register"><button className="our-button">Register Page</button></Link>
            <Link to="/login"><button className="our-button">Login Page</button></Link>
            <Link to="/profile"><button className="our-button">Profile Page</button></Link>
        </div>
     );
}
export default Button;
