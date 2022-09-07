import "./project.css";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import DescriptionCard from "../../component/descriptionCard/descriptionCard";

import EmpowerUAfrica from "../../images/imgs/EmpowerUAfrica.png";

function Project() {
  return (
    <div className="project-page">
      <HomePageHeader name="My Projects" />
      <div className="project-button">
        <div className="project-element">
          <DescriptionCard
            name="SlackerTracker"
            imgLink={EmpowerUAfrica}
            description="An app built by React and Node.js
          Using Neo4j and MySql as Database"
            title="EmpowerUAfrica"
            details="hello"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="EmpowerUAfrica"
            imgLink={EmpowerUAfrica}
            description="An app built by React and Node.js
          Using Neo4j and MySql as Database"
            title="EmpowerUAfrica"
            details="hello"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
