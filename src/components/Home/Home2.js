import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section text-center" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
              My education and school projects sparked my interest in technology and innovation, which grew even stronger through my professional experiences.
              <br />
              <br />I am now skilled in modern programming languages such as 
              <i>
                <b className="purple"> Python, C++ and Javascript. </b>
              </i>
              <br />
              <br />
              This knowledge has allowed me to explore various areas of technology, including developing scalable
              <i>
                <b className="purple"> digital transformation solutions, optimizing system architectures, </b> 
              </i>
              and discovering the potential of technologies like
              <b className="purple"> AI and Blockchain.</b>
              <br />
              <br />
              I am passionate about working on projects that connect strategy and technology, often using tools like <b className="purple"> Docker and Kubernetes </b> to create efficient and impactful solutions.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links d-flex justify-content-center list-unstyled">
              <li className="social-icons mx-3">
                <a
                  href="https://github.com/marcolap13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons mx-3">
                <a
                  href="https://www.linkedin.com/in/lamarco/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
