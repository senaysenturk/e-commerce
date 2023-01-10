import React from "react";

const ContactUs = () => {
  return (
    <div className="hero">
      <div className="about-content">
        <h1>Contact Us</h1>
        <img src="./about-us-photos/about-us.jpeg" alt="" />
      </div>
      <div className="ablout-info">
        <div className="full-name">
          <input type="text" className="name" placeholder="Full Name" />
        </div>

        <div className="email">
          <input type="email" className="email" placeholder="E-mail" />
        </div>

        <div className="tel">
          <input type="tel" className="phone" placeholder="Phone Number" />
        </div>

        <div className="subject">
          <select name="subject" placeholder="Subject">
            <option>Subject</option>
            <option>Return / Exchange Request</option>
            <option>Order Tracking / Delivery</option>
            <option>Technical Problems</option>
            <option>Other</option>
          </select>
        </div>

        <div className="btn">
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
