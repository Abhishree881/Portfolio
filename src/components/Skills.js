import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const customAnimation1 = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Skills() {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const skills = [
    {
      category: "Technologies",
      items: [
        { name: "Web Dev", icon: "Images/webdev.svg" },
        { name: "Back-end Dev", icon: "Images/backend.svg" },
        { name: "Databases", icon: "Images/database.svg" },
        { name: "DevOps", icon: "Images/devops.svg" },
        { name: "APIs", icon: "Images/apis.svg" },
        { name: "Front-end Dev", icon: "Images/frontend.svg" },
      ],
    },
    {
      category: "Proficiencies",
      items: [
        { name: "JavaScript", years: "3 years", icon: "Images/star.svg" },
        { name: "TypeScript", years: "1 year", icon: "Images/star.svg" },
        { name: "React", years: "3 years", icon: "Images/star.svg" },
        { name: "Node.js", years: "2 years", icon: "Images/star.svg" },
        { name: "GraphQL", years: "1 year", icon: "Images/star.svg" },
        { name: "MongoDB", years: "1 year", icon: "Images/star.svg" },
        { name: "Docker", years: "1 year", icon: "Images/star.svg" },
        { name: "AWS", years: "1 year", icon: "Images/star.svg" },
        { name: "Firebase", years: "3 years", icon: "Images/star.svg" },
        { name: "Ruby on Rails", years: "1 year", icon: "Images/star.svg" },
        { name: "C/C++", years: "4 years", icon: "Images/star.svg" },
        { name: "Python", years: "2 years", icon: "Images/star.svg" },
        { name: "Java", years: "1 year", icon: "Images/star.svg" },
      ],
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <Slide direction="down">
                <h2>Super Powers</h2>
              </Slide>
              <p>
                I'm a software developer and designer. I build things that live
                on the web.
              </p>
              {skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                  <h3>{skillCategory.category}</h3>
                  <div className="skills-grid">
                    <Reveal keyframes={customAnimation1} cascade>
                      {skillCategory.items.map((item, idx) =>
                        skillCategory.category === "Technologies" ? (
                          <div key={idx} className="skill-item skill-item-row">
                            <img src={item.icon} className="skill-item-img" />
                            {item.name}
                          </div>
                        ) : (
                          <div key={idx} className="skill-item">
                            <div className="item-row">
                              <img src={item.icon} className="skill-item-img" />
                              {item.name}
                            </div>{" "}
                            <span>{item.years}</span>
                          </div>
                        )
                      )}
                    </Reveal>
                  </div>
                </div>
              ))}
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <tag className="metric">75%</tag>
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Competitive Programming</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Video Editing</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
}
