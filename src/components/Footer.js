import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  { key: "email", label: "Email", icon: faEnvelope, href: "mailto:dev.premneupane.75@gmail.com" },
  { key: "phone", label: "Phone", icon: faPhoneAlt, href: "tel:+9779867718090" },
  { key: "github", label: "GitHub", icon: faGithubSquare, href: "https://github.com/Prem-Neupane" },
  { key: "linkedin", label: "LinkedIn", icon: faLinkedin, href: "https://www.linkedin.com/in/Prem-Neupane/" },
  { key: "instagram", label: "Instagram", icon: faInstagram, href: "https://www.instagram.com/dev_prem75/" },
  { key: "facebook", label: "Facebook", icon: faFacebookSquare, href: "https://www.facebook.com/premneupane.dev" },
  { key: "youtube", label: "YouTube", icon: faYoutube, href: "https://www.youtube.com/c/BeautifulMind75" },
];

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { isMobileView: false };
  }

  componentDidMount() {
    const update = () => this.setState({ isMobileView: window.innerWidth < 800 });
    update();
    window.addEventListener("resize", update);
    this.update = update;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.update);
  }

  render() {
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
          {links.map((link) => (
            <Nav.Link
              key={link.key}
              href={link.href}
              target={link.key === "email" || link.key === "phone" ? undefined : "_blank"}
              rel="noopener"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} />{" "}
              {this.state.isMobileView ? "" : link.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
