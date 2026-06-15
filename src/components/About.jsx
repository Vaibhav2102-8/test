import { personal } from "../data/resumeData";
import "./About.css";

const highlights = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Cloud Platforms" },
  { value: "4", label: "Certifications" },
  { value: "200M+", label: "Daily Records Processed" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-label">About Me</div>
        <h2 className="section-title">Turning raw data into business value</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>{personal.summary}</p>
            <div className="about__contact">
              <a href={`mailto:${personal.email}`} className="contact-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                {personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className="contact-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.29 6.29l.9-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {personal.phone}
              </a>
              <span className="contact-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {personal.location}
              </span>
            </div>
          </div>

          <div className="about__stats">
            {highlights.map((h) => (
              <div key={h.label} className="stat-card">
                <div className="stat-card__value">{h.value}</div>
                <div className="stat-card__label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
