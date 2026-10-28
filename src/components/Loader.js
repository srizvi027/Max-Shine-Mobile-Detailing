"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__content">
        <div className="loader__orbit" />
        <div className="loader__mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="" width="260" height="260" />
          <span className="loader__sweep" />
        </div>
        <p className="loader__caption">PREPARING YOUR SHINE</p>
        <div className="loader__progress">
          <span />
        </div>
      </div>
    </div>
  );
}
