import React from "react";
import "./Header.css";
import logoUrl from "../../assets/logo.svg";
import teslaLogo from "../../assets/favicon.ico";
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
);
export default Header;
