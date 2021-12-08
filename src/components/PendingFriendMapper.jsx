import React, { useState, useEffect } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const PendingFriendsMapper = ({user}) => {
    return ( 
        <div>
           <div>
                {user.pendingRequest
                .map((friend, index) => (
                    <div key={index} className="add-friend">
                      <div className="friend-request">
                        <div>
                            
                            {friend.firstName}+ " "
                            {friend.lastName}
                            <span>
                            <CheckBoxIcon
                              className="add-friend-button"
                              onClick={() => "will add friend"(friend)}
                            />
                            </span>

                            <span>
                            <DoNotDisturbIcon
                              className="comments-likes-button"
                              onClick={() => "will deny friend"(friend)}
                            />
                            </span>

                        </div>
                        <div>
                        
                          <div className="deny-friend-button">
                            <span className="decliner">
                              {friend.decline}
                            </span>
                           
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  ))}
              </div>
        </div>
     );
}
 
export default PendingFriendsMapper;