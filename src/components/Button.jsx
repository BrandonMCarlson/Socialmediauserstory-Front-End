import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "../components/Button.css";

const Button = () => {
    return ( 
        <div className="grid-buttons">
            <Link to="/register"><button className="our-button">Register Page</button></Link>
            <Link to="/"><button className="our-button">Login Page</button></Link>
            <Link to="/profile"><button className="our-button">Profile Page</button></Link>
        </div>
     );
}
export default Button;
