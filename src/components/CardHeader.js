import React,{Component} from "react";

export class CardHeader extends Component {
  render() {
    return <header className="header">{this.props.title}</header>;
  }
}
