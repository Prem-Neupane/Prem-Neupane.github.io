import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import AchievementsCard from "../components/AchievementsCard";

const Achievements = () => {
  return (
    <div
      className="primary outer-structure"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="inner-structure center"
        style={{ flexDirection: "column" }}
      >
        <TitleBar title="Honors & Community" />
        <Container fluid>
          <Row className="justify-content-center" style={{ alignItems: "center" }}>
            <AchievementsCard
              title="National Level Programming Contest"
              institution="Nepali Samaj"
              date="2017"
              details={
                <React.Fragment>
                  Participated in a national level programming contest organised
                  by Nepali Samaj.
                </React.Fragment>
              }
            />

            <AchievementsCard
              title="Organizer, Mentor & Speaker"
              institution="Word Camp Butwal · Volunteer Wrangler"
              date="2020"
              details={
                <React.Fragment>
                  Served as an organizer, mentor and speaker at Word Camp Butwal,
                  volunteering as a Wrangler for the WordPress community event.
                </React.Fragment>
              }
            />

            <AchievementsCard
              title="Mentor"
              institution="Women Leaders in Technology (WLIT)"
              date="2023"
              details={
                <React.Fragment>
                  Mentored participants in Women Leaders in Technology (WLIT),
                  supporting women entering the technology field.
                </React.Fragment>
              }
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Achievements;
