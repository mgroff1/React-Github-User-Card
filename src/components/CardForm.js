import React,{Component} from "react";
import axios from "axios";
export class CardForm extends Component {
  state = {
    inputName: ""
  };

  // update the name state with the new input name
  getNewName = name => {
    this.setState({ inputName: name });
  };

  // githun api search call with async axios
  getApiGitHubUser = async searchName => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchName}`
      );
      console.log(response);
      this.props.searcedUser(response);

    } catch (err) {
      //err.response.data
      console.log({
        message: err.response.data.message,
        docsUrl: err.response.data.documentation_url
      });
    }
  
  };

  // handles the form submit action
  handlerFormSubmit = event => {
    event.preventDefault();
    const searchName = this.state.inputName;
    this.setState({ inputName: "" });

    // async http get from guithub api
    this.getApiGitHubUser(searchName);
  };

  render() {
    return (
      <form onSubmit={this.handlerFormSubmit}>
        <input
        className="input-name"
          type="text"
          value={this.state.inputName}
          onChange={event => this.getNewName(event.target.value)}
          placeholder="GitHub User"
        />
        <button className="submit-name">Add User</button>
      </form>
    );
  }
}
