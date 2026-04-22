import RevealWrapper from "./RevealWrapper";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="py-[100px] px-[60px] max-[960px]:px-6">
        <RevealWrapper>
          <div className="mb-[60px]">
            <div
              className="text-[12px] mb-3 flex gap-2"
              style={{ color: "var(--white-dim)" }}
            >
              <span style={{ color: "var(--green)" }}>$</span> python about.py{" "}
              <span style={{ color: "var(--green)" }}>--verbose</span>
            </div>
            <h2
              className="font-[Orbitron,monospace] font-black tracking-[-1px] leading-[1.1]"
              style={{ fontSize: "clamp(30px,4vw,52px)" }}
            >
              Who we <span style={{ color: "var(--green)" }}>are</span>.
            </h2>
            <div
              className="text-[12px] mt-3 pl-4"
              style={{
                color: "var(--white-dim)",
                borderLeft: "2px solid var(--border)",
              }}
            >
              Initializing 43_industries...{" "}
              <span style={{ color: "var(--green)" }}>OK</span> — 3 modules loaded
            </div>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-2 gap-20 items-start max-[960px]:grid-cols-1">
          <RevealWrapper>
            <div>
              {[
                <>
                  43 Industries was founded on a singular conviction:{" "}
                  <span style={{ color: "var(--green)" }}>
                    the future of wealth is interconnected
                  </span>
                  . Technology, digital assets, and tangible commodities are not separate
                  worlds — they are a single ecosystem.
                </>,
                <>
                  The <span style={{ color: "var(--cyan)" }}>fintech</span> arm is the{" "}
                  <span
                    className="text-[11px] px-2 py-0.5 rounded-sm"
                    style={{
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      color: "var(--green)",
                    }}
                  >
                    __init__
                  </span>{" "}
                  of everything — the foundation that enables the other two divisions to
                  run. Payment rails, investment infrastructure, retirement tools.
                </>,
                <>
                  On top of that, we run an{" "}
                  <span style={{ color: "var(--green)" }}>XRP-led crypto division</span>{" "}
                  leveraging RippleNet for fast, low-cost cross-border settlement, and a{" "}
                  <span style={{ color: "var(--gold)" }}>precious metals</span> division
                  offering gold, silver, and copper as hard-asset wealth protection.
                </>,
                <>
                  Three divisions. One import.{" "}
                  <span style={{ color: "var(--green)" }}>
                    Nairobi-built, globally deployed.
                  </span>
                </>,
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-[12px] leading-[2.2] mb-5"
                  style={{ color: "var(--white-dim)" }}
                >
                  {text}
                </p>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.1}>
            <div
              className="rounded overflow-hidden"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="flex justify-between items-center px-5 py-2.5 text-[11px]"
                style={{
                  background: "var(--bg3)",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--white-dim)",
                }}
              >
                <span className="tracking-[1px]" style={{ color: "var(--green)" }}>
                  TERMINAL
                </span>
                <span>pip install 43industries</span>
              </div>
              <div className="p-6">
                <div className="text-[12px] leading-8 flex gap-3 items-baseline">
                  <span
                    className="w-[22px] shrink-0 text-[10px] text-right"
                    style={{ color: "var(--white-dim)" }}
                  >
                    $
                  </span>
                  <span>
                    <span style={{ color: "var(--green)" }}>Collecting</span>{" "}
                    <span style={{ color: "var(--purple)" }}>43industries</span>
                  </span>
                </div>
                <div className="text-[12px] leading-8 flex gap-3 items-baseline">
                  <span className="w-[22px] shrink-0" />
                  <span className="text-[11px]" style={{ color: "var(--white-dim)" }}>
                    Downloading 43industries-2.6.0.tar.gz
                  </span>
                </div>

                <div className="mt-5 mb-2">
                  <div
                    className="text-[11px] mb-2 flex justify-between"
                    style={{ color: "var(--white-dim)" }}
                  >
                    <span>Installing...</span>
                    <span style={{ color: "var(--green)" }}>100%</span>
                  </div>
                  <div
                    className="h-1 rounded-sm overflow-hidden"
                    style={{ background: "rgba(255,107,0,.1)" }}
                  >
                    <div
                      className="h-full rounded-sm"
                      style={{
                        background: "linear-gradient(90deg,var(--orange),var(--purple))",
                        animation: "fillbar 2s ease forwards",
                        transformOrigin: "left",
                      }}
                    />
                  </div>
                </div>

                {[
                  { pkg: "fintech", ver: "3.1.4" },
                  { pkg: "xrp_ledger", ver: "1.5.9" },
                  { pkg: "precious_metals", ver: "2.0.1" },
                  { pkg: "ripplenet", ver: "4.2.0" },
                  { pkg: "gold_custody", ver: "1.8.3" },
                ].map((p) => (
                  <div
                    key={p.pkg}
                    className="text-[12px] leading-8 flex gap-3 items-baseline"
                  >
                    <span className="w-[22px] shrink-0" />
                    <span>
                      <span style={{ color: "var(--green)" }}>✓</span>{" "}
                      <span style={{ color: "var(--purple)" }}>{p.pkg}</span>{" "}
                      <span className="text-[11px]" style={{ color: "var(--orange)" }}>
                        {p.ver}
                      </span>
                    </span>
                  </div>
                ))}

                <div className="text-[12px] leading-8 flex gap-3 items-baseline mt-4">
                  <span className="w-[22px] shrink-0" />
                  <span>
                    <span style={{ color: "var(--green)" }}>Successfully installed</span>{" "}
                    <span style={{ color: "var(--cyan)" }}>43industries-2.6.0</span>
                  </span>
                </div>
                <div className="text-[12px] leading-8 flex gap-3 items-baseline">
                  <span
                    className="w-[22px] shrink-0 text-[10px] text-right"
                    style={{ color: "var(--white-dim)" }}
                  >
                    $
                  </span>
                  <span>
                    <span style={{ color: "var(--gold)" }}>WARNING:</span>{" "}
                    <span className="text-[11px]" style={{ color: "var(--white-dim)" }}>
                      The future belongs to builders.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
