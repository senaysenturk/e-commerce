import React from "react";
import "./style.scss";
import {
  SlSocialInstagram,
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialFacebook,
} from "react-icons/sl";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer"> */}
      <div className="info-menu">
        <div className="store">
          <span>Store</span>
          <ul>
            <li>
              <Link to="/products/search?category=Man">Man</Link>
            </li>
            <li>
              {/* <Link to="/products/search?category=Woman">Woman</Link> */}
              <Link to="/products/search?category=Woman">Woman</Link>
            </li>
            <li>
              {/* <Link to="/products/search?category=Child">Children</Link> */}
              <Link to="/products/search?category=Child">Children</Link>
            </li>
            <li>
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link
                to={`/products/search?additionalCategories_like=best-sellers`}
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link to={`/products/search?additionalCategories_like=trending`}>
                Trending
              </Link>
            </li>
          </ul>
        </div>

        <div className="about">
          <span>About</span>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/#">Human Resources</Link>
            </li>
            <li>
              <Link to="/#">Corporate Sales</Link>
            </li>
            <li>
              <Link to="/#">Our Stores</Link>
            </li>
            <li>
              <Link to="/#">Franchise Application</Link>
            </li>
            <li>
              <Link to="/#">KVKK</Link>
            </li>
          </ul>
        </div>

        <div className="custumer-services">
          <span>Customer Services</span>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/#">Campaigns</Link>
            </li>
            <li>
              <Link to="/#">Order & Delivery</Link>
            </li>
            <li>
              <Link to="/#">Payment</Link>
            </li>
            <li>
              <Link to="/#">Returns</Link>
            </li>
            <li>
              <Link to="/#">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-menu">
        <div className="news-btn">
          <span> Stay Up To Date</span>
          <div className="contact-email">
            <input
              type="email"
              placeholder="Type your email address..."
              className="news-email"
              name="news-email"
            />
            <Link to="/#" className="buton buton-outline">
              Send
            </Link>
          </div>
        </div>

        <div className="social-menu">
          <span>Follow us</span>
          <ul>
            <li>
              <Link to="/#">
                <SlSocialInstagram />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <SlSocialYoutube />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <SlSocialTwitter />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <SlSocialLinkedin />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <SlSocialFacebook />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
