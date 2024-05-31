import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="flex justify-between items-center">
        <ul className="footer-list-left">
          <li>
            <a href="./app/about/page.jsx">About</a>
          </li>
          <li>
            <a href="./team/page.tsx">Team</a>
          </li>
          <li>
            <a href="./research/page.tsx">Research</a>
          </li>
        </ul>
        <ul className="footer-list-right">
          <li>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <br />
      <h1>&copy; 2024 AiLab. All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
