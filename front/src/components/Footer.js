import React from "react";
import { NavLink } from "react-bootstrap";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerListContainer">
          <h5 className="footerTitle">Nous contacter</h5>
          <div className="footerList">
            <NavLink className="footerLink" to="/">
              <FontAwesomeIcon className="footerIcon" icon={faPhone} />
            </NavLink>
            <NavLink className="footerLink" to="/">
              <FontAwesomeIcon className="footerIcon" icon={faEnvelope} />
            </NavLink>
          </div>
          <h5 className="footerTitle">Réseaux sociaux</h5>
          <div className="footerList">
            <NavLink className="footerLink" to="/">
              <FontAwesomeIcon className="footerIcon" icon={faTwitter} />
            </NavLink>
            <NavLink className="footerLink" to="/">
              <FontAwesomeIcon className="footerIcon" icon={faFacebook} />
            </NavLink>
            <NavLink className="footerLink" to="/">
              <FontAwesomeIcon className="footerIcon" icon={faInstagram} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
