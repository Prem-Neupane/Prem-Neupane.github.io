import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import SkillCard from "../components/SkillCard";

const skillGroups = [
  {
    title: "Backend & Languages",
    skills: [
      { title: "PHP", logo: "php", color: "#777BB4" },
      { title: "Laravel", logo: "laravel", color: "#FF2D20" },
      { title: "CodeIgniter", logo: "codeigniter", color: "#EE3C26" },
      { title: "C#", logo: "csharp", color: "#9B4F96" },
      { title: ".NET MVC", logo: "dotnet", color: "#512BD4" },
      { title: "JavaScript", logo: "javascript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { title: "Vue.js", logo: "vue", color: "#4FC08D" },
      { title: "React", logo: "react", color: "#61DAFB" },
      { title: "TypeScript", logo: "typescript", color: "#3178C6" },
      { title: "jQuery", logo: "jquery", color: "#0769AD" },
      { title: "HTML5", logo: "html5", color: "#E34F26" },
      { title: "CSS3", logo: "css3", color: "#1572B6" },
      { title: "Bootstrap", logo: "bootstrap", color: "#563D7C" },
      { title: "Tailwind", logo: "tailwind", color: "#06B6D4" },
    ],
  },
  {
    title: "Architecture & APIs",
    skills: [
      { title: "RESTful APIs", logo: "postman", color: "#FF6C37" },
      { title: "MVC / HMVC / MVVM", logo: "dotnet", color: "#512BD4" },
      { title: "Repository Pattern", logo: "laravel", color: "#FF2D20" },
      { title: "Microservices", logo: "docker", color: "#2496ED" },
      { title: "Event-Driven Design", logo: "node", color: "#339933" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { title: "MySQL", logo: "mysql", color: "#4479A1" },
      { title: "SQL Server", logo: "sqlserver", color: "#CC2927" },
      { title: "SQLite", logo: "sqlite", color: "#003B57" },
      { title: "MongoDB", logo: "mongodb", color: "#47A248" },
      { title: "PostgreSQL", logo: "postgresql", color: "#4169E1" },
      { title: "Firebase", logo: "firebase", color: "#FFCA28" },
      { title: "Stored Procedures & Indexing", logo: "mysql", color: "#4479A1" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { title: "Docker", logo: "docker", color: "#2496ED" },
      { title: "Linux", logo: "linux", color: "#FCC624" },
      { title: "Git", logo: "git", color: "#F05032" },
      { title: "GitHub", logo: "github", color: "#FFFFFF" },
      { title: "AWS S3", logo: "aws", color: "#FF9900" },
    ],
  },
  {
    title: "Engineering & Collaboration",
    skills: [
      { title: "Jira", logo: "jira", color: "#2684FF" },
      { title: "Trello", logo: "trello", color: "#0079BF" },
      { title: "Slack", logo: "slack", color: "#4A154B" },
      { title: "SonarQube", logo: "sonarqube", color: "#4E9BCD" },
      { title: "Code Reviews", logo: "github", color: "#FFFFFF" },
      { title: "Technical Planning", logo: "jira", color: "#2684FF" },
    ],
  },
  {
    title: "AI-Assisted Development",
    skills: [
      { title: "Cursor", logo: "typescript", color: "#61DAFB" },
      { title: "Claude", logo: "node", color: "#D97757" },
      { title: "OpenCode", logo: "node", color: "#339933" },
      { title: "OpenAI", logo: "openai", color: "#412991" },
      { title: "Antigravity", logo: "github", color: "#FFFFFF" },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="primary outer-structure"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="inner-structure center"
        style={{ flexDirection: "column" }}
      >
        <TitleBar title="Skills" />
        {skillGroups.map((group) => (
          <Container fluid key={group.title} style={{ textAlign: "center" }}>
            <TitleBar title={group.title} />
            <Row
              className="justify-content-center"
              style={{ alignItems: "center" }}
            >
              {group.skills.map((skill) => (
                <SkillCard
                  key={`${group.title}-${skill.title}`}
                  title={skill.title}
                  logo={skill.logo}
                  color={skill.color}
                />
              ))}
            </Row>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default Skills;
