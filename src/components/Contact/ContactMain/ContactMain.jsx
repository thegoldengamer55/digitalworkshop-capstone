import "./contactmain.css";
import contactAsset from "../../../assets/contact-asset.jpg";

const ContactMain = () => {
  return (
    <div>
      <div className="contact-main">
        <img src={contactAsset} alt="" />
        <div className="image-overlay">
          <h1>Contact Us</h1>
          <h2>We'd Love to Hear from You!</h2>
          <p>
            Whether you have a question, feedback, or a suggestion, our team at
            Darren's Website is here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
