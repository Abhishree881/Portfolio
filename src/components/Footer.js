import { Container, Row, Col } from "react-bootstrap";
import Resume from "./Resume";
import logo from "../assets/img/logo.png";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <Container id="resume">
        <Row className="align-items-center">
          <Resume />
          <Col size={12} sm={6}>
            <img className="MyLogo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://discord.com/users/783952590622294036"
                target="_blank"
              >
                <FaDiscord />
              </a>
              <a href="https://www.facebook.com/abhishree.21/" target="_blank">
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/_.a.b.h.i.__.21._/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
            <p>Software Developer/Engineer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
