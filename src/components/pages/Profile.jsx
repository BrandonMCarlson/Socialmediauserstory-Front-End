import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";

const Profile = ({getFriends, getAProfile}) => {
    return ( 
        <div>
            <h1>Profile</h1>
            <Button/>
            <button onClick={()=>getFriends()}>FRIENDS IN CONSOLE</button>
            <button onClick={()=>getAProfile()}>PROFILE IN CONSOLE</button>
        </div>
     );
}
 
export default Profile;