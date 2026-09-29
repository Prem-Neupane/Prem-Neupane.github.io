import React from "react";
import { Row, Button } from "react-bootstrap";
import {
  Amazonaws,
  Bootstrap,
  C,
  Cplusplus,
  Csharp,
  Codeigniter,
  CssThree,
  Docker,
  Dotnet,
  Firebase,
  Git,
  Github,
  Html5,
  Javascript,
  Jira,
  Jquery,
  Laravel,
  Linux,
  Microsoftsqlserver,
  Mongodb,
  Mysql,
  Nodedotjs,
  Openai,
  Php,
  Postman,
  Postgresql,
  Python,
  ReactJs,
  Slack,
  Sonarqube,
  Sqlite,
  Tailwindcss,
  Trello,
  Typescript,
  Vuedotjs,
} from "@icons-pack/react-simple-icons";

// key must match the `logo` prop passed to <SkillCard />
const logoDictionary = {
  php: Php,
  laravel: Laravel,
  codeigniter: Codeigniter,
  python: Python,
  javascript: Javascript,
  typescript: Typescript,
  c: C,
  cplusplus: Cplusplus,
  csharp: Csharp,
  dotnet: Dotnet,
  vue: Vuedotjs,
  react: ReactJs,
  node: Nodedotjs,
  openai: Openai,
  jquery: Jquery,
  html5: Html5,
  css3: CssThree,
  bootstrap: Bootstrap,
  tailwind: Tailwindcss,
  mysql: Mysql,
  sqlserver: Microsoftsqlserver,
  sqlite: Sqlite,
  mongodb: Mongodb,
  postgresql: Postgresql,
  firebase: Firebase,
  docker: Docker,
  aws: Amazonaws,
  linux: Linux,
  git: Git,
  github: Github,
  postman: Postman,
  jira: Jira,
  trello: Trello,
  slack: Slack,
  sonarqube: Sonarqube,
};

const SkillCard = (props) => {
  const Logo = logoDictionary[props.logo];

  if (!Logo) {
    return null;
  }

  return (
    <Button
      className="resume-btn"
      size="md"
      href={props.link}
      target={props.link ? "_blank" : undefined}
      rel={props.link ? "noopener" : undefined}
    >
      <Row>
        <Logo size={24} color={props.color} />
        <span style={{ padding: "0px 5px" }}>{props.title}</span>
      </Row>
    </Button>
  );
};

export default SkillCard;
