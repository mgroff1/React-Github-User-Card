import React from "react";
import {Card} from "./Card";
export const CardList = props => {
  // callback handling the cards selected name
  const callBackSelectedName = name => {
    props.onSelectName(name);
  };

  return props.profiles.map(profile => (
    <Card key={profile.id} {...profile} onSelectName={callBackSelectedName} />
  ));
};
