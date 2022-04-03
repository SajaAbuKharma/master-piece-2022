import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3>Learn Hub</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="socials">
            <li>
              <a href="/">
                <i className="social fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="social fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="social fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="social fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="social fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright &copy;2022. designed by <span>Learning-Academy</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
