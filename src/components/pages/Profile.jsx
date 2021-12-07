import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import "./Profile.css";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PeopleIcon from '@mui/icons-material/People';
import Post from "../Post";





const Profile = ({ getFriends, getAProfile, updateAboutMe, user, profile, setProfile }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button />
      <h1>Profile</h1>
      <div className="profile-page-grid">
        <div>
          <h1>{profile.firstName}</h1>
          <img
            src={`http://localhost:5000/${profile.image}`}
            alt={`${profile.firstName}'s photos'`}
          />
          <button className="our-button">
            <AddToPhotosIcon fontSize="medium"></AddToPhotosIcon>
          </button>
          <p></p>
          <span>About ME!</span><span><button onClick={() => updateAboutMe()} className="our-button"><AppRegistrationIcon  fontSize="medium"></AppRegistrationIcon></button></span>
          
        </div>

        <div>
          <input type="text" />
          <Post/>
        </div>
        <div>
          <div className="tabs">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">

                    <Tab label="Home" value="1" onClick={()=>setProfile(user)}/>
                    <Tab label={ <div className={"icon-tab-style"}><PeopleIcon
                  fontSize="large"/><div className="text-tab-style">Friends</div></div>} value="2" />
                    <Tab  label="Notifications" value="3" /> 
                    
                  </TabList>
                </Box>
                <TabPanel value="2">                 
                  <button className="our-button" onClick={() => getFriends()}>
                    FRIENDS IN CONSOLE
                  </button>
                  <p></p>
                  <button className="our-button" onClick={() => getAProfile()}>
                    PROFILE IN CONSOLE
                  </button>
                </TabPanel>
                <TabPanel value="3">
                  Item Three
                </TabPanel> 
                
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
