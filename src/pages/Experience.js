import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import ExperienceCard from "../components/ExperienceCard";
import TitleBar from "../components/TitleBar";

import WebrootNepalLogo from "../assets/webp/webrootnepal.webp";
import BootwalRDLogo from "../assets/webp/bootwalrd.webp";


import WebrootNepalFallbackLogo from "../assets/jpg/webrootnepal.jpg";
import BootwalRDFallbackLogo from "../assets/jpg/bootwalrd.jpg";

class Experience extends Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="inner-structure center" style={{ flexDirection: "column" }}>
                    <TitleBar title="Current Involvements" />
                    <Container fluid style={{ textAlign: "center" }}>
                        <Row style={{ display: "inline-flex" }}>
                            <ExperienceCard
                                image={WebrootNepalLogo}
                                fallback_image={WebrootNepalFallbackLogo}
                                title="Full Time @ Mid Level Laravel Developer"
                                organization="Webroot Multipurpose Pvt. Ltd."
                                address="Butwal-Tinkune SukhhaNagar"
                                alternateTitle="Webroot Multipurpose Pvt. Ltd."
                                duration="DEC, 2017– Present"
                                details={
                                    <React.Fragment>
                                        • Developing  web-based application
                                        <br />
                                        • Following agile methodologies
                                        <br />
                                        • Hands on skills in HTML, CSS, Bootstrap,PHP, C, C++, JS,MySQL,Git with GitHub
                                    </React.Fragment>
                                }
                            />
                           
                        </Row>
                    </Container>
                    <TitleBar title="Past Experience" />
                    <Container fluid style={{ textAlign: "center" }}>
                        <Row style={{ display: "inline-flex" }}>
                            <ExperienceCard
                                image={BootwalRDLogo}
                                fallback_image={BootwalRDFallbackLogo}
                                title="Internship @ junior backend developer "
                                organization="Bootwal Research And Development Pvt. Ltd"
                                address="Butwal-13, Janakinagar"
                                alternateTitle="Butwal-13, Janakinagar"
                                duration="Oct 2016 - Jan 2017"
                                details={
                                    <React.Fragment>
                                        • Design Schema
                                        <br />
                                        • Developing a website
                                        <br />
                                        • User acceptance testing
                                    </React.Fragment>
                                }
                            />
                         
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Experience;
