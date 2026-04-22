"use client";

import { useEffect, useState } from "react";

const columns = [
  {
    title: "Divisions",
    links: ["Fintech", "Crypto / XRP", "Precious Metals"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Risk Disclosure", "Compliance"],
  },
];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 8));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="pt-12 pb-8 px-[60px] relative z-1 max-[960px]:px-6"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] mb-12 max-[960px]:grid-cols-2">
        <div>
          <div
            className="font-[Orbitron,monospace] font-black text-[18px] tracking-[2px] mb-3"
            style={{
              color: "var(--green)",
              textShadow: "0 0 20px rgba(255,107,0,.4)",
            }}
          >
            43_INDUSTRIES
          </div>
          <p className="text-[11px] leading-8" style={{ color: "var(--white-dim)" }}>
            <span style={{ color: "var(--green)" }}># </span>The foundation of
            next-generation wealth.
            <br />
            <span style={{ color: "var(--green)" }}># </span>Fintech · Crypto (XRP) ·
            Precious Metals
            <br />
            <span style={{ color: "var(--green)" }}># </span>Nairobi, Kenya
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4
              className="text-[10px] tracking-[2px] uppercase mb-4 flex items-center gap-1.5"
              style={{ color: "var(--green)" }}
            >
              <span style={{ opacity: 0.4 }}>#</span> {col.title}
            </h4>
            <ul className="list-none flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[11px] no-underline flex gap-2 cursor-none transition-colors duration-200 hover:!text-[var(--green)]"
                    style={{ color: "var(--white-dim)" }}
                  >
                    <span style={{ opacity: 0.3 }}>–</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="pt-6 flex justify-between items-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-[10px]" style={{ color: "var(--white-dim)" }}>
          © 2026 <span style={{ color: "var(--green)" }}>43_industries</span>. All
          rights reserved.
        </p>
        <p className="text-[10px]" style={{ color: "var(--white-dim)" }}>
          {time ? (
            <>
              sys.time ={" "}
              <span style={{ color: "var(--green)" }}>&quot;{time} EAT&quot;</span>
              &nbsp;|&nbsp; Investment involves risk.
            </>
          ) : (
            "Investment involves risk."
          )}
        </p>
      </div>
    </footer>
  );
}
