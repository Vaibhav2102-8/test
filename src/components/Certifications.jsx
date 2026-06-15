import { certifications } from "../data/resumeData";
import "./Certifications.css";

const iconMap = {
  aws: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect width="80" height="80" rx="12" fill="#FF9900" fillOpacity="0.12"/>
      <text x="40" y="48" textAnchor="middle" fontSize="22" fontWeight="800" fill="#d97706">AWS</text>
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect width="80" height="80" rx="12" fill="#34A853" fillOpacity="0.12"/>
      <text x="40" y="48" textAnchor="middle" fontSize="22" fontWeight="800" fill="#15803d">GCP</text>
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect width="80" height="80" rx="12" fill="#0078D4" fillOpacity="0.12"/>
      <text x="40" y="48" textAnchor="middle" fontSize="18" fontWeight="800" fill="#1a56db">Azure</text>
    </svg>
  ),
};

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-label">Credentials</div>
        <h2 className="section-title">Certifications</h2>
        <div className="cert__grid">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card">
              <div className="cert-card__icon">{iconMap[cert.icon]}</div>
              <div className="cert-card__info">
                <h3 className="cert-card__name">{cert.name}</h3>
                <span className="cert-card__code">{cert.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
