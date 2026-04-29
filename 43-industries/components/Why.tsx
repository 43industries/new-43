import RevealWrapper from "./RevealWrapper";

const functions = [
  {
    name: "integrated_ecosystem",
    returnType: "Network",
    desc: "Our three divisions feed each other. Fintech enables crypto settlement; crypto liquidity supports precious metal tokenization. One company, three entry points.",
    returnVal: '"unified_value_network"',
    returnClass: "str",
    delay: 0,
  },
  {
    name: "africa_first",
    returnType: "Advantage",
    desc: "Built and headquartered in Nairobi. We understand East and Central African markets at ground level — designing for the markets most global firms ignore.",
    returnVal: '"local_depth_global_reach"',
    returnClass: "str",
    delay: 0.1,
  },
  {
    name: "xrp_settlement",
    returnType: "Speed",
    desc: "By anchoring to XRP and RippleNet, we offer settlement speeds and costs that traditional financial rails cannot match. 3–5 seconds. Fractions of a cent.",
    returnVal: "0.00001",
    returnClass: "num",
    returnSuffix: " # cost per tx (USD)",
    delay: 0.2,
  },
  {
    name: "hard_asset_backing",
    returnType: "Stability",
    desc: "Bullion for the inflation hedge, plus listed stocks and ETFs when you want public-market breadth alongside gold, silver, and copper.",
    returnVal: '"metals_plus_markets"',
    returnClass: "str",
    delay: 0.3,
  },
];

const envLines = [
  { k: "COMPANY", v: '"43_industries"' },
  { k: "HQ", v: '"Nairobi, Kenya"' },
  { k: "REGION", v: '"East_Africa"' },
  { k: "CRYPTO_ANCHOR", v: '"XRP"' },
  { k: "METALS", v: '["GOLD","SILVER","COPPER"]' },
  { k: "MARKETS", v: '["STOCKS","ETFS"]' },
  { k: "SETTLEMENT_MS", v: "3500", comment: "# avg" },
  { k: "FINTECH_STATUS", v: '"FOUNDATION"' },
  { k: "MISSION", v: '"next_gen_wealth"' },
  { k: "VERSION", v: '"2.6.0"' },
];

const reqLines = [
  "fintech>=3.1",
  "xrp_ledger==1.5.9",
  "precious_metals>=2.0",
  "listed_equities>=1.0",
  "etf_core>=1.0",
  "ripplenet>=4.2",
  "gold_custody>=1.8",
  "africa_networks>=0.9",
];

export default function Why() {
  return (
    <section
      className="py-[100px] px-[60px] max-[960px]:px-6"
      id="why"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <RevealWrapper>
        <div className="mb-[60px]">
          <div
            className="text-[12px] mb-3 flex gap-2"
            style={{ color: "var(--white-dim)" }}
          >
            <span style={{ color: "var(--green)" }}>$</span> python why.py{" "}
            <span style={{ color: "var(--purple)" }}>--compare</span>
          </div>
          <h2
            className="font-[Orbitron,monospace] font-black tracking-[-1px] leading-[1.1]"
            style={{ fontSize: "clamp(30px,4vw,52px)" }}
          >
            Why <span style={{ color: "var(--green)" }}>43_ind</span>.
          </h2>
          <div
            className="text-[12px] mt-3 pl-4"
            style={{
              color: "var(--white-dim)",
              borderLeft: "2px solid var(--border)",
            }}
          >
            Benchmarking...{" "}
            <span style={{ color: "var(--green)" }}>4 advantages found</span>
          </div>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-2 gap-[60px] items-start max-[960px]:grid-cols-1">
        <div className="flex flex-col">
          {functions.map((f) => (
            <RevealWrapper key={f.name} delay={f.delay}>
              <div
                className="py-6 transition-all duration-200 hover:pl-2"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="text-[12px] mb-2.5">
                  <span className="kw">def</span>{" "}
                  <span className="fn">{f.name}</span>
                  <span className="op">(self) -&gt;</span>{" "}
                  <span className="cls">{f.returnType}</span>
                  <span className="op">:</span>
                </div>
                <p
                  className="text-[11px] leading-[1.9] pl-5"
                  style={{
                    color: "var(--white-dim)",
                    borderLeft: "1px solid var(--border)",
                  }}
                >
                  {f.desc}
                </p>
                <div
                  className="text-[11px] mt-2.5 pl-5 opacity-70"
                  style={{ color: "var(--green)" }}
                >
                  return{" "}
                  <span className={f.returnClass}>{f.returnVal}</span>
                  {f.returnSuffix && (
                    <span className="cmt">{f.returnSuffix}</span>
                  )}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="sticky top-20 max-[960px]:static">
          <RevealWrapper delay={0.1}>
            <div
              className="rounded overflow-hidden mb-5"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="flex gap-2 items-center px-[18px] py-2.5 text-[11px]"
                style={{
                  background: "var(--bg3)",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--white-dim)",
                }}
              >
                <span>📄</span>
                <span style={{ color: "var(--gold)" }}>.env</span>
                <span style={{ opacity: 0.5 }}>— 43industries config</span>
              </div>
              <div className="px-6 py-5">
                {envLines.map((l) => (
                  <div key={l.k} className="text-[11px] leading-8 flex gap-2">
                    <span style={{ color: "var(--cyan)" }}>{l.k}</span>
                    <span style={{ color: "var(--white-dim)" }}>=</span>
                    <span style={{ color: "var(--green)" }}>{l.v}</span>
                    {l.comment && (
                      <span
                        className="italic opacity-50"
                        style={{ color: "var(--white-dim)" }}
                      >
                        {l.comment}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <div
              className="rounded overflow-hidden"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="flex gap-2 items-center px-[18px] py-2.5 text-[11px]"
                style={{
                  background: "var(--bg3)",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--white-dim)",
                }}
              >
                <span>📦</span>
                <span style={{ color: "var(--gold)" }}>requirements.txt</span>
              </div>
              <div className="px-6 py-5">
                {reqLines.map((l) => (
                  <div key={l} className="text-[11px] leading-8">
                    <span style={{ color: "var(--green)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
