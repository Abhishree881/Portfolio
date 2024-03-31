import React from "react";
import { Col, Row, Alert } from "react-bootstrap";

export default function Resume({ status, message, onValidated }) {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Click the button to <br></br>Download full Resume
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button type="submit">
                <a
                  href="https://drive.google.com/file/d/1g2xcHEnCzuclNnwe4BAMzFDRrVL8DwUa/view?usp=sharing"
                  target="_blank"
                  download
                >
                  Download
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
