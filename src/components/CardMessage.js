import React,{Component} from "react";
export class CardMessage extends Component {
  render() {
    return <pre className="header">{this.props.msg}</pre>;
  }
}
