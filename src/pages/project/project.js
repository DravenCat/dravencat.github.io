import "./project.css";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import DescriptionCard from "../../component/descriptionCard/descriptionCard";

import EmpowerUAfrica from "../../images/imgs/EmpowerUAfrica.png";

function Project() {
  return (
    <div className="home_page">
      <HomePageHeader name="My Projects" />
      <div className="project-button">
        <DescriptionCard imgLink={EmpowerUAfrica} />
      </div>
    </div>
  );
}

export default Project;
