import React from "react";
import "./style.scss";

const ContactUs = () => {
  return (
    <div className="hero">
      <div className="about-content">
        <h1>Contact Us</h1>
        <img src="./about-us-photos/about-us.jpeg" alt="" />
      </div>

      <div className="about-info">
        <div className="message">
          <h3 className="msg">Your Message . . . </h3>
        </div>
        <div className="full-name">
          <input type="text" className="name" placeholder="Full Name" />
        </div>

        <div className="email">
          <input type="email" className="email" placeholder="E-mail" />
        </div>

        <div className="tel">
          <input type="tel" className="phone" placeholder="Phone Number" />
        </div>

        <select name="subject" placeholder="Subject">
          <option>Subject</option>
          <option>Return / Exchange Request</option>
          <option>Order Tracking / Delivery</option>
          <option>Technical Problems</option>
          <option>Other</option>
        </select>

        <div className="btn-about">
          <button className="about-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
