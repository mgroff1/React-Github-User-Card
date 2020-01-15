import React, {Component} from "react";
import {CardHeader} from "./components/CardHeader";
import {CardForm} from "./components/CardForm";
import {CardList} from "./components/CardList";
import {UserForm} from "./components/UserForm";
import {CardMessage} from "./components/CardMessage.js";
import axios from "axios";

export class App extends Component {

  state = {
    profiles: [],
    selectedName: "",
    followers: [],

  }

  // update the name state with the new input name
  getNewName = name => {
    this.setState({ inputName: name });

  };

    fetchUser = () =>{
      axios
      .get(`https://api.github.com/users/${this.props.name}/followers`)
      .then(res => {
        this.setState({ ...this.state, followers: res.data });
      })
      .catch(err => {
        console.log("Can't get followers", err);
      });
  };
  findName = name => {
    this.setState({ selectedName: name });
  };

componentDidMount() {
  this.fetchUser();

}


  render() {
    return (
      <div>
        <CardHeader title="The GitHub User Card" />
        <CardForm searchedUser={this.callBackSearchUser} />
        <CardList
          profiles={this.state.profiles}
          onSelectName={this.findName}
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
