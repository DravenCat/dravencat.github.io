import React, { Component } from "react";
import "./introduction.css";

export default class Introduction extends Component {
  render() {
    return (
      <div className="intro">
        <div className="content">
          <div className="header">Who am I</div>
          <hr />
          <div className="details">
            <p>
              Hello! My name is Dezhi(Geralt) Ren. I am currently a fourth year
              student University of Toronto, specialist in computer science
              software engineering.
            </p>
            <p>
              I have developed many group projects and personal projects. If you
              are interested in them, just click the button below to take a
              look. Many of them are based on React, Node.js, Java and C.
            </p>
            <p>
              I am now extending my knowledge of data structure and algorithm. I
              usually exercises myself on Leetcode. If you are interested at me,
              contact me via any platforms. My contact information can be
              achieved below.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
