import Icon from "./Icons";
import { services } from "@/content";

export default function Services() {
  return (
    <section className="section section--white" id="services">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">CARE FOR EVERY DETAIL</p>
          <h2>
            YOUR VEHICLE,
            <br />
            AT ITS BEST.
          </h2>
        </div>

        <div className="services">
          {services.map((s, i) => (
            <article className="service" key={s.title} data-reveal style={{ "--d": `${i * 90}ms` }}>
              <div className="service__top">
                <span className="service__num">0{i + 1}</span>
                <span className="service__icon">
                  <Icon name={s.icon} />
                </span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
