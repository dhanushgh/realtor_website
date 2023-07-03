import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe to find the best deals on the market, <br />
            Find your Residence soon!
          </span>
          <button className="button">
            <a href="mailto:ghdhanush1@gmail.com" target="blank">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
