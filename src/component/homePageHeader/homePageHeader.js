import React, { Component } from "react";
import "./homePageHeader.css";

export default class HomePageHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">{this.props.name}</div>
        <div className="career">- software developer</div>
      </div>
    );
  }
}
