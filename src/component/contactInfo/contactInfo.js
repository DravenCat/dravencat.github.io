import React, { Component } from "react";
import "./contactInfo.css";

export default class ContactInfo extends Component {
  render() {
    return (
      <div className="intro">
        <div className="content">
          <div className="header">My contact information</div>
          <hr />
          <div className="details" id="contact-link">
            <p>Location: Toronto</p>
            <p>
              Email:{" "}
              <a href="mailTo:dezhi.ren@mail.utoronto.ca">
                dezhi.ren@mail.utoronto.ca
              </a>
            </p>
            <p>
              Github:{" "}
              <a href="https://github.com/DravenCat">
                https://github.com/DravenCat
              </a>
            </p>
            <p>
              Linkdin:{" "}
              <a href="https://www.linkedin.com/in/dezhi-ren-5bbb59249/">
                https://www.linkedin.com/in/dezhi-ren-5bbb59249/
              </a>
            </p>
            <p>
              Twitter:{" "}
              <a href="https://twitter.com/Guinsoo8">
                https://twitter.com/Guinsoo8
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
