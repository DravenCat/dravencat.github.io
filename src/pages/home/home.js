import "./home.css";
import Introduction from "../../component/introduction/introduction";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import LinkCard from "../../component/linkCard/linkCard";
import Footer from "../../component/footer/footer";

function Home() {
  return (
    <div className="home_page">
      <HomePageHeader name="Dezhi(Geralt) Ren" />
      <Introduction />
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
      <hr className="cutline" />
      <Footer />
    </div>
  );
}

export default Home;
