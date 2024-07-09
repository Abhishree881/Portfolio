import React from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const customAnimation1 = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimation2 = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Slide direction="up">
        <h2 className="section-title">Missions</h2>
      </Slide>
      <p className="p">
        I'm a software developer who have been on some insightful journey
        experiences.
      </p>
      <div className="experience-cards">
        <div className="card">
          <Reveal keyframes={customAnimation1}>
            <div className="card-header">
              {/* <img src="/path/to/company-logo.png" alt="SuperBolter Logo" className="company-logo"/> */}
              <div>
                <h3 className="job-title">Frontend Lead</h3>
                <a
                  href="https://www.linkedin.com/company/superbolter/"
                  target="_blank"
                >
                  SuperBolter
                </a>
                <p>Dec’23 - Present | Bangalore</p>
              </div>
            </div>
            <div className="card-body">
              <p>React Js, Redux, Axios, WebGL, Unity</p>
              <ul>
                <li>
                  Boosted website performance by 73%: Leveraged CDN
                  implementation and optimized code modularity, achieving a 3x
                  faster loading time and 15% decrease in bounce rate
                </li>
                <li>
                  Developed intuitive onboarding experience: Optimized
                  performance and enhanced first-time user experience,
                  contributing to a 25% growth in daily active users
                </li>
                <li>
                  Led development for major release: Strategically enhanced
                  performance and refined the first-time user experience,
                  contributing significantly to a 25% growth in daily active
                  users
                </li>
                <li>
                  Enhanced user journey: Architected and deployed a new
                  onboarding flow that simplified user interactions, resulting
                  in a notable 15% reduction in drop-off rates
                </li>
                <li>
                  Enabled collaboration: Spearheaded the implementation of a
                  feature enabling seamless collaboration with merchants,
                  expanding platform functionality and fostering deeper user
                  engagement
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="card">
          <Reveal keyframes={customAnimation2}>
            <div className="card-header">
              {/* <img src="/path/to/company-logo.png" alt="Wonkru Media Logo" className="company-logo"/> */}
              <div>
                <h3 className="job-title">Web Dev Intern</h3>
                <a
                  href="https://www.linkedin.com/company/wonkru/"
                  target="_blank"
                >
                  Wonkru Media
                </a>
                <p>May’23 - Jun’23 | Gurugram (Remote)</p>
              </div>
            </div>
            <div className="card-body">
              <p>
                React Js, Next Js, GraphQL, Apollo Client(GraphQL), Headless
                CMS(Wordpress)
              </p>
              <ul>
                <li>
                  Optimized content delivery and performance: Implemented
                  GraphQL integration for headless CMS, achieving 50% faster API
                  calls, leading to improved website performance and user
                  experience
                </li>
                <li>
                  Achieved significant SEO gains: Executed URL optimization
                  strategy, improving website ranking for targeted keywords by
                  30%
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Experience;
