"use client";

import { useState } from "react";

const tabs = [
  { label: "main.py", href: "#home" },
  { label: "about.py", href: "#about" },
  { label: "divisions.py", href: "#divisions" },
  { label: "contact.py", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState(0);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-10 h-[52px]"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="hidden md:flex h-full items-stretch">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={tab.href}
            onClick={() => setActive(i)}
            className="flex items-center gap-2 px-5 text-[12px] no-underline transition-colors duration-200 cursor-none tracking-[0.5px]"
            style={{
              borderRight: "1px solid var(--border)",
              borderLeft: i === 0 ? "1px solid var(--border)" : undefined,
              background:
                active === i ? "var(--orange-faint)" : "transparent",
              color: active === i ? "var(--green)" : "var(--white-dim)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "var(--green)",
                opacity: active === i ? 1 : 0.6,
                boxShadow:
                  active === i ? "0 0 8px var(--green)" : "none",
              }}
            />
            {tab.label}
          </a>
        ))}
      </div>

      <div
        className="font-[Orbitron,monospace] font-black text-[16px] tracking-[2px]"
        style={{
          color: "var(--green)",
          textShadow: "0 0 20px rgba(255,107,0,.5)",
        }}
      >
        43_IND
      </div>

      <div
        className="flex items-center gap-4 text-[11px] tracking-[1px]"
        style={{ color: "var(--white-dim)" }}
      >
        <div className="flex items-center gap-1.5" style={{ color: "var(--green)" }}>
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{
              background: "var(--green)",
              boxShadow: "0 0 8px var(--green)",
              animation: "pulse 2s ease infinite",
            }}
          />
          LIVE
        </div>
        <span style={{ color: "rgba(255,107,0,.3)" }}>|</span>
        <span>v2.6.0</span>
      </div>
    </nav>
  );
}
