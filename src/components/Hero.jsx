import { personal } from "../data/resumeData";
import "./Hero.css";

export default function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__badge">Data Engineer · 4+ Years Experience</div>
        <h1 className="hero__name">{personal.name}</h1>
        <p className="hero__tagline">
          Building scalable <span>data pipelines</span> across AWS, Azure &amp; GCP
        </p>
        <p className="hero__summary">{personal.summary}</p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => handleScroll("#experience")}>
            View Experience
          </button>
          <button className="btn btn--outline" onClick={() => handleScroll("#contact")}>
            Get in Touch
          </button>
        </div>
        <div className="hero__clouds">
          <span className="cloud-tag cloud-tag--aws">AWS</span>
          <span className="cloud-tag cloud-tag--azure">Azure</span>
          <span className="cloud-tag cloud-tag--gcp">GCP</span>
          <span className="cloud-tag">Spark</span>
          <span className="cloud-tag">Kafka</span>
          <span className="cloud-tag">Databricks</span>
          <span className="cloud-tag">Airflow</span>
        </div>
      </div>
      <div className="hero__scroll-hint" onClick={() => handleScroll("#about")}>
        <span>Scroll</span>
        <div className="hero__arrow"></div>
      </div>
    </section>
  );
}
