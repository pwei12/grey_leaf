import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
        <span>
          &copy;
          {new Date().getFullYear()} &nbsp; 
          <Link to="/" className="link">Grey Leaf</Link>
        </span>
    </footer>
  );
}

export default Footer;
