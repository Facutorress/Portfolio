import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import portf1 from '../../Assets/portf1.mp4'
import portf2 from '../../Assets/portf2.mp4'
import Ravemotion from '../../Assets/Ravemotion.mp4'

function Projects() {
  return (
    <section>
      <Container fluid className="home-section" id="projects">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to my{" "}
                <span className="main-name">Projects</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <video controls style={{ width: '100%' }}>
                <source src={portf1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col md={4}>
              <video controls style={{ width: '100%' }}>
                <source src={portf2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col md={4}>
              <video controls style={{ width: '100%' }}>
                <source src={Ravemotion} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
