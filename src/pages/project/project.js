import "./project.css";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import DescriptionCard from "../../component/descriptionCard/descriptionCard";

import EmpowerUAfrica from "../../images/imgs/EmpowerUAfrica.png";
import SlackerTracker from "../../images/imgs/slackertracker.png";
import Zoomer from "../../images/imgs/zoomer.png";
import Pintos from "../../images/imgs/pintos.png";
import Background from "../../images/backgrouds/background.png";
import JDBC from "../../images/imgs/JDBC.png";
import Neo4j from "../../images/imgs/Neo4j.png";
import Mips from "../../images/imgs/mips.png";

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
        <div className="project-element">
          <DescriptionCard
            name="Pintos"
            imgLink={Pintos}
            description="An operating system framework for the 80 x 86 architecture built by C. Using main design concepts of Linux system."
            title="Pintos"
            details="hello"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Personal Website"
            imgLink={Background}
            description="My personal website built based on React."
            title="Personal Website"
            details="hello"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="JDBC backend"
            imgLink={JDBC}
            description="A JDBC backend connecting to PostgreSQL server."
            title="JDBC backend"
            details="hello"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Neo4j java-httpServer"
            imgLink={Neo4j}
            description="An http server connnecting to Neo4j database."
            title="Neo4j java-httpServer"
            details="hello"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Ailen Attack"
            imgLink={Mips}
            description="A simple horizontal game built by mips assmbly code."
            title="Ailen Attack"
            details="It is similar to some games (also known as “shmups”) that are a classic genre of games: you control a spaceship flying through space and avoiding obstacles, as well as optionally shooting, picking things up, and more. This video shows how it looks like."
            videoLink="https://youtu.be/fDPrMXWOLEI"
            sourceLink="https://github.com/DravenCat/mips_game-"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
