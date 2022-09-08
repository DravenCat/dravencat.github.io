import "./techStack.css";
import Navigation from "../../component/navigation/navigation";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import TechStackInfo from "../../component/techStackInfo/techStackInfo";

function TechStack() {
  return (
    <div className="techStack-page">
      <Navigation />
      <HomePageHeader name="Dezhi(Geralt) Ren" career="- software developer" />
      <TechStackInfo />
    </div>
  );
}

export default TechStack;
