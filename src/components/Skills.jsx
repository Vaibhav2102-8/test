import { skills } from "../data/resumeData";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-label">Technical Skills</div>
        <h2 className="section-title">Tools &amp; Technologies</h2>
        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3 className="skill-card__category">{group.category}</h3>
              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
