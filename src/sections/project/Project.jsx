import React from "react";
import "./ProjectStyles.css";
import viberr from "./../../assets/viberr.png";
import freshBurger from "./../../assets/fresh-burger.png";
import hippster from "./../../assets/hipsster.png";
import ProjectView from "../../common/ProjectView";
import fitlift from "./../../assets/fitlift.png";

function Project() {
  const projectDetail = [
    { img: viberr, h4: "Viberr", p: "Streaming App" },
    { img: freshBurger, h4: "Fresh Burger", p: "Hamburger Restuarant" },
    { img: hippster, h4: "Hippster", p: "Glasses Shop" },
    { img: fitlift, h4: "FitLift", p: "Fitness App" },
  ];
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projectContainer">
        {projectDetail.map((el) => {
          return <ProjectView img={el.img} h4={el.h4} p={el.p}></ProjectView>;
        })}
      </div>
    </section>
  );
}

export default Project;
