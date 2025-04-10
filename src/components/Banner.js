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
    "Software Engineer",
    "Full Stack Developer",
    "Ruby on Rails Developer",
    "React Developer",
  ];
  const period = 500;

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
                    {`Hi I'm a `}
                    <span className="wrap">{text}</span>
                    <span className="blinking-cursor">|</span>
                  </h1>
                  <p>
                    Hey there! I'm a curious, creative, and driven Full Stack
                    Developer currently working at HashedIn. With a B.Tech in
                    Computer Science and Engineering from IIIT Kalyani, I’ve
                    built a strong foundation in both front-end and back-end
                    development—and I absolutely love bringing ideas to life on
                    the web. <br /> <br />
                    Over the years, I’ve worked across the full
                    stack—designing clean UIs, building solid APIs, and
                    optimizing performance for smooth user experiences. I enjoy
                    working with technologies like React.js, Next.js, Node.js,
                    TypeScript, Three.js, WebGL, Tailwind, and Firebase (just to
                    name a few). I’m especially drawn to projects that blend
                    logic with creativity—like interactive UIs, real-time apps,
                    or 3D visualizations. <br /> <br />
                    What keeps me going? The joy of
                    solving meaningful problems, collaborating with awesome
                    people, and constantly learning something new. Whether it’s
                    debugging a tricky issue or pushing pixels into place, I
                    find purpose (and fun!) in the details. <br /> <br />
                    When I’m not coding, you can find me exploring the latest
                    tech trends, diving into a good book, or experimenting with
                    new recipes in the kitchen. I’m always on the lookout for
                    exciting projects and collaborations. If you’re interested in
                    working together or just want to chat about tech, feel free
                    to reach out! I’m all ears. <br /> <br />
                    Let’s build something amazing!
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
