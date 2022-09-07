import "./home.css";
import Introduction from "../../component/introduction/introduction";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import LinkCard from "../../component/linkCard/linkCard";

function Home() {
  return (
    <div className="home_page">
      <HomePageHeader />
      <Introduction />
      <div className="navigation-button">
        <LinkCard
          name="My tech stack"
          description="Click to review my technology experience!"
        />
        <LinkCard
          name="My project"
          description="Click to review my past project! Many of them are developed by React, Node.js, Java and C"
        />
        <LinkCard
          name="Contact me"
          description="Click to review my contact information!"
        />
      </div>
    </div>
  );
}

export default Home;
