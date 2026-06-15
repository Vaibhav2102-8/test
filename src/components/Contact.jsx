import { personal } from "../data/resumeData";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="contact__sub">
          Open to data engineering roles, consulting, and collaboration. Feel free to reach out!
        </p>

        <div className="contact__cards">
          <a href={`mailto:${personal.email}`} className="contact-card">
            <div className="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </div>
            <div className="contact-card__label">Email</div>
            <div className="contact-card__value">{personal.email}</div>
          </a>

          <a href={`tel:${personal.phone}`} className="contact-card">
            <div className="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.29 6.29l.9-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="contact-card__label">Phone</div>
            <div className="contact-card__value">{personal.phone}</div>
          </a>

          <div className="contact-card">
            <div className="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="contact-card__label">Location</div>
            <div className="contact-card__value">{personal.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
