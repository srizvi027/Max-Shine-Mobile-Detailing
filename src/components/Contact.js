import Icon from "./Icons";
import { business } from "@/content";

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <picture className="cta__media">
        <source media="(max-width: 700px)" srcSet="/images/cta-mobile.jpg" />
        <img
          src="/images/cta.jpg"
          alt="Freshly detailed red crossover parked under a carport"
          width="1536"
          height="864"
          loading="lazy"
        />
      </picture>
      <div className="cta__overlay" />

      <div className="container cta__content" data-reveal>
        <p className="eyebrow eyebrow--light">GET IN TOUCH</p>
        <h2>
          READY TO BRING
          <br />
          BACK THE SHINE?
        </h2>
        <p className="cta__lead">
          Get in touch for a quote or ask about our maintenance plans.
        </p>
        <div className="cta__actions">
          <a href={business.phoneTel} className="btn btn--red">
            <Icon name="phone" size={18} /> Call Now
          </a>
          <a href={business.phoneSms} className="btn btn--ghost">
            <Icon name="chat" size={18} /> Text for a Quote
          </a>
        </div>
        <p className="cta__phone">
          <a href={business.phoneTel}>{business.phoneDisplay}</a>
        </p>
        <a
          className="cta__fb"
          href={business.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook" size={18} /> Prefer social media? Find us on Facebook
        </a>
      </div>
    </section>
  );
}
