import React from "react";
import './Card.css';
export const Card = props => {
  return (
    <div id="main">

        <img src={props.user.avatar_url} alt="img" />
        <h1>name: {props.user.name}</h1>
        <p>login: {props.user.login}</p>
        <p>location: {props.user.location}</p>
        <p>repos: {props.user.public_repos}</p>
        <p>bio: {props.user.bio}</p>

    </div>
  );
};
