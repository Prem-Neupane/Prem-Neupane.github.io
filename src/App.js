import React, { Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";

import NavigationTabBar from "./components/NavigationTabBar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Education = lazy(() => import("./pages/Education"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Error404 = lazy(() => import("./pages/Error404"));

const Loading = () => {
  return (
    <div
      className="center outer-structure"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "home",
    };
    this.componentList = [
      "home",
      "about",
      "experience",
      "skills",
      "projects",
      "education",
      "achievements",
    ];
  }

  setTab = (newTab) => {
    this.setState({ currentTab: newTab });
  };

  renderSwitch(currentTab) {
    switch (currentTab) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "achievements":
        return <Achievements />;
      default:
        return <Error404 />;
    }
  }

  render() {
    return (
      <div>
        <NavigationTabBar
          tabs={this.componentList}
          currentTab={this.state.currentTab}
          setTab={this.setTab}
        />
        <Suspense fallback={Loading()}>
          {this.renderSwitch(this.state.currentTab)}
        </Suspense>
        <Footer style={{ zIndex: -2 }} />
      </div>
    );
  }
}

export default App;
