import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "typed.js";

class Introduction extends React.Component {
  componentDidMount() {
    this.typed_options = {
      strings: ["Software Engineer", "Web Developer", "A Freelancer"],
      // strings: ["Mid Level Web Developer @ Webroot"],
      // strings: ["Software Engineer, Web Developer, Freelancer "],
      typeSpeed: 30,
      backSpeed: 40,
      loop: true,
      showCursor: false,
      smartBackspace: false,
      backDelay: 2000,
    };
    this.typed = new Typed(this.el, this.typed_options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <div className="header center outer-structure">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="10">
              <h1 id="heading-name">Prem Neupane</h1>
              <h3 id="heading-desc">
                <span
                  ref={(el) => {
                    this.el = el;
                  }}
                />
                &nbsp;
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Introduction;
