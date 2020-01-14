import React,{Component} from "react";
import "./Card.css";
export class Card extends Component {
  selectName = name => this.props.onSelectName(name);
  render() {
    // console.log(this.props);
    return (
      <div id="main"
        className="github-profile"
        onClick={() => this.selectName(this.props.name)}
      >
        <img className = "img" src={this.props.avatar_url} alt="" />
        <div className="info">
          <div className="name">Name: {this.props.name}</div>
          <div className="company">Company: {this.props.company}</div>
          <div className="type">{this.props.type}</div>
          <div className="location">Location: {this.props.location}</div>
          <div className="followers">Followers: {this.props.followers}</div>
          <div className="repolink">Repos: {this.props.repos_url}</div>
          <div className="public_repos">Repos: {this.props.public_repos}</div>
          <div className="bio">Bio: {this.props.bio}</div>
        </div>
      </div>
    );
  }
}
