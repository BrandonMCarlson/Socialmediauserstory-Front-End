import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";



const FriendsMapper = ({ user, setRequest, getAProfile, request }) => {
    await axios
      .get(
        `http://localhost:5000/api/users/${user._id}/pending/${request}`, null,  { headers: { 'x-auth-token': localStorage.getItem('token') } }
      )
      
  };


  return (
    <div>
      <div>
        {user.pendingRequest.map((friend, index) => (
          <div key={index} className="add-friend">
            <div className="friend-request">
            {()=>getAProfile(friend)}
              <div>
                {friend}
                <span>
                  <CheckBoxIcon
                    className="add-friend-button"
                    onClick={() => acceptFriendRequest(friend)}
                  />
                </span>
                <span>
                  <DoNotDisturbIcon
                    className="comments-likes-button"
                    onClick={() => denyFriendRequest(friend)}
                  />
                </span>
              </div>
              <div>
                <div className="deny-friend-button">
                  <span className="decliner">{friend.decline}</span>
                </div>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingFriendsMapper;