import { Container, Row, Col } from "react-bootstrap";
import Resume from "./Resume";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Resume />
          <Col size={12} sm={6}>
            <img className="MyLogo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abhishree-451394201/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/abhishree.21/" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/_.a.b.h.i.__.21._/"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Aspiring Software Developer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
