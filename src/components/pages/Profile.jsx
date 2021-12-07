import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import "./Profile.css";
import PeopleIcon from '@mui/icons-material/People';
import Post from "../Post";
import AboutMe from "../AboutMe";
import ProfilePhoto from "../ProfilePhoto";





const Profile = ({ getFriends, getAProfile, user, setUser, profile, setProfile }) => {
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
          <ProfilePhoto profile={profile}/>
          <p></p>
         <AboutMe profile={profile} user={user} setUser={setUser}/>
          
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
