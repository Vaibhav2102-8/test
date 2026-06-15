import { education } from "../data/resumeData";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-label">Academic Background</div>
        <h2 className="section-title">Education</h2>
        <div className="edu__list">
          {education.map((edu) => (
            <div key={edu.degree} className="edu-card">
              <div className="edu-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <h3 className="edu-card__degree">{edu.degree}</h3>
                <div className="edu-card__school">{edu.school}</div>
                <div className="edu-card__location">{edu.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
