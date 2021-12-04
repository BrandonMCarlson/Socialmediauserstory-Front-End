import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Button = () => {
    return ( 
        <div>
           <Link to="/"><button>Welcome</button></Link>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
        </div>
     );
}
 
export default Button;
