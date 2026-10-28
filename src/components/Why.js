import Icon from "./Icons";
import { benefits } from "@/content";

export default function Why() {
  return (
    <section className="section section--white why" id="why">
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <p className="eyebrow">WHY CHOOSE MAX SHINE?</p>
        </div>
        <div className="why__grid">
          {benefits.map((b, i) => (
            <div className="why__item" key={b.title} data-reveal style={{ "--d": `${i * 90}ms` }}>
              <span className="why__icon">
                <Icon name={b.icon} size={34} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
