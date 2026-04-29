import RevealWrapper from "./RevealWrapper";

const metrics = [
  {
    label: "divisions.len()",
    val: "3",
    sub: "active modules",
    color: "var(--orange)",
    shadow: "rgba(255,107,0,.3)",
    delay: 0,
  },
  {
    label: "xrp.speed_s",
    val: "3-5",
    sub: "second settlement",
    color: "var(--purple)",
    shadow: "rgba(168,85,247,.3)",
    delay: 0.1,
  },
  {
    label: "assets.count()",
    val: "6",
    sub: "product lines",
    color: "var(--gold)",
    shadow: "rgba(251,191,36,.3)",
    delay: 0.2,
  },
  {
    label: "uptime.status",
    val: "99.9%",
    sub: "operational",
    color: "var(--purple)",
    shadow: "rgba(168,85,247,.3)",
    delay: 0.3,
    smallVal: true,
  },
];

export default function Metrics() {
  return (
    <section
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="py-[60px] px-[60px] max-[960px]:px-6">
        <div
          className="grid grid-cols-4 gap-px mb-12 max-[960px]:grid-cols-2"
          style={{
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {metrics.map((m) => (
            <RevealWrapper key={m.label} delay={m.delay}>
              <div
                className="py-8 px-7 transition-colors duration-200 hover:bg-[var(--bg3)]"
                style={{ background: "var(--bg2)" }}
              >
                <div
                  className="text-[10px] tracking-[2px] uppercase mb-3"
                  style={{ color: "var(--white-dim)" }}
                >
                  {m.label}
                </div>
                <div
                  className="font-[Orbitron,monospace] font-black leading-none mb-2"
                  style={{
                    fontSize: m.smallVal ? "24px" : "36px",
                    color: m.color,
                    textShadow: `0 0 20px ${m.shadow}`,
                  }}
                >
                  {m.val}
                </div>
                <div className="text-[10px]" style={{ color: "var(--white-dim)" }}>
                  {m.sub}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
