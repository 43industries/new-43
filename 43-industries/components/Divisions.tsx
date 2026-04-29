"use client";

import RevealWrapper from "./RevealWrapper";

const divisions = [
  {
    type: "fintech",
    name: "Fintech",
    nameColor: "var(--orange)",
    hoverBorder: "var(--orange)",
    hoverShadow: "rgba(255,107,0,.08)",
    docstring: [
      '"""Foundation of 43_industries.',
      "Payment rails, investment tools,",
      "and retirement infrastructure.",
      'The __init__ of everything."""',
    ],
    features: [
      { name: "digital_payments", method: ".remittance()" },
      { name: "investment_platform", method: ".portfolio()" },
      { name: "retirement_fund", method: ".pension()" },
      { name: "banking_api", method: ".connect()" },
      { name: "financial_inclusion", method: ".deploy()" },
    ],
    linkColor: "var(--orange)",
    delay: 0,
  },
  {
    type: "crypto",
    name: "CryptoXRP",
    nameColor: "var(--purple)",
    hoverBorder: "var(--purple)",
    hoverShadow: "rgba(168,85,247,.08)",
    docstring: [
      '"""XRP-led digital asset strategy.',
      "RippleNet for fast, low-cost",
      "cross-border transfer.",
      'Built for the new economy."""',
    ],
    features: [
      { name: "xrp_settlement", method: ".execute()" },
      { name: "digital_custody", method: ".secure()" },
      { name: "ripplenet", method: ".transfer()" },
      { name: "crypto_portfolio", method: ".manage()" },
      { name: "blockchain_treasury", method: ".run()" },
    ],
    linkColor: "var(--purple)",
    delay: 0.1,
  },
  {
    type: "metals",
    name: "PreciousMetals",
    nameColor: "var(--gold)",
    hoverBorder: "var(--gold)",
    hoverShadow: "rgba(251,191,36,.08)",
    docstring: [
      '"""Bullion plus listed markets.',
      "Gold, silver, copper — and stocks",
      "& ETFs in the same division.",
      'Hard assets + public markets."""',
    ],
    features: [
      { name: "gold", method: ".accumulate()" },
      { name: "silver", method: ".invest()" },
      { name: "listed_equities", method: ".route()" },
      { name: "etf_shelf", method: ".core()" },
      { name: "vault_storage", method: ".secure()" },
    ],
    linkColor: "var(--gold)",
    delay: 0.2,
  },
];

export default function Divisions() {
  return (
    <section
      className="py-[100px] px-[60px] max-[960px]:px-6"
      id="divisions"
      style={{ background: "var(--bg)" }}
    >
      <RevealWrapper>
        <div className="mb-[60px]">
          <div
            className="text-[12px] mb-3 flex gap-2"
            style={{ color: "var(--white-dim)" }}
          >
            <span style={{ color: "var(--orange)" }}>$</span> python divisions.py{" "}
            <span style={{ color: "var(--purple)" }}>--list-all</span>
          </div>
          <h2
            className="font-[Orbitron,monospace] font-black tracking-[-1px] leading-[1.1]"
            style={{ fontSize: "clamp(30px,4vw,52px)" }}
          >
            Three <span style={{ color: "var(--purple)" }}>divisions</span>.
          </h2>
          <div
            className="text-[12px] mt-3 pl-4"
            style={{
              color: "var(--white-dim)",
              borderLeft: "2px solid var(--border)",
            }}
          >
            Found 3 classes. Loading definitions...
          </div>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-1">
        {divisions.map((d) => (
          <RevealWrapper key={d.type} delay={d.delay}>
            <div
              className="group rounded overflow-hidden transition-all duration-300 cursor-none hover:-translate-y-1.5"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = d.hoverBorder;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${d.hoverShadow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="px-6 pt-5 pb-4"
                style={{
                  borderBottom: "1px solid var(--border)",
                  background: "var(--bg3)",
                }}
              >
                <div
                  className="text-[11px] mb-1.5"
                  style={{ color: "var(--white-dim)" }}
                >
                  <span className="kw">class</span>
                </div>
                <div
                  className="text-[18px] font-bold tracking-[-0.5px] flex items-center gap-2"
                >
                  <span style={{ color: d.nameColor }}>{d.name}</span>
                  <span
                    className="text-[13px]"
                    style={{ color: "var(--white-dim)" }}
                  >
                    (Industries43):
                  </span>
                </div>
              </div>
              <div className="px-6 pt-5 pb-7">
                <div className="mb-5">
                  {d.docstring.map((line, i) => (
                    <div
                      key={i}
                      className="text-[11px] leading-[1.9] pl-4 mb-1"
                      style={{
                        color: "var(--white-dim)",
                        fontStyle: "italic",
                        borderLeft: "1px solid var(--border)",
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
                <div
                  className="h-px my-4"
                  style={{ background: "var(--border)" }}
                />
                <ul className="list-none mb-6">
                  {d.features.map((f) => (
                    <li
                      key={f.name}
                      className="text-[11px] leading-[1.8] py-1 flex items-center gap-2.5"
                      style={{ color: "var(--white-dim)" }}
                    >
                      <span className="text-[11px] opacity-40 shrink-0">#</span>
                      <span style={{ color: d.nameColor }}>{f.name}</span>
                      <span style={{ color: "var(--white-dim)" }}>{f.method}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="text-[11px] tracking-[1px] no-underline flex items-center gap-2 cursor-none transition-all duration-200 hover:gap-3.5"
                  style={{ color: d.linkColor }}
                >
                  <span style={{ opacity: 0.5 }}>&gt;&gt;&gt;</span> init_partnership()
                </a>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
