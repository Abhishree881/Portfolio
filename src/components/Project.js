import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import Reveal, { Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "animate.css";

const customAnimation1 = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function () {
  const projects = [
    {
      title: "WOC 2.0",
      description:
        "A comprehensive platform designed to support participants during the Winter of Code program, providing tools for collaboration, project management, and progress tracking.",
      imgUrl: projImg3,
      link: "https://woc-2-6e9fb.web.app/",
    },
    {
      title: "Laayak Web",
      description:
        "A versatile web application for organizing classes, managing projects, and storing important links, aimed at enhancing productivity and collaboration.",
      imgUrl: projImg2,
      link: "https://laayak-web-881.web.app/",
    },
    {
      title: "Spotify Clone",
      description:
        "A meticulously crafted replica of the popular Spotify music streaming app, featuring a similar interface and functionality for an authentic user experience.",
      imgUrl: projImg1,
      link: "https://abhishree881.github.io/Spotify-clone/",
    },
  ];

  const solo = [
    // {
    //   title: "Ārōhanam Music App",
    //   description:
    //     "A user-friendly music application that allows you to play your favorite songs and view synchronized lyrics, enhancing your listening experience.",
    //   imgUrl: projImg6,
    //   link: "https://arohonam.web.app/",
    // },
    {
      title: "Chitthi Chat App",
      description:
        "An intuitive chat application designed for seamless communication with friends, featuring real-time mood detection and a user-friendly interface.",
      imgUrl: projImg5,
      link: "https://chatappdbms.web.app/",
    },
    {
      title: "Todo",
      description:
        "A real-time task management application to help you organize and keep track of your daily tasks efficiently.",
      imgUrl: projImg4,
      link: "https://todo-21922.web.app/",
    },
    {
      title: "Trello Clone",
      description:
        "An efficient task management app inspired by Trello, designed to help you organize and track your tasks and projects effectively.",
      imgUrl: projImg7,
      link: "https://trello-abhishree881.vercel.app/",
    },
    {
      title: "Twitter Clone",
      description:
        "A social networking application that emulates the core features of Twitter, allowing users to share updates and connect with others.",
      imgUrl: projImg8,
      link: "https://twiiter-clone-wheat.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Slide direction="down">
                    <h2>Tasks</h2>
                  </Slide>
                  <p>
                    I'm a software developer who loves creating beautiful and
                    performant web experiences.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Contributions</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">College</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Reveal cascade keyframes={customAnimation1}>
                          <Row>
                            {solo.map((projects, index) => {
                              return <ProjectCard key={index} {...projects} />;
                            })}
                          </Row>
                        </Reveal>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Reveal cascade keyframes={customAnimation1}>
                          <Row>
                            {projects.map((projects, index) => {
                              return <ProjectCard key={index} {...projects} />;
                            })}
                          </Row>
                        </Reveal>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I was also part of a college project where I worked
                          with Deep Learning and lots of datasets and python
                          libraries. The project is an object detection app for
                          blind people to help them in their day-to-day lives. I
                          have also worked in a team where we created a python
                          application to analyse any company's balance sheets
                          and finance reports and calculate the company's
                          health. Both the projects can be found on my GitHub
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right-1" src={colorSharp2}></img>
    </section>
  );
}
