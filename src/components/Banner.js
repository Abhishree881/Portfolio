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
                    I'm currently a B.Tech student majoring in Computer Science
                    at IIIT Kalyani. I also have the privilege of serving as the
                    Vice President of the Student Council at our institute. One
                    of my greatest passions in the world of technology is web
                    development. I'm constantly amazed by the creativity and
                    innovation in web design, and whenever I come across a
                    striking website, I can't resist the urge to try and
                    replicate it. It's like having a superpower – it enables me
                    to turn even the most ordinary websites into something
                    extraordinary, complete with eye-catching graphics and
                    animations, all while ensuring a robust backend. I've been
                    on this web development journey for over two years now, and
                    it's been a tremendous learning experience. Along the way,
                    I've had the opportunity to participate in hackathons, work
                    with college website teams, and complete two enriching web
                    development internships. These experiences have not only
                    expanded my skill set but also prepared me for effective
                    collaboration and contribution in this field. Beyond web
                    development, I'm also proficient in programming languages
                    like C/C++, Python, and JavaScript. My interests extend to
                    machine learning, system automation, and artificial
                    intelligence – areas that I find incredibly exciting.
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
