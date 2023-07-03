import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side  */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="footerimg" width={120} />
          <span className="secondaryText">
            Our vision is to make people <br /> live at the best places they
            dream!
          </span>
        </div>

        {/* right side  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span>#135, Rajajinagar, Bengaluru-560010, KA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
