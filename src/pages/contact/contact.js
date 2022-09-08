import "./contact.css";
import Navigation from "../../component/navigation/navigation";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import ContactInfo from "../../component/contactInfo/contactInfo";

function Contact() {
  return (
    <div className="contact-page">
      <Navigation />
      <HomePageHeader name="Dezhi(Geralt) Ren" career="- software developer" />
      <ContactInfo />
    </div>
  );
}

export default Contact;
