import React from "react";
import { Container, Row } from "react-bootstrap";

import EducationCard from "../components/EducationCard";
import TitleBar from "../components/TitleBar";

import MotipurSchoolLogo from "../assets/webp/motipurschoollogo.webp";
import MotipurSchoolFallbackLogo from "../assets/jpg/motipurschoollogo.jpg";
import NepathyaCollegeLogo from "../assets/webp/nepathyacollege.webp";
import NepathyaCollegeFallbackLogo from "../assets/jpg/nepathyacollege.jpg";
import OxfordCollegeLogo from "../assets/webp/oxfordcollege.webp";
import OxfordCollegeFallbackLogo from "../assets/jpg/oxfordcollege.jpg";

const Education = () => {
  return (
    <div
      className="primary outer-structure"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="inner-structure center"
        style={{ flexDirection: "column" }}
      >
        <TitleBar title="Education" />
        <Container fluid style={{ textAlign: "center" }}>
          <Row style={{ display: "inline-flex", flexWrap: "wrap" }}>
            <EducationCard
              image={NepathyaCollegeLogo}
              fallback_image={NepathyaCollegeFallbackLogo}
              title="BSc. CSIT"
              address="Manigram-5, Rupandehi, Nepal"
              degree="Bachelor of Science in Computer Science and Information Technology"
              major="Affiliated to Tribhuvan University"
              class="Class of 2023"
              duration="Nov 2017 - Jul 2023"
              grade="Dean's List"
              details={
                <React.Fragment>
                  • Major: Computer Science &amp; Information Technology
                  <br />
                  • Affiliation: Tribhuvan University (TU)
                  <br />• Dean's List (all semesters)
                  <br />• Member, CSIT Association
                </React.Fragment>
              }
            />

            <EducationCard
              image={OxfordCollegeLogo}
              fallback_image={OxfordCollegeFallbackLogo}
              title="Oxford College"
              address="Butwal, Rupandehi, Nepal"
              degree="Higher Secondary Education"
              major="Science with Mathematics"
              class="Class of 2016"
              duration="Completed 2016"
              grade="Higher Secondary"
              details={
                <React.Fragment>
                  • Higher Secondary Education (HSE)
                  <br />
                  • Science with Mathematics
                  <br />• Completed in 2016
                </React.Fragment>
              }
            />

            <EducationCard
              image={MotipurSchoolLogo}
              fallback_image={MotipurSchoolFallbackLogo}
              title="Motipur HSS"
              address="Motipur, Rupandehi, Nepal"
              degree="School Level Certification"
              class="School leaving, 2014"
              duration="2006 - 2014"
              grade="School Leaving Certificate"
              details={
                <React.Fragment>
                  • School level certification
                  <br />
                  • Completed in 2014
                </React.Fragment>
              }
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Education;
