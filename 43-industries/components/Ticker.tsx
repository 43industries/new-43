const items = [
  { sym: "XRP", label: "/USD", change: "▲+4.2%", up: true, price: "$0.614" },
  { sym: "GOLD", label: "/OZ", change: "▲+0.8%", up: true, price: "$2,341" },
  { sym: "SILVER", label: "/OZ", change: "▼-0.3%", up: false, price: "$27.14" },
  { sym: "COPPER", label: "/LB", change: "▲+1.1%", up: true, price: "$4.52" },
  { sym: "BTC", label: "/USD", change: "▲+2.7%", up: true, price: "$67,430" },
  { sym: "KES", label: "/USD", change: "▲+0.2%", up: true, price: "129.40" },
];

function TickerItem({ item }: { item: (typeof items)[0] }) {
  return (
    <>
      <div className="flex items-center gap-2.5 text-[11px] tracking-[0.5px] shrink-0">
        <span className="font-bold" style={{ color: "var(--cyan)" }}>
          {item.sym}
        </span>
        <span style={{ color: "var(--white-dim)" }}>{item.label}</span>
        <span style={{ color: item.up ? "var(--green)" : "var(--red)" }}>
          {item.change}
        </span>
        <span>{item.price}</span>
      </div>
      <span style={{ color: "rgba(255,107,0,.3)" }}>|</span>
    </>
  );
}

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden relative z-1 py-3 px-10"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "scroll-left 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <TickerItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
