import React from "react";
import axios from "axios";
import "./components/Card.css";
import {Card} from "./components/Card";
import { UserForm } from "./components/UserForm";

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };

  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/mgroff1`)
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log("no user found", err);
      });
    axios
      .get(`https://api.github.com/users/mgroff1/followers`)
      .then(res => {
        this.setState({ ...this.state, followers: res.data });
      })
      .catch(err => {
        console.log("no data returned", err);
      });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div className="App">
      <div>
        <Card user={this.state.user} />
        </div>

        {this.state.followers.map(data => (
              <div calssName = "App">
              <div id="flex">
          <UserForm
            className='flex'
            key={data.id}
            public_repos={data.public_repos}
            location={data.location}
            img={data.avatar_url}
            followers={data.login}
            bio={data.bio}
          /></div></div>
        ))}
      </div>
    );
  }
}

export default App;
