"use client";

import RevealWrapper from "./RevealWrapper";

export default function Contact() {
  return (
    <section
      className="py-[100px] px-[60px] max-[960px]:px-6"
      id="contact"
      style={{ background: "var(--bg)" }}
    >
      <RevealWrapper>
        <div className="mb-[60px]">
          <div
            className="text-[12px] mb-3 flex gap-2"
            style={{ color: "var(--white-dim)" }}
          >
            <span style={{ color: "var(--green)" }}>$</span> python contact.py{" "}
            <span style={{ color: "var(--gold)" }}>--partner</span>
          </div>
          <h2
            className="font-[Orbitron,monospace] font-black tracking-[-1px] leading-[1.1]"
            style={{ fontSize: "clamp(30px,4vw,52px)" }}
          >
            Let&apos;s <span style={{ color: "var(--green)" }}>build()</span>.
          </h2>
          <div
            className="text-[12px] mt-3 pl-4"
            style={{
              color: "var(--white-dim)",
              borderLeft: "2px solid var(--border)",
            }}
          >
            Opening secure channel...{" "}
            <span style={{ color: "var(--green)" }}>connection established</span>
          </div>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-2 gap-20 max-[960px]:grid-cols-1">
        <RevealWrapper>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4 max-[960px]:grid-cols-1">
              <FormField label="first_name" type="text" placeholder={'"Your name"'} />
              <FormField label="last_name" type="text" placeholder={'"Last name"'} />
            </div>
            <FormField label="email" type="email" placeholder={'"you@company.com"'} />
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-[2px] uppercase flex gap-2" style={{ color: "var(--white-dim)" }}>
                <span style={{ color: "var(--green)" }}>str</span> division_interest
              </label>
              <select
                className="px-4 py-3 font-[JetBrains_Mono,monospace] text-[12px] outline-none transition-all duration-200 rounded-sm cursor-none focus:shadow-[0_0_0_1px_rgba(255,107,0,.2)]"
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  color: "var(--white)",
                }}
              >
                <option value="" style={{ background: "var(--bg2)" }}>
                  None &nbsp;# select one
                </option>
                <option style={{ background: "var(--bg2)" }}>&quot;Fintech &amp; Payments&quot;</option>
                <option style={{ background: "var(--bg2)" }}>&quot;Crypto / XRP&quot;</option>
                <option style={{ background: "var(--bg2)" }}>&quot;Precious Metals&quot;</option>
                <option style={{ background: "var(--bg2)" }}>&quot;General Partnership&quot;</option>
                <option style={{ background: "var(--bg2)" }}>&quot;Institutional / Investor&quot;</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-[2px] uppercase flex gap-2" style={{ color: "var(--white-dim)" }}>
                <span style={{ color: "var(--green)" }}>str</span> message
              </label>
              <textarea
                placeholder="# Tell us what you're building..."
                className="px-4 py-3 font-[JetBrains_Mono,monospace] text-[12px] outline-none transition-all duration-200 rounded-sm cursor-none resize-y min-h-[110px] focus:shadow-[0_0_0_1px_rgba(255,107,0,.2)]"
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  color: "var(--white)",
                }}
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2.5 px-8 py-3.5 font-[JetBrains_Mono,monospace] text-[12px] font-bold tracking-[1px] cursor-none w-fit mt-2 border-none transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,107,0,.4)] hover:-translate-y-0.5"
              style={{ background: "var(--green)", color: "var(--bg)" }}
            >
              <span style={{ color: "rgba(5,15,10,.5)" }}>python</span> send_message.py
            </button>
          </form>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <div className="flex flex-col gap-5">
            <InfoBlock title="contact_info">
              <InfoItem k="hq" v='"Nairobi, Kenya"' />
              <InfoItem k="email" v='"hello@43industries.com"' />
              <InfoItem k="partners" v='"partners@43industries.com"' />
              <InfoItem k="region" v='"East & Central Africa"' />
            </InfoBlock>
            <InfoBlock title="system.status">
              <InfoItem k="fintech" v='"ACTIVE"' vColor="var(--green)" />
              <InfoItem k="crypto_xrp" v='"ACTIVE"' vColor="var(--green)" />
              <InfoItem k="precious_metals" v='"ACTIVE"' vColor="var(--green)" />
              <InfoItem k="partnerships" v='"OPEN"' vColor="var(--gold)" />
            </InfoBlock>
            <InfoBlock title="response_time">
              <InfoItem k="avg_reply" v='"24h"' vColor="var(--cyan)" />
              <InfoItem k="priority" v='"institutional"' vColor="var(--cyan)" />
            </InfoBlock>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[10px] tracking-[2px] uppercase flex gap-2"
        style={{ color: "var(--white-dim)" }}
      >
        <span style={{ color: "var(--green)" }}>str</span> {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-3 font-[JetBrains_Mono,monospace] text-[12px] outline-none transition-all duration-200 rounded-sm cursor-none focus:shadow-[0_0_0_1px_rgba(255,107,0,.2)]"
        style={{
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          color: "var(--white)",
        }}
      />
    </div>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded p-6"
      style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
    >
      <div
        className="text-[10px] tracking-[2px] uppercase mb-4 flex items-center gap-2"
        style={{ color: "var(--green)" }}
      >
        <span style={{ opacity: 0.5 }}>#</span> {title}
      </div>
      {children}
    </div>
  );
}

function InfoItem({
  k,
  v,
  vColor,
}: {
  k: string;
  v: string;
  vColor?: string;
}) {
  return (
    <div className="text-[12px] leading-8 flex gap-3 items-baseline">
      <span style={{ color: "var(--cyan)" }}>{k}</span>
      <span style={{ opacity: 0.4 }}> = </span>
      <span style={{ color: vColor || "var(--white)" }}>{v}</span>
    </div>
  );
}
