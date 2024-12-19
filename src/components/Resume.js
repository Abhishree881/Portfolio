import React from "react";
import { Col, Row, Alert } from "react-bootstrap";

export default function Resume({ status, message, onValidated }) {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Click the button to <br></br>view resume
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button>
                <a
                  href="https://drive.google.com/file/d/1QuQ7UHXHgdUjUp38LVeD_qGlDWK8Mrce/view?usp=sharing"
                  target="_blank"
                  download
                >
                  View Resume
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
