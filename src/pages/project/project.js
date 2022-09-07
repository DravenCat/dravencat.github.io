import "./project.css";
import LinkCard from "../../component/linkCard/linkCard";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";

function Project() {
  return (
    <div className="home_page">
      <HomePageHeader name="My Projects" />
      <div className="navigation-button">
        <LinkCard
          name="My tech stack"
          description="Click to review my technology experience!"
        />
        <LinkCard
          name="My project"
          description="Click to review my past project! Many of them are developed by React, Node.js, Java and C"
          link="/project"
        />
        <LinkCard
          name="Contact me"
          description="Click to review my contact information!"
        />
      </div>
    </div>
  );
}

export default Project;
