import React, { Component } from "react";
import "./techStackInfo.css";

import html from "../../images/imgs/html.png";
import css from "../../images/imgs/css.png";
import react from "../../images/imgs/react.jpg";
import jdbc from "../../images/imgs/JDBC.png";
import nodejs from "../../images/imgs/nodejs.png";
import mysql from "../../images/imgs/mysql.png";
import neo4j from "../../images/imgs/Neo4j.png";
import postgresql from "../../images/imgs/postgresql.png";
import mongodb from "../../images/imgs/mongodb.png";
import docker from "../../images/imgs/docker.png";
import nginx from "../../images/imgs/nginx.jpg";

export default class TechStackInfo extends Component {
  render() {
    return (
      <div className="intro">
        <div className="content">
          <div className="header">My techStack</div>
          <hr />
          <div className="details" id="techStack-link">
            <p>
              Frontend
              <div className="programm-language">
                <img className="techStackImg" src={html} alt="html" />
                <img className="techStackImg" src={css} alt="css" />
                <img className="techStackImg" src={react} alt="css" />
              </div>
            </p>

            <p>
              Backend
              <div className="programm-language">
                <img className="techStackImg" src={jdbc} alt="JDBC" />
                <img className="techStackImg" src={nodejs} alt="nodejs" />
              </div>
            </p>
            <p>
              Database
              <div className="programm-language">
                <img className="techStackImg" src={mysql} alt="MySql" />
                <img className="techStackImg" src={neo4j} alt="Neo4j" />
                <img
                  className="techStackImg"
                  src={postgresql}
                  alt="PostgreSQL"
                />
                <img
                  className="techStackImg"
                  id="mongo"
                  src={mongodb}
                  alt="MongoDB"
                />
              </div>
            </p>
            <p>
              Other
              <div className="programm-language">
                <img className="techStackImg" src={docker} alt="Docker" />
                <img className="techStackImg" src={nginx} alt="Nginx" />
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
