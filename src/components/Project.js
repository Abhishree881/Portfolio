import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export default function () {
  const projects = [
    {
      title: "Spotify Clone",
      description: "Clone of the famous music streaming app Spotify",
      imgUrl: projImg1,
    },
    {
      title: "Laayak Web",
      description: "A web app to manage classes, projects and links",
      imgUrl: projImg2,
    },
    {
      title: "Todo App ",
      description: "An app to keep track of your tasks",
      imgUrl: projImg3,
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
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          {projects.map((projects, index) => {
                            return <ProjectCard key={index} {...projects} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          I was also part of a college project where I worked
                          with Deep Learning and lots of datasets and python
                          libraries. The project is an object detection app for
                          blind people to help them in their day-to-day lives.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I have also worked in a team where we created a python
                          application to analyse any company's balance sheets
                          and finance reports and calculate the company's
                          health.
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
