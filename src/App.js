import React, {Component} from "react";
import {CardHeader} from "./components/CardHeader";
import {CardForm} from "./components/CardForm";
import {CardList} from "./components/CardList";
import {UserForm} from "./components/UserForm";
import {CardMessage} from "./components/CardMessage.js";
import axios from "axios";

export class App extends Component {
  // initialize data
  state = {
    profiles: [],
    selectedName: "",
    followers: []
  };

    fetchUser = () =>{
      axios
      .get("https://api.github.com/users/mgroff1/followers")
      .then(res => {
        this.setState({ ...this.state, followers: res.data });
      })
      .catch(err => {
        console.log("Can't get followers", err);
      });
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


componentDidMount() {
  this.fetchUser();
}


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
        <UserForm
          key={this.id}
          img={this.avatar_url}
          followers={this.login}
          bio={this.bio}
        />
      </div>
    );
  }
}
