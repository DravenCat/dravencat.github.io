import "./project.css";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import DescriptionCard from "../../component/descriptionCard/descriptionCard";

import EmpowerUAfrica from "../../images/imgs/EmpowerUAfrica.png";
import SlackerTracker from "../../images/imgs/slackertracker.png";
import Zoomer from "../../images/imgs/zoomer.png";

function Project() {
  return (
    <div className="project-page">
      <HomePageHeader name="My Projects" />
      <div className="project-button">
        <div className="project-element">
          <DescriptionCard
            name="SlackerTracker"
            imgLink={SlackerTracker}
            description="An app built by React and Node.js.
          Using MongoDB as Database"
            title="SlackerTracker"
            details="hello"
            websiteLink="http://www.slackerstracker.com"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="EmpowerUAfrica"
            imgLink={EmpowerUAfrica}
            description="An app built by React and Node.js.
          Using Neo4j and MySql as Database"
            title="EmpowerUAfrica"
            details="hello"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Zoomer"
            imgLink={Zoomer}
            description="An app built by Java-HttpServer.
          Using Neo4j, MySql, MongoDB as Database for three different microservice"
            title="Zoomer"
            details="hello"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
