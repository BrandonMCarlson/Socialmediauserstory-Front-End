import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchBox.css";

const SearchBox = ({searchText}) => {
  return (
    <div>
      {" "}
      {searchText === "" ? null : (
        <ul>
          {props.songs.map((profile, index) =>
            profile.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            profile.lastName.toLowerCase().includes(searchText.toLowerCase())
            ? (
              <li onClick={setProfile(profile._id)} className="search-box btn btn-primary btn:hover" key={index}>{el.title} - {el.artist}</li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
