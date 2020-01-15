import React from "react";
import "./Card.css";
export const UserForm = ({ img, followers, bio ,public_repos}) => {
  return (

    <>
      <img src={img} />
      <h2>{followers}</h2>
      <p>repos: {public_repos}</p>
      <p>{bio}</p>

    </>
  );
};
