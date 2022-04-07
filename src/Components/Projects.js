import React from "react";
import { Description } from "./Description";

export const Projects = ({ projects, menu }) => {
  return (
    <section className="projects-experience section" id="projects">
      <h2 className="section-title">{ menu.find((i) => i.section === '#projects').label }</h2>
      <div className="experience__container bd-grid">
        {projects.map((project) => (
          <Proyect key={project.company} {...project} />
        ))}
      </div>
    </section>
  );
};

const Proyect = ({ name, company, period, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name}{!!company ? ` - ${company}` : ''}
        </h3>
        <span className="experience__project">{period}</span>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};
