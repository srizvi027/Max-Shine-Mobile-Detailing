"use client";

import { useEffect, useState } from "react";
import { business, navLinks } from "@/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled || open ? " nav--solid" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={close} aria-label="Max Shine Mobile Detailing, back to top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="" width="44" height="44" />
          <span>
            MAX SHINE
            <small>MOBILE DETAILING</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={business.phoneTel} className="btn btn--red nav__cta">
          Get a Quote
        </a>

        <button
          type="button"
          className={`nav__toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`menu${open ? " is-open" : ""}`}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={business.phoneTel} className="btn btn--red" onClick={close}>
          Get a Quote
        </a>
        <p>{business.phoneDisplay}</p>
      </div>
    </header>
  );
}
