import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.removeEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }
  render() {
    const smallViewArray = this.state.isMobileView
      ? ["", "", "", "", "", ""]
      : [
          "Email",
          "Phone",
          "GitHub",
          "LinkedIn",
          "Facebook",
          "Instagram",
          "Youtube",
        ];
    return (
      <Navbar
        className="dark-bar"
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 2000,
        }}
        variant="dark"
      >
        <Nav className="mx-auto">
          <Nav.Link
            href="https://github.com/Prem-Neupane"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faGithubSquare} /> {smallViewArray[2]}
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/prem-n-661301169/"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} /> {smallViewArray[3]}
          </Nav.Link>
          <Nav.Link
            href="https://www.facebook.com/premneupane.dev"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faFacebookSquare} /> {smallViewArray[4]}
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/prem_neupane__/"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faInstagram} /> {smallViewArray[5]}
          </Nav.Link>
          <Nav.Link
            href="https://www.youtube.com/c/BeautifulMind75"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faYoutube} /> {smallViewArray[6]}
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
