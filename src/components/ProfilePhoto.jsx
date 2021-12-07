import React, { useState, useEffect } from 'react';
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import MyPhoto from "../images/f3a71bb0-5645-11ec-ae43-db7995c7747f.jpeg";
import "./ProfilePhoto.css";

const ProfilePhoto = ({profile}) => {
    return ( 
        <div>
            <h1>{profile.firstName}</h1>
            <img
            className="photo-style"
            src={MyPhoto}
            // src={`http://localhost:5000/${profile.image}`}
            alt={`${profile.firstName}'s photos'`}
            width="250"
            />
            <button className="our-button add-photo-button">
                <AddToPhotosIcon fontSize="medium"></AddToPhotosIcon>
            </button>
        </div>
     );
}
 
export default ProfilePhoto;