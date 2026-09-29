import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = (props) => {
  return (
    <Col xs={12} lg={6} className="d-flex">
      <div className="project-card">
        <div className="project-card-head">
          <t>{props.title}</t>
          {props.subtitle ? <sm>{props.subtitle}</sm> : null}
        </div>
        <div className="project-card-body">
          <p>{props.description}</p>
          <ul className="project-card-points">{props.points}</ul>
        </div>
        {props.link ? (
          <a
            className="project-card-link"
            href={props.link}
              target="_blank"
              rel="noopener noreferrer"
          >
            Visit project
          </a>
        ) : null}
      </div>
    </Col>
  );
};

export default ProjectCard;
