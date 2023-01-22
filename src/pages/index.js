import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Qualifications from "../sections/Qualifications";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import styles from "./index.module.css";
import Music from "../sections/Music";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <div className={styles.workEducation}>
          <Work />
          <Education />
        </div>
        <div className={styles.achievementsCertificationPhilanthropy}>
          <div>
            <Qualifications />
          </div>
        </div>
        <Resume />
        <Music />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
