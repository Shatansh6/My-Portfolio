import React from "react";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import reactIcon from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import java from "../assets/java.svg";
import sql from "../assets/sql.svg";
import github from "../assets/github.svg";
import vscode from "../assets/vscode.svg";
import intellij from "../assets/intellij.svg";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: reactIcon },
      { name: "Bootstrap", icon: bootstrap },
    ],
  },
  {
    category: "Programming & Database",
    items: [
      { name: "Java", icon: java },
      { name: "SQL", icon: sql },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: github },
      { name: "VS Code", icon: vscode },
      { name: "IntelliJ", icon: intellij },
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
