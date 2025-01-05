import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marco LA </span>
            from <span className="purple"> Paris, France.</span>
            <br />
            I am currently pursuing a Master's degree in Information Systems Architecture at CentraleSupélec.
            <br />
            I have a strong passion for digital transformation and technological innovation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Climbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;