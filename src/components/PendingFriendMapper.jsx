import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";



const PendingFriendsMapper = ({ user, setRequest }) => {
  const acceptFriendRequest = async (requestor) => {
    await axios
      .post(
        `http://localhost:5000/api/users/${user._id}/pending/${requestor._id}`
      )
      
  };
  const denyFriendRequest = async (request) => {
    await axios
      .delete(`http://localhost:5000/api/users/${user._id}/remove/${request._id}`)
      .then((res) => {
        setRequest(res.data);
      })
  }
  return (
    <div>
      <div>
        {user.pendingRequest.map((friend, index) => (
          <div key={index} className="add-friend">
            <div className="friend-request">
              <div>
                {friend.firstName}+ " "{friend.lastName}
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
