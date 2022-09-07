import "./home.css";
import Introduction from "../../component/introduction/introduction";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";

function Home() {
  return (
    <div className="home_page">
      <HomePageHeader />
      <Introduction />
      <div className="navigation-button"></div>
    </div>
  );
}

export default Home;
