import React from "react";
import "./UserCard.css";
import {PropTypes} from "react";

const UserCard = ({imageURL,avatarShape,name,description,backgroundColor,title}) => {
  return (
    <div data-testid="usercard" className={"usercard"}>
      UserCard
    </div>
  );
};



export default UserCard;


