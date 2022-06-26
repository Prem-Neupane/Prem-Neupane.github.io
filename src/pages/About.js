import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

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
                    alt="header"
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
                  BSc. CSIT Graduate form TU affilated Nepathya College. As a
                  web developer I have worked on PHP (Laravel/Code Igniter/
                  Yii)), JavaScript(Node, Vue) . And other good programming
                  knowledge on C, C++, Java & Python. Through these languages I
                  learned about the fundamental of working of programming as
                  well as strong knowledge of Laravel framework and I can easily
                  switch to a different language. In growing information
                  technology, I am always evaluating and upgrading my skill.
                  Right now, I am very eager to brush up my skills.
                </p>
                <br />
                <br />

                <p style={{ textAlign: "center", color: "blueviolet" }}>
                  To Hier, can shoot mail me @ dev.premneupane.75@gmail.com
                </p>
                <br />
                <p style={{ textAlign: "center", color: "sienna" }}>
                  If You want to see my resume,
                </p>
                <p style={{ textAlign: "center", color: "sienna" }}>
                  Hit me 👇🏻 a request
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button
                className="resume-btn"
                href="https://drive.google.com/file/d/1b2hWIcUOS5eo68eTA7oLxmOIrch1IRXU/view?usp=sharing"
                // href="/resume.pdf"
                target="_blank"
                size="lg"
              >
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
              {/* <Button className="resume-btn" href="https://www.adityavsingh.com/old-personal-website" target="_blank" size="lg">
                                <FontAwesomeIcon icon={faGlobe} /> Old Website
                            </Button> */}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
