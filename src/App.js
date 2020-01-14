import React, {Component} from "react";
import {CardHeader} from "./components/CardHeader";
import {CardForm} from "./components/CardForm";
import {CardList} from "./components/CardList";
import {CardMessage} from "./components/CardMessage";

export class App extends Component {
  // initialize data
  state = {
    profiles: [],
    selectedName: ""
  };

  // callback handling selected name
  callBackSelectedName = name => {
    this.setState({ selectedName: name });
  };

  // callback handling axios promisse from github user search api
  callBackSearchUser = user => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, user.data]
    }));
  };

  render() {
    return (
      <div>
        <CardHeader title="The GitHub User Card" />
        <CardForm searcedUser={this.callBackSearchUser} />
        <CardList
          profiles={this.state.profiles}
          onSelectName={this.callBackSelectedName}
        />
        <hr />
        <CardMessage msg={this.state.selectedName} />
      </div>
    );
  }
}
