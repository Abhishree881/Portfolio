import React, { useEffect } from "react";
import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl, link }) {
  const setHeight = () => {
    const cards = document.querySelectorAll(".proj-imgbx");
    let maxHeight = 0;

    cards.forEach((card) => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  };

  useEffect(()=>{
    setHeight();
  })

  setHeight();

  return (
    <Col className="project-card" size={12} sm={6} md={4}>
      <a href={link} className="projectslink" target="_blank">
        <div className="proj-imgbx">
          <div className="proj-imgbx-img">
            <img src={imgUrl} />
          </div>
          <div className="proj-txtx">
            <h6>{title}</h6>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}
