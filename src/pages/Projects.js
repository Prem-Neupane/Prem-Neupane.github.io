import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import ProjectCard from "../components/ProjectCard";

const points = (lines) =>
  lines.map((line) => <li key={line}>{line}</li>);

const otherWork = [
  "Marketplace Nepal",
  "Murarkey",
  "AAA Taxi Tour",
];

const Projects = () => {
  return (
    <div
      className="primary outer-structure"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="inner-structure center"
        style={{ flexDirection: "column" }}
      >
        <TitleBar title="Key Projects" />
        <Container fluid>
          <Row className="justify-content-center">
            <ProjectCard
              title="Eindexamensite"
              subtitle="Digital exam preparation platform · Netherlands"
              link="https://eindexamensite.nl/"
              description="The most used digital exam trainer in the Netherlands, and a daily tool for final-exam preparation."
              points={points([
                "Implemented SSO for seamless authentication and integrated Azure Media Player for video streaming.",
                "Containerized the application and deployed a load balancer for traffic distribution.",
                "Reduced VMs from 4 to 2 using stored procedures, normalization, views and indexing.",
              ])}
            />

            <ProjectCard
              title="FIMM"
              subtitle="Fund management system · Federation of Investment Managers Malaysia"
              link="https://www.fimm.com.my/"
              description="A fund management platform serving Malaysian investment managers."
              points={points([
                "Implemented 7-8 modular services on a unified database architecture.",
                "Secured authentication and authorization with Keycloak AIMS.",
                "Delivered the services through Vue.js and Laravel with RESTful APIs.",
              ])}
            />

            <ProjectCard
              title="Leslinq"
              subtitle="Microlearning and e-learning platform"
              link="https://www.leslinq.com/en/"
              description="A microlearning platform used for staff training and e-learning."
              points={points([
                "Transitioned the backend stack to .NET MVC and built API services on Microsoft SQL Server.",
                "Developed new interfaces with Kendo UI, keeping them responsive and user friendly.",
              ])}
            />

            <ProjectCard
              title="Autowiki"
              subtitle="Nonprofit digital archive of individual cars"
              link="https://autowiki2.grafioffshorenepal.com/"
              description="A non-profit effort to build a global online database with digital archives of individual cars."
              points={points([
                "Built interactive frontends with Vue.js and scalable Laravel backends.",
                "Used stored procedures and optimized the Laravel ORM and business-logic layers for performance.",
              ])}
            />

            <ProjectCard
              title="Digital Sahuji"
              subtitle="Multivendor ecommerce for digital gadgets and products"
              link="https://digitalsahuji.com/"
              description="A multivendor ecommerce platform for digital gadgets and products."
              points={points([
                "Delivered a full-stack application with a responsive, customer-friendly interface.",
                "Engineered the backend with Laravel and designed RESTful APIs for data handling.",
                "Optimized database queries and stored procedures for performance and scalability.",
              ])}
            />
          </Row>
        </Container>

        <TitleBar title="More Work" />
        <Container fluid style={{ textAlign: "center" }}>
          <ul className="tag-list">
            {otherWork.map((item) => (
              <li key={item} className="resume-btn">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
