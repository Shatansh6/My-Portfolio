import React from "react";

import html from "../assets/portfolioSkilllogos/HTML.png";
import css from "../assets/portfolioSkilllogos/CSS.png";
import js from "../assets/portfolioSkilllogos/javascript.png";
import reactIcon from "../assets/portfolioSkilllogos/react.png";
import bootstrap from "../assets/portfolioSkilllogos/bootstrap.png";
import java from "../assets/java.svg";
import github from "../assets/portfolioSkilllogos/git.png";
import vscode from "../assets/portfolioSkilllogos/vscode.png";
import intellij from "../assets/intellij.svg";
import postmen from "../assets/postmen.svg"
import mongodb from "../assets/portfolioSkilllogos/mongoDB.png"
import tailwind from "../assets/portfolioSkilllogos/tailwind.png"
import express from "../assets/portfolioSkilllogos/express.png"
import nodejs from "../assets/portfolioSkilllogos/nodejs.png"
import gsap from "../assets/portfolioSkilllogos/gsap.png"
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Tailwind", icon: tailwind },
      { name: "JavaScript", icon: js },
      { name: "React JS", icon: reactIcon },
      { name: "Bootstrap", icon: bootstrap },
      { name: "GSAP", icon: gsap },
    ],
  },
  {
    category: "Backend",
    items: [
      {name:"mongoDB",icon:mongodb},
      {name:"Express JS",icon:express},
      {name:"node JS",icon:nodejs},
      { name: "Java", icon: java },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: github },
      { name: "VS Code", icon: vscode },
      { name: "IntelliJ", icon: intellij },
      {name:"Postmen",icon:postmen},
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="resume-section skills-flat">
      <h2>Skills & Tools</h2>

      {skills.map((group, index) => (
        <div key={index} className="skills-row">
          <h3>{group.category}</h3>

          <div className="skills-chips">
            {group.items.map((skill, i) => (
              <div key={i} className="skill-chip">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
