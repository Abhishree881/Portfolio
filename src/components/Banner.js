import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/logo.jpg";
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
    "Competitive Programmer",
    "Video Editor",
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
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm a `} <span className="wrap">{text}</span>
                  </h1>
                  <p style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
                    I am currently pursuing B.Tech in Computer Science at IIIT
                    Kalyani. I am also current Vice President of the Student
                    Council of the Institute. I am very passionate about web
                    development. I like creating the front end of the web page,
                    I like it when a web page looks good and attractive and
                    appealing. When I first got to know about JavaScript, I felt
                    like I got some superpowers as I could give cool animations
                    and amazing graphics to my webpage, I am always amused when
                    I see the best websites in the business, as these new
                    designs surely attract users. I am also an efficient
                    programmer in many languages like cpp, python and
                    JavaScript. I am also a machine learning enthusiast and is
                    excited by system automation and Artificial Intelligence
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
