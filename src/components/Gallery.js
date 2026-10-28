import Image from "next/image";
import { gallery } from "@/content";

export default function Gallery() {
  return (
    <section className="section section--gray" id="work">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">OUR WORK</p>
          <h2>
            THE DIFFERENCE
            <br />
            IS IN THE DETAIL.
          </h2>
        </div>

        <div className="gallery">
          {gallery.map((g, i) => (
            <figure
              key={g.src}
              className={`gallery__item gallery__item--${g.size}`}
              data-reveal
              style={{ "--d": `${(i % 2) * 90}ms` }}
            >
              <Image
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                sizes={
                  g.size === "large"
                    ? "(max-width: 900px) 100vw, 58vw"
                    : "(max-width: 900px) 50vw, 40vw"
                }
                quality={75}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
