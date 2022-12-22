import React from "react";
import "./style.scss";
import {
  SlSocialInstagram,
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialFacebook,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
   
      <div className="footer"></div>
      <div className="info-menu">
        <div className="corporate">
          <span>Corporate</span>
          <ul>
            <li>
              <a href="/#">About Us</a>
            </li>
            <li>
              <a href="/#">Human Resources</a>
            </li>
            <li>
              <a href="/#">Corporate Sales</a>
            </li>
            <li>
              <a href="/#">Our Stores</a>
            </li>
            <li>
              <a href="/#">Franchise Application</a>
            </li>
            <li>
              <a href="/#">KVKK</a>
            </li>
          </ul>
        </div>

        <div className="custumer-services">
          <span>Customer Services</span>
          <ul>
            <li>
              <a href="/#">Contact Us</a>
            </li>
            <li>
              <a href="/#">Campaigns</a>
            </li>
            <li>
              <a href="/#">Order & Delivery</a>
            </li>
            <li>
              <a href="/#">Payment</a>
            </li>
            <li>
              <a href="/#">Returns</a>
            </li>
            <li>
              <a href="/#">FAQ</a>
            </li>
          </ul>
        </div>


        <div className="news-btn">
        <span> Stay up to date</span>
        <br />
        <input
          type="email"
          placeholder="Type your email address"
          className="news-email"
          name="news-email"
        />
      </div>
        <div className="social-menu">
          <span>Follow us</span>
          <ul>
            <li>
              <a href="/#">
                <SlSocialInstagram />
              </a>
            </li>
            <li>
              <a href="/#">
                <SlSocialYoutube />
              </a>
            </li>
            <li>
              <a href="/#">
                <SlSocialTwitter />
              </a>
            </li>
            <li>
              <a href="/#">
                <SlSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="/#">
                <SlSocialFacebook />
              </a>
            </li>
          </ul>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
