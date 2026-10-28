import { business } from "@/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <picture className="hero__media">
        <source media="(max-width: 700px)" srcSet="/images/hero-mobile.jpg" />
        <img
          src="/images/hero.jpg"
          alt="Freshly detailed black sedan parked under a blue sky"
          width="1536"
          height="864"
          fetchPriority="high"
        />
      </picture>
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow eyebrow--light hero__a1">
          MOBILE AUTO DETAILING · SOUTHEAST OKLAHOMA
        </p>
        <h1 className="hero__a2">
          A DEEPER CLEAN.
          <br />A SHARPER SHINE.
        </h1>
        <p className="hero__lead hero__a3">
          Professional mobile detailing that brings the shine to you. Convenient
          service for your vehicle at home or wherever you need us.
        </p>
        <div className="hero__actions hero__a4">
          <a href={business.phoneTel} className="btn btn--red">
            Get a Quote
          </a>
          <a href={business.phoneTel} className="btn btn--ghost">
            Call or Text
          </a>
        </div>
        <p className="hero__serving hero__a5">
          Serving Broken Bow, Idabel, Hochatown &amp; surrounding areas.
        </p>
      </div>
    </section>
  );
}
