import React from "react";
import { Container, Row } from "react-bootstrap";

import EducationCard from "../components/EducationCard";
// import CourseworkButton from "../components/CourseworkButton";
import TitleBar from "../components/TitleBar";

import NepathyaCollegeLogo from "../assets/webp/nepathyacollege.webp";
import NepathyaCollegeFallbackLogo from "../assets/jpg/nepathyacollege.jpg";
import OxfordCollegeLogo from "../assets/webp/oxfordcollege.webp";
import OxfordCollegeFallbackLogo from "../assets/jpg/oxfordcollege.jpg";

class Education extends React.Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="inner-structure center" style={{ flexDirection: "column" }}>
                    <TitleBar title="Education" />
                    <Container fluid style={{ textAlign: "center" }}>
                        <Row style={{ display: "inline-flex" }}>
                            <EducationCard
                                image={NepathyaCollegeLogo}
                                fallback_image={NepathyaCollegeFallbackLogo}
                                title="Bachelor in CSIT"
                                address="Butwal-Manigram, Rupandei"
                                degree="Bachelor in Science CSIT"
                                major="Computer Science"
                                class="Class of 2021"
                                duration="August 2016 - December 2021"
                                grade="3.00 GPA"
                                details={
                                    <React.Fragment>
                                        • Major: Computer Science & Information Technology
                                        <br />
                                        • Affilation: Tribhuwan University(TU)
                                        <br />
                                        • Dean's List (all semesters)
                                        <br />
                                        • Member, CSIT Association
                                        <br />
                                        • Web Developer Internship, Bootwal Research & development Pvt. ltd
                                    </React.Fragment>
                                }
                            />
                            <EducationCard
                                image={OxfordCollegeLogo}
                                fallback_image={OxfordCollegeFallbackLogo}
                                title="Oxford College"
                                address="Butwal-Sukkhanagar, Rupandehi"
                                degree="High School Diploma"
                                major="Science with Mathematics"
                                class="Class of 2016"
                                duration="July 2014 - May 2016"
                                grade={
                                    <React.Fragment>
                                        60.0% (Grade 12) <br />
                                    </React.Fragment>
                                }
                                details={
                                    <React.Fragment>
                                        • Simpe Student Learned Quitely
                                        <br />
                                        • Joined In Nov 2014)
                                        <br />
                                        • Passout in Apr 2016
                                        <br />
                                    </React.Fragment>
                                }
                            />
                        </Row>
                    </Container>
                    
                    {/* <TitleBar title="Computer Science Coursework" />
                    <Container fluid style={{ maxWidth: "95vw", textAlign: "center" }}>
                        <Row style={{ alignItems: "center", display: "inline-flex", justifyContent: "center" }}>
                            <CourseworkButton
                                title="Search Engines"
                                shortcode="COMPSCI 446"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Software Engineering"
                                shortcode="COMPSCI 320"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Data Management Practices"
                                shortcode="COMPSCI 345"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Algorithms"
                                shortcode="COMPSCI 311"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Artificial Intelligence"
                                shortcode="COMPSCI 383"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Computer Systems Principles"
                                shortcode="COMPSCI 230"
                                term="Fall 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Reasoning Under Uncertainty"
                                shortcode="COMPSCI 240"
                                term="Fall 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Computation"
                                shortcode="COMPSCI 250"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Programming Methodology"
                                shortcode="COMPSCI 220"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Data Analysis in R"
                                shortcode="CICS 197R"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Programming with Data Structures"
                                shortcode="COMPSCI 187"
                                term="Fall 2019"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-19-course-descriptions"
                            />
                           
                        </Row>
                    </Container> */}
                    
                    {/* <TitleBar title="Mathematics & Statistics Coursework" />
                    <Container fluid style={{ maxWidth: "95vw", textAlign: "center" }}>
                        <Row style={{ alignItems: "center", display: "inline-flex", justifyContent: "center" }}>
                            <CourseworkButton
                                title="Statistics II"
                                shortcode="STATISTC 516"
                                term="Fall 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Statistics I"
                                shortcode="STATISTC 515"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Advanced Multivariate Calculus"
                                shortcode="MATH 425"
                                term="Spring 2021"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-21-course-descriptions"
                            />
                            <CourseworkButton
                                title="Ordinary Differential Equations"
                                shortcode="MATH 331"
                                term="Fall 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Introduction to Linear Algebra"
                                shortcode="MATH 235"
                                term="Spring 2020"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/spring-20-course-descriptions"
                            />
                            <CourseworkButton
                                title="Multivariate Calculus"
                                shortcode="MATH 233"
                                term="Fall 2019"
                                institution="University of Massachusetts Amherst"
                                link="https://www.cics.umass.edu/content/fall-19-course-descriptions"
                            />
                        </Row>
                    </Container> */}
                  
                </div>
            </div>
        );
    }
}

export default Education;
