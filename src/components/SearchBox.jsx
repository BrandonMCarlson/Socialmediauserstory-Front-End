import React from "react";
import "./SearchBox.css";

const SearchBox = ({searchText, setProfile, allUsers}) => {
  
  const handleClick = (profile) => {
 document.getElementById('search').value = ''
 setProfile(profile);
}
  
  return (
    <div className="ul-div">
      {" "}
      {searchText === "" ? null : (
        <ul className="search-ul">
          {allUsers.map((profile, index) =>
            profile.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            profile.lastName.toLowerCase().includes(searchText.toLowerCase())
            ? (
              <li onClick={()=>handleClick(profile)} className="search-box btn btn-primary btn:hover" key={index}>{profile.firstName}  {profile.lastName}</li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
