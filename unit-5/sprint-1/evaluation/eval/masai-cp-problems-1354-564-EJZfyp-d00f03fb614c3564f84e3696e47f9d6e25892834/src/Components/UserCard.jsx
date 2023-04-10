import React from "react";    
import "./UserCard.css";
import PropTypes from "react";

const UserCard = ({imageURL,avatarShape,name,description,backgroundColor,title}) => {
  return (
    <div data-testid="usercard" className={"usercard"}>


    <img src={imageURL} style={{borderRadius:{avatarShape}}}/>
    <h1>{name}</h1>
    <p>{description}</p>
    <p>{title}</p>


    
    </div>
  );
};

export default UserCard;

UserCard.propTypes={
  imageURL:PropTypes.string.isRequired,
  avatarShape:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  backgroundColor:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,


}
