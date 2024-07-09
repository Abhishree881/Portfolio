import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/newLogo.png";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";

import "animate.css";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "MERN Stack Developer",
    "Ruby on Rails Developer",
    "React Developer",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>
                    {`Hi I'm a `} <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Passionate and skilled Full Stack Developer currently
                    working at Superbolter. I specialize in building robust and
                    scalable web applications, combining a deep understanding of
                    both front-end and back-end technologies. With a strong
                    foundation in Computer Science and Engineering from IIIT
                    Kalyani (BTech), I have honed my skills in various
                    programming languages, frameworks, and tools. At
                    Superbolter, I have been integral in designing and
                    implementing features that enhance user experience and
                    improve application performance. My expertise spans across
                    the entire development lifecycle, from conceptualization and
                    design to deployment and maintenance. I thrive in
                    collaborative environments and enjoy working with
                    cross-functional teams to deliver high-quality solutions.
                    Continuously learning and staying updated with the latest
                    industry trends, I am committed to driving innovation and
                    excellence in every project I undertake.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="myHeader" src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
