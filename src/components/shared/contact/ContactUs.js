import React from "react";
import "./style.scss";

const ContactUs = () => {
  return (
    <form
      className="hero"
      action="mailto:info@shiwear.com"
      method="post"
      enctype="text/plain"
    >
      <fieldset>
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

        <div className="msg-box">
          <textarea
            name="message"
            id="message"
            cols="66"
            rows="5"
            placeholder="Write To Us"
          ></textarea>
        </div>
        <div className="btn-about">
          <button className="about-btn">Send</button>
        </div>
      </div>
      </fieldset>
    </form>
  );
};

export default ContactUs;
