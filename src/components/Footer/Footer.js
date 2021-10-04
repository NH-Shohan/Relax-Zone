import React from "react";
import "./Footer.css";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3>Copyright © 2021</h3>
      </div>
      <div className="contact">
        <h4>Contact info</h4>
        <img src={phone} alt="" />
        <img src={email} alt="" />
      </div>
    </div>
  );
};

export default Footer;
