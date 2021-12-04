import React from 'react';
import { NavLink } from "react-router-dom";



const MainHeader = ({ user }) => {
    return(
        <header>
            <nav>
                <ul classname="header">
                    <li>
                        <NavLink activeclassname="active" to="/welcome">
                            <button> Welcome { user ? user.name : null}</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to="/welcome">
                            <button>Notifications</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;