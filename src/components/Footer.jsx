import { personal } from "../data/resumeData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <span>Built with React &amp; Vite · Hosted on GitHub Pages</span>
      </div>
    </footer>
  );
}
