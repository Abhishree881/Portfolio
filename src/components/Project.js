import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export default function () {
  const projects = [
    {
      title: "WOC 2.0 ",
      description: "An app to host participants throughout program",
      imgUrl: projImg3,
      link: "https://woc-2-6e9fb.web.app/",
    },
    {
      title: "Laayak Web",
      description: "A web app to manage classes, projects and links",
      imgUrl: projImg2,
      link: "https://laayak-web-881.web.app/",
    },
    {
      title: "Spotify Clone",
      description: "Clone of the famous music streaming app Spotify",
      imgUrl: projImg1,
      link: "https://abhishree881.github.io/Spotify-clone/",
    },
  ];

  const solo = [
    {
      title: "Musicify Music App",
      description: "A music app to play the main parts of the song",
      imgUrl: projImg6,
      link: "https://spotify-kolloni.web.app/",
    },
    {
      title: "Chitthi Chat App",
      description: "A chat app to connect with your friends",
      imgUrl: projImg5,
      link: "https://chatappdbms.web.app/",
    },
    {
      title: "todo",
      description: "An app to manage your tasks in realtime",
      imgUrl: projImg4,
      link: "https://todo-21922.web.app/",
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
                  <h2>Projects</h2>
                  <p>
                    I have also worked on many projects using my web development
                    skills. Some are contributions to an open-source project,
                    some are team projects, and some are personal projects. All
                    of them are displayed below.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Solo</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Team</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {solo.map((projects, index) => {
                            return <ProjectCard key={index} {...projects} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((projects, index) => {
                            return <ProjectCard key={index} {...projects} />;
                          })}
                        </Row>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
