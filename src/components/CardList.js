import React from "react";
import {Card} from "./Card";


export const CardList = props => {
  const callBackSelectedName = name => {
    props.onSelectName(name);
  };

  return props.profiles.map(profile => (
    <Card key={profile.id} {...profile} onSelectName={callBackSelectedName} />
  ));
};
