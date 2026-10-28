import { business } from "@/content";

export default function Areas() {
  return (
    <section className="section section--black areas" id="areas">
      <div className="container areas__grid">
        <div data-reveal>
          <p className="eyebrow eyebrow--light">SERVICE AREAS</p>
          <h2>
            MOBILE DETAILING,
            <br />
            WHERE YOU NEED IT.
          </h2>
          <p className="areas__note">
            Not sure if we cover your location? Call or text us to ask.
          </p>
          <a href={business.phoneSms} className="btn btn--red">
            Check Availability
          </a>
          <p className="areas__fallback">
            Or call{" "}
            <a href={business.phoneTel}>{business.phoneDisplay}</a>
          </p>
        </div>

        <ul className="areas__list" data-reveal style={{ "--d": "120ms" }}>
          {business.areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
