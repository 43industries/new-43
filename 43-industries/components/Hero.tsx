import RevealWrapper from "./RevealWrapper";

export default function Hero() {
  return (
    <section className="min-h-screen pt-[100px] pb-20 px-[60px] flex items-center relative z-1 max-[960px]:px-6" id="home">
      <div className="w-full grid grid-cols-[1fr_420px] gap-[60px] items-center max-[960px]:grid-cols-1">
        <div>
          <div
            className="flex items-center gap-2.5 text-[12px] mb-6 tracking-[1px]"
            style={{ color: "var(--white-dim)" }}
          >
            <span style={{ color: "var(--green)" }}>marllone@43industries</span>
            <span style={{ opacity: 0.4 }}>:</span>
            <span style={{ color: "var(--cyan)" }}>~/wealth</span>
            <span style={{ opacity: 0.4 }}>$</span>
            <span>python main.py</span>
          </div>

          <h1
            className="font-[Orbitron,monospace] font-black leading-[1.1] tracking-[-1px] mb-7"
            style={{ fontSize: "clamp(36px,5vw,68px)" }}
          >
            <span
              className="block font-normal font-[JetBrains_Mono,monospace] tracking-[4px] mb-2"
              style={{
                color: "var(--white-dim)",
                fontSize: "0.55em",
              }}
            >
              # next-gen wealth
            </span>
            <span style={{ color: "var(--orange)", textShadow: "0 0 30px rgba(255,107,0,.4)" }}>
              43
            </span>
            <span style={{ color: "var(--purple)" }}>_industries</span>
          </h1>

          <p
            className="text-[12px] leading-8 max-w-[480px] mb-10 pl-4"
            style={{
              color: "var(--white-dim)",
              borderLeft: "2px solid var(--border-bright)",
            }}
          >
            Three interconnected divisions —{" "}
            <span style={{ color: "var(--cyan)" }}>fintech</span>,{" "}
            <span style={{ color: "var(--purple)" }}>digital assets</span>, and{" "}
            <span style={{ color: "var(--gold)" }}>precious metals</span> — building
            the infrastructure of tomorrow&apos;s economy from Nairobi, Kenya.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#divisions"
              className="flex items-center gap-2 px-7 py-3 font-[JetBrains_Mono,monospace] text-[12px] font-bold tracking-[1px] no-underline cursor-none transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,107,0,.5)] hover:-translate-y-0.5"
              style={{ background: "var(--orange)", color: "var(--bg)" }}
            >
              <span className="text-[10px]">▶</span> explore_divisions()
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 px-7 py-3 font-[JetBrains_Mono,monospace] text-[12px] tracking-[1px] no-underline cursor-none transition-colors duration-200 hover:bg-[var(--orange-faint)]"
              style={{
                background: "transparent",
                border: "1px solid var(--border-bright)",
                color: "var(--green)",
              }}
            >
              <span style={{ opacity: 0.5 }}>$</span> read --docs about
            </a>
          </div>
        </div>

        <RevealWrapper className="max-[960px]:hidden" delay={0.1}>
          <div
            className="rounded overflow-hidden"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 60px rgba(255,107,0,.06)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{
                background: "var(--bg3)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
              <span className="text-[11px] ml-2 tracking-[1px]" style={{ color: "var(--white-dim)" }}>
                43industries/__init__.py
              </span>
            </div>
            <div className="px-8 py-7 text-[13px] leading-8">
              <div><span className="ln">1</span><span className="cmt"># The foundation of next-gen wealth</span></div>
              <div><span className="ln">2</span><span className="kw">from</span> <span className="var">africa</span> <span className="kw">import</span> <span className="cls">Future</span></div>
              <div><span className="ln">3</span>&nbsp;</div>
              <div><span className="ln">4</span><span className="kw">class</span> <span className="cls">Industries43</span><span className="op">(</span><span className="cls">Future</span><span className="op">):</span></div>
              <div><span className="ln">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="var">name</span> <span className="op">=</span> <span className="str">&quot;43_industries&quot;</span></div>
              <div><span className="ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="var">base</span> <span className="op">=</span> <span className="str">&quot;Nairobi, KE&quot;</span></div>
              <div><span className="ln">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="var">divisions</span> <span className="op">= [</span></div>
              <div><span className="ln">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">&quot;fintech&quot;</span><span className="op">,</span></div>
              <div><span className="ln">9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">&quot;crypto_xrp&quot;</span><span className="op">,</span></div>
              <div><span className="ln">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">&quot;precious_metals&quot;</span><span className="op">,</span></div>
              <div><span className="ln">11</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="op">]</span></div>
              <div><span className="ln">12</span>&nbsp;</div>
              <div><span className="ln">13</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">def</span> <span className="fn">build_wealth</span><span className="op">(</span><span className="var">self</span><span className="op">,</span> <span className="var">client</span><span className="op">):</span></div>
              <div><span className="ln">14</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span> <span className="cls">NextGenWealth</span><span className="op">(</span></div>
              <div><span className="ln">15</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="var">foundation</span><span className="op">=</span><span className="var">self</span><span className="op">.</span><span className="fn">fintech</span><span className="op">(),</span></div>
              <div><span className="ln">16</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="var">digital</span><span className="op">=</span><span className="var">self</span><span className="op">.</span><span className="fn">xrp_ledger</span><span className="op">(),</span></div>
              <div><span className="ln">17</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="var">hard_asset</span><span className="op">=</span><span className="var">self</span><span className="op">.</span><span className="fn">precious_metals</span><span className="op">(),</span></div>
              <div><span className="ln">18</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="op">)</span></div>
              <div><span className="ln">19</span>&nbsp;</div>
              <div><span className="ln">20</span><span className="var">ind</span> <span className="op">=</span> <span className="cls">Industries43</span><span className="op">()</span></div>
              <div><span className="ln">21</span><span className="fn">print</span><span className="op">(</span><span className="var">ind</span><span className="op">.</span><span className="fn">build_wealth</span><span className="op">(</span><span className="str">&quot;you&quot;</span><span className="op">))</span><span className="cursor-inline"></span></div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
