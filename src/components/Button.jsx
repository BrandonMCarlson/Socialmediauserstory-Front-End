import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Button = () => {
    return ( 
        <div>
            <Link to="/"><button>Welcome Page</button></Link>
            <Link to="/register"><button>Register Page</button></Link>
            <Link to="/login"><button>Login Page</button></Link>
            <Link to="/profile"><button>Profile Page</button></Link>
        </div>
     );
}
export default Button;
