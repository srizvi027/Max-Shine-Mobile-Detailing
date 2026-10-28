import { business } from "@/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__name">{business.name}</p>
          <p className="footer__tag">{business.tagline}</p>
        </div>
        <div>
          <p className="footer__label">Contact</p>
          <a href={business.phoneTel}>{business.phoneDisplay}</a>
          <a href={business.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
        <div>
          <p className="footer__label">Service areas</p>
          <p>{business.areas.join(" · ")}</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {business.name}</span>
      </div>
    </footer>
  );
}
