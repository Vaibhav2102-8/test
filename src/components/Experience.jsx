import { useState } from "react";
import { experience } from "../data/resumeData";
import "./Experience.css";

const cloudColor = {
  AWS: { bg: "#fffbeb", color: "#d97706", border: "#fde68a" },
  Azure: { bg: "#eff6ff", color: "#1a56db", border: "#bfdbfe" },
  GCP: { bg: "#f0fdf4", color: "#15803d", border: "#bbf7d0" },
  Data: { bg: "#faf5ff", color: "#7c3aed", border: "#e9d5ff" },
};

function getCloud(title) {
  if (title.includes("AWS")) return "AWS";
  if (title.includes("Azure")) return "Azure";
  if (title.includes("GCP")) return "GCP";
  return "Data";
}

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-label">Work History</div>
        <h2 className="section-title">Professional Experience</h2>

        <div className="exp__list">
          {experience.map((job, i) => {
            const cloud = getCloud(job.title);
            const style = cloudColor[cloud];
            const isOpen = expanded === i;
            return (
              <div key={i} className={`exp-card${isOpen ? " exp-card--open" : ""}`}>
                <div className="exp-card__header" onClick={() => setExpanded(isOpen ? -1 : i)}>
                  <div className="exp-card__left">
                    <span
                      className="exp-card__cloud"
                      style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
                    >
                      {cloud}
                    </span>
                    <div>
                      <h3 className="exp-card__title">{job.title}</h3>
                      <div className="exp-card__meta">
                        <strong>{job.company}</strong> · {job.location}
                      </div>
                    </div>
                  </div>
                  <div className="exp-card__right">
                    <span className="exp-card__period">{job.period}</span>
                    <span className={`exp-card__chevron${isOpen ? " exp-card__chevron--up" : ""}`}>▾</span>
                  </div>
                </div>

                {isOpen && (
                  <div className="exp-card__body">
                    {job.description && <p className="exp-card__desc">{job.description}</p>}
                    <div className="exp-card__env">
                      <span>Environment:</span> {job.environment}
                    </div>
                    <ul className="exp-card__bullets">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
