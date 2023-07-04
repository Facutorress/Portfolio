import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Facundo Torres </span>
            from <span className="purple"> Buenos Aires Argentina.</span>
            <br /> Full Stack Developer with experience in marketing and sales. Combining 2 years of legal studies and currently in my second year of a Bachelor's degree in Systems, which allows me to understand various aspects of software solutions. Expert in Front-end and Back-end, with a focus on Back-end development. I stand out for my proactivity, leadership, and problem-solving abilities.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Practice sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
