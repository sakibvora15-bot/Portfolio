import { useState } from "react";
import DATA from "../data/portfolioData";
import { Section, SectionTitle } from "./Section";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section id="projects" className="projects">
      <SectionTitle label="03 · Projects" title="Things I've Built" />

      <div className="projects__grid">
        {DATA.projects.map((project, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={project.name}
              className={`projects__card ${isOpen ? "projects__card--open" : ""}`}
              onClick={() => toggle(i)}
              style={{
                borderColor: isOpen
                  ? project.color + "55"
                  : undefined,
                boxShadow: isOpen
                  ? `0 0 40px ${project.color}20`
                  : undefined,
              }}
              onMouseEnter={(e) => {
                if (!isOpen) e.currentTarget.style.borderColor = project.color + "40";
              }}
              onMouseLeave={(e) => {
                if (!isOpen) e.currentTarget.style.borderColor = "";
              }}
            >
              <div className="projects__icon">{project.icon}</div>
              <h3 className="projects__name">{project.name}</h3>

              <div className="projects__stack">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="projects__stack-tag"
                    style={{
                      color: project.color,
                      background: project.color + "15",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className={`projects__details ${
                  isOpen ? "projects__details--open" : "projects__details--closed"
                }`}
              >
                <ul className="projects__bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="projects__bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="projects__toggle">
                {isOpen ? "▲ COLLAPSE" : "▼ EXPAND"}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
