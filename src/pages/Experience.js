import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import ExperienceCard from "../components/ExperienceCard";
import TitleBar from "../components/TitleBar";

import MavorionLogo from "../assets/webp/mavorionsystems.webp";
import MavorionFallbackLogo from "../assets/jpg/mavorionsystems.jpg";
import AxionLogo from "../assets/webp/axiontechnology.webp";
import AxionFallbackLogo from "../assets/jpg/axiontechnology.jpg";
import GrafiOffshoreLogo from "../assets/webp/grafiOffshoreNepal.webp";
import GrafiOffshoreFallbackLogo from "../assets/jpg/grafiOffshoreNepal.jpg";
import SwivtLogo from "../assets/jpg/swivt.webp";
import SwivtFallbackLogo from "../assets/jpg/swivt.jpg";
import WebrootNepalLogo from "../assets/webp/webrootnepal.webp";
import WebrootNepalFallbackLogo from "../assets/jpg/webrootnepal.jpg";
import BootwalRDLogo from "../assets/webp/bootwalrd.webp";
import BootwalRDFallbackLogo from "../assets/jpg/bootwalrd.jpg";

const bullets = (lines) => (
  <React.Fragment>
    {lines.map((line, index) => (
      <React.Fragment key={line}>
        {index > 0 ? <br /> : null}• {line}
      </React.Fragment>
    ))}
  </React.Fragment>
);

class Experience extends Component {
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
          <TitleBar title="Current Involvement" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <ExperienceCard
                image={MavorionLogo}
                fallback_image={MavorionFallbackLogo}
                imageClass="wide"
                title="Lead Software Engineer"
                organization="Mavorion Systems Pvt. Ltd."
                address="Lazimpat-2, Kathmandu, Nepal"
                alternateTitle="Mavorion Systems Pvt. Ltd."
                duration="Jan 2025 - present"
                details={bullets([
                  "Engineered a Hospital Management System (HMS) with PHP, Laravel, Vue.js and RESTful APIs.",
                  "Delivered modules for Norvic Hospital, TU Teaching Hospital, UCMS and Sushma Koirala Memorial Hospital.",
                  "Partnered with hospital clients on requirements, technical solutions and progress reporting.",
                  "Ran end-to-end project cycles in Jira, Mattermost and Slack: sprint planning, code reviews, team leadership.",
                ])}
              />
            </Row>
          </Container>

          <TitleBar title="Past Experience" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex", flexWrap: "wrap" }}>
              <ExperienceCard
                image={AxionLogo}
                fallback_image={AxionFallbackLogo}
                title="Lead Software Engineer (Part Time)"
                organization="Axion Technology Pvt. Ltd."
                address="Butwal-11, Rupandehi, Nepal"
                alternateTitle="Axion Technology Pvt. Ltd."
                duration="Mar 2026 - Jul 2026"
                details={bullets([
                  "Built a Unified Examination Management System (UEMP) with PHP, Laravel and RESTful APIs.",
                  "Delivered the exam system for Lumbini Buddhist University.",
                  "Designed efficient, scalable database structures for optimal data management.",
                  "Led requirement gathering, sprint planning and code reviews for the full project cycle.",
                ])}
              />

              <ExperienceCard
                image={GrafiOffshoreLogo}
                fallback_image={GrafiOffshoreFallbackLogo}
                title="Software Engineer"
                organization="Grafi Offshore Nepal Pvt. Ltd."
                address="Sanepa-2, Lalitpur, Nepal"
                alternateTitle="Grafi Offshore Nepal Pvt. Ltd."
                duration="Apr 2022 - Dec 2024"
                details={bullets([
                  "Built web applications with PHP, Laravel (v7-10), Vue.js, RESTful APIs, C# and .NET.",
                  "Worked with international clients on project updates and reporting.",
                  "Streamlined delivery with Jira, Trello and Slack; met 95% of project deadlines.",
                  "Led team initiatives that accelerated project delivery and code review automation.",
                ])}
              />

              <ExperienceCard
                image={SwivtLogo}
                fallback_image={SwivtFallbackLogo}
                title="Full Stack Developer"
                organization="Swivt Pvt. Ltd."
                address="Sanepa-2, Lalitpur, Nepal"
                alternateTitle="Swivt Pvt. Ltd."
                duration="Nov 2021 - Feb 2022"
                details={bullets([
                  "Built web applications with Vue.js and Laravel, extending functionality via RESTful APIs.",
                  "Integrated third-party RESTful APIs into existing products.",
                  "Main point of contact for Malaysian clients with 100% project satisfaction.",
                ])}
              />

              <ExperienceCard
                image={WebrootNepalLogo}
                fallback_image={WebrootNepalFallbackLogo}
                title="Backend Developer"
                organization="Webroot Multipurpose Pvt. Ltd."
                address="Butwal, Rupandehi, Nepal"
                alternateTitle="Webroot Multipurpose Pvt. Ltd."
                duration="Jan 2019 - Nov 2021"
                details={bullets([
                  "Improved code consistency by 25% by applying repository patterns to web apps and APIs.",
                  "Streamlined workflows via Trello and Flock, integrating webhooks and automation.",
                  "Led project planning and task management for scalable solutions.",
                ])}
              />
            </Row>
          </Container>

          <TitleBar title="Internships" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex", flexWrap: "wrap" }}>
              <ExperienceCard
                image={BootwalRDLogo}
                fallback_image={BootwalRDFallbackLogo}
                title="Junior Backend Developer Intern"
                organization="Bootwal Research and Development Pvt. Ltd."
                address="Butwal-13, Janakinagar, Nepal"
                alternateTitle="Bootwal Research and Development Pvt. Ltd."
                duration="Oct 2016 - Jan 2017"
                details={bullets([
                  "Designed database schemas for client web applications.",
                  "Built and maintained websites end to end.",
                  "Supported user acceptance testing cycles.",
                ])}
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Experience;
