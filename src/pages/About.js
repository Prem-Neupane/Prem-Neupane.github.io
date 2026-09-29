import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/webp/premneupane.webp";
import FallbackProfessionalHeadshot from "../assets/jpg/premneupane.jpg";

class About extends React.Component {
  render() {
    return (
      <div
        className="primary outer-structure"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="inner-structure center"
          style={{ flexDirection: "column" }}
        >
          <TitleBar title="About Me" />
          <Container fluid style={{ padding: "1.5em" }}>
            <Row
              className="justify-content-center"
              style={{ alignItems: "center" }}
            >
              <Col style={{ textAlign: "center" }}>
                <picture>
                  <source
                    cclassName="header-img"
                    type="image/webp"
                    srcset={ProfessionalHeadshot}
                  />
                  <img
                    className="header-img"
                    src={FallbackProfessionalHeadshot}
                    alt="Prem Neupane"
                    fluid
                  />
                </picture>
              </Col>
            </Row>
            <Row
              className="justify-content-center"
              style={{ alignItems: "center" }}
            >
              <Col lg="10">
                <p
                  id="about"
                  className="secondary-text"
                  style={{
                    padding: "25px 10px",
                    textAlign: "justify",
                    color: "#111111",
                    margin: "0w",
                  }}
                >
                  Lead Software Engineer with 6+ years of experience designing,
                  building and delivering web applications, backend systems,
                  RESTful APIs and business-critical software. My core strength
                  is PHP and Laravel, supported by hands-on work across Vue.js,
                  JavaScript, MySQL, Docker, system architecture, database
                  optimization and API-driven applications.
                </p>
                <p
                  className="secondary-text"
                  style={{
                    padding: "15px 10px",
                    textAlign: "justify",
                    color: "#111111",
                  }}
                >
                  I work end to end: technical solution design with clients,
                  sprint planning, code reviews, team coordination and delivery.
                  Currently at Mavorion Systems Pvt. Ltd. in Kathmandu, I lead
                  modules of a Hospital Management System used by Norvic
                  Hospital, TU Teaching Hospital, UCMS, Sushma Koirala Memorial
                  Hospital and other healthcare institutions. Earlier I built
                  Laravel, Vue.js and .NET MVC systems for Malaysian and Dutch
                  clients at Grafi Offshore Nepal, Swivt and Webroot. Outside
                  delivery work I explore Go/Gin, Python, cloud services and
                  AI-assisted engineering workflows.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="8" style={{ textAlign: "center" }}>
                <p style={{ color: "#111111" }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Kuleshwor,
                  Kathmandu, Nepal
                  <br />
                  <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                  <a href="tel:+9779867718090">+977 986-771-8090</a>
                  <br />
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a href="mailto:dev.premneupane.75@gmail.com">
                    dev.premneupane.75@gmail.com
                  </a>
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="8">
                <p className="contact-note">
                  <b>Official channels only.</b> These contact details are the
                  only verified ways to reach me. I never charge for
                  introductions, portfolio reviews or interview preparation, and
                  I never ask for money, credentials, or access to your
                  accounts. Treat any request claiming otherwise as a scam.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button
                className="resume-btn"
                href="/resume.pdf"
                target="_blank"
                size="lg"
              >
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
