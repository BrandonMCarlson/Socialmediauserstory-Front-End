import React, { useState, useEffect } from 'react';
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import axios from 'axios';
import useForm from '../useForm';

const AboutMe = ({user, setUser, profile}) => {

    const updateAboutMe = async () => {
        await axios
          .put(`http://localhost:5000/api/users/61aad32098c81a5fe8132bbc`, {
                firstName: user.firstName,
                lastName: user.lastName,
                aboutMe: "update from FRONTEND 2",
                email: user.email,
                password: user.password,
          }, 
          { headers: { 'x-auth-token': localStorage.getItem('token') } })
          .then((res) => {
            setUser(res.data);
            console.log(user);
          });
      }

      const {
        formValue,
        handleChange,
        handleSubmit,       
        setFormValue,       
      } = useForm(updateAboutMe);


    return ( 
        <div>
            <span><input placeholder={profile.aboutMe} type="text" disabled></input></span><span><button onClick={(event)=>handleSubmit(event)} className="our-button"><AppRegistrationIcon  fontSize="medium"></AppRegistrationIcon></button></span>
        </div>
     );
}
 
export default AboutMe;