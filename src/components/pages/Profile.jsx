import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../Button";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import "./Profile.css";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';




const Profile = ({getFriends, getAProfile, updateAboutMe, user}) => {
        const [value, setValue] = React.useState('1');
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
   
    return ( 
        <div >
               <Button/>
            <h1>Profile</h1>
            <div className="profile-page-grid">
                <div>
                  <h1>{user.firstName}</h1>
                  <img src={`http://localhost:5000/${user.image}`} alt={`${user.firstName}'s photos'`} />
                  <button><AddToPhotosIcon
                        fontSize ="medium">
                        </AddToPhotosIcon>
                  </button>
                  <p></p>
                  <div className="profile-feed">
                     {user.aboutMe}
                  </div>
                  <button onClick={()=>updateAboutMe()}>UPDATE ABOUT ME</button>
                </div>
             
                <div>
                    
                    
                    

                    <input type="text" />
                    <p></p>
                    <div className="profile-feed" >
                          hi
                    </div>

             
                </div>
                <div>
                <div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Home" value="1" />
                            <Tab label="Friends" value="2" />
                            <Tab label="Notifications" value="3" />
                          </TabList>
                        </Box>
                          <TabPanel value="1">Item One</TabPanel>
                          <TabPanel value="2"><button onClick={()=>getFriends()}>
                                                  FRIENDS IN CONSOLE
                                                  </button>
                                                  <p></p>
                                                  <button onClick={()=>getAProfile()}>PROFILE IN CONSOLE</button>
                          </TabPanel>
                          <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default Profile;