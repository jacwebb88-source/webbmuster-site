import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WorkflowDiagram from "../components/WorkflowDiagram";

/* ── Typography atoms ─────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#78716C] mb-5">
      {children}
    </p>
  );
}

/* ── Home ─────────────────────────────────────── */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════
          Centered. Massive whitespace. Diagram is the visual.
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-8 md:px-10 text-center">

          {/* Top padding — Apple level */}
          <div className="pt-28 md:pt-40">
            <div className="fade-up d1 inline-flex items-center gap-2.5 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#78716C]">
                Intake Coordination · Red Meat Processing
              </span>
            </div>

            <h1 className="display fade-up d2 text-[3.25rem] md:text-[4.5rem] lg:text-[5.5rem] font-extrabold text-[#1C1917] max-w-3xl mx-auto">
              From booking.<br />
              <span className="text-[#78716C]">To the floor.</span><br />
              Nothing lost.
            </h1>
          </div>

          {/* 100px gap between headline and body */}
          <div className="mt-16 md:mt-24 fade-up d3 max-w-lg mx-auto">
            <p className="text-xl text-[#78716C] leading-relaxed">
              Muster coordinates livestock intake for red meat processors — scheduling, compliance and vendor communication in one system.
            </p>

            <div className="flex items-center justify-center gap-5 mt-10">
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-[#D97706] text-[#1C1917] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#B45309] transition-colors">
                Apply for the pilot
              </a>
              <Link to="/processing"
                className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] transition-colors">
                See how it works →
              </Link>
            </div>
          </div>

          {/* 120px gap then diagram — the hero image */}
          <div className="mt-20 md:mt-32 fade-up d4 pb-28 md:pb-40">
            <div className="bg-[#F3F1EB] rounded-3xl border border-[#E5E3DC] p-10 md:p-14 shadow-xl shadow-black/[0.04]">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#B8B0A4] mb-12 text-center">
                The intake chain
              </p>
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM ═══════════════════════════════════════
          Warm stone bg — NOT black. Confident typography.
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F3F1EB] border-t border-[#E5E3DC] py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Label>The problem</Label>
          <blockquote className="display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12] max-w-5xl mb-14">
            "Processor intake is still managed with spreadsheets, email chains and phone calls."
          </blockquote>
          <div className="w-16 h-px bg-[#D6D3CB] mb-14" />
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl">
            {[
              { label: "No source of truth",     body: "Bookings live in someone's inbox. Head counts change. Nobody has the full picture." },
              { label: "Compliance is reactive",  body: "NVDs are chased the morning before kill day. HGP conflicts surface at the gate." },
              { label: "Operations fly blind",    body: "The kill floor team finds out about changes when the truck arrives. Not before." },
            ].map(p => (
              <div key={p.label}>
                <p className="text-sm font-bold text-[#1C1917] mb-3">{p.label}</p>
                <p className="text-sm text-[#78716C] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOLUTION ══════════════════════════════════════
          Warm white — three wide columns, lots of air.
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] border-t border-[#E5E3DC] py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Label>The solution</Label>
          <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-20 max-w-xl">
            One platform.<br />Three things done right.
          </h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-20">
            {[
              {
                n: "01",
                title: "Scheduling",
                body: "Kill weeks planned weeks in advance. Every booking linked to a vendor, spec and head count. Capacity tracked automatically.",
              },
              {
                n: "02",
                title: "Compliance",
                body: "NVDs, HGP declarations, MSA requirements and export certificates tracked per vendor and per kill. Nothing falls through.",
              },
              {
                n: "03",
                title: "Communication",
                body: "Automated reminders for outstanding paperwork. AI morning briefings for your team. Vendors kept informed — without the phone calls.",
              },
            ].map(p => (
              <div key={p.n}>
                <span className="block text-[11px] font-bold font-mono text-[#D97706] mb-8 select-none">{p.n}</span>
                <h3 className="text-xl font-bold text-[#1C1917] mb-5">{p.title}</h3>
                <p className="text-[#78716C] text-sm leading-[1.9]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM ══════════════════════════════════════
          Light stone — feature list, two-column.
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F3F1EB] border-t border-[#E5E3DC] py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
            <div>
              <Label>Platform</Label>
              <h2 className="display text-4xl font-bold text-[#1C1917] mb-6">
                Built for processors.
              </h2>
              <p className="text-[#78716C] text-sm leading-relaxed">
                Every feature in Muster Processing exists because a processor needed it.
              </p>
            </div>
            <div>
              {[
                { title: "Kill Scheduling",       body: "Forward booking management with capacity tracking across vendors, species and programs." },
                { title: "Vendor Coordination",   body: "Every supplier, every booking, every outstanding document in one view." },
                { title: "Compliance Management", body: "NVDs, HGP conflicts, MSA requirements and export certificates. Tracked automatically." },
                { title: "Operations Agent",      body: "AI morning briefing and real-time kill floor alerts. Know what needs attention before the shift starts." },
                { title: "Vendor Scorecard",      body: "Reliability and compliance performance for every supplier. The data to have the right conversations." },
                { title: "Forecasting",           body: "12-week kill volume and revenue projections based on forward bookings and historical data." },
              ].map((f, i) => (
                <div key={f.title} className={`flex gap-8 py-8 border-b border-[#DDD9D2] ${i === 0 ? "pt-0" : ""}`}>
                  <span className="text-[11px] font-mono font-bold text-[#C8C4BC] pt-0.5 select-none shrink-0 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1C1917] mb-2">{f.title}</h3>
                    <p className="text-[#78716C] text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TWO PLATFORMS ═════════════════════════════════ */}
      <section className="bg-[#FAFAF8] border-t border-[#E5E3DC] py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Label>Two platforms</Label>
          <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-16">
            Processing and On Farm.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Processing",
                to: "/processing",
                title: "Muster Processing",
                body: "For abattoirs and processing plants. Kill scheduling, vendor coordination, compliance and animal traceability from booking to boning.",
                tags: ["Kill Scheduling", "Vendor Scorecard", "NVD Compliance", "Operations Agent", "Forecasting"],
              },
              {
                tag: "On Farm",
                to: "/on-farm",
                title: "Muster On Farm",
                body: "For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI agents to make better decisions.",
                tags: ["Market Intelligence", "Livestock Traceability", "Kill Results", "Bid Calculator", "AI Agents"],
              },
            ].map(p => (
              <Link key={p.to} to={p.to}
                className="group flex flex-col rounded-2xl border border-[#E5E3DC] bg-[#F3F1EB] p-10 hover:border-[#C8C4BC] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#78716C]">{p.tag}</span>
                  <svg className="text-[#D6D3CB] group-hover:text-[#78716C] transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] mb-4">{p.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed mb-10 flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] font-medium text-[#78716C] bg-white border border-[#E5E3DC] rounded-full px-3.5 py-1.5">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PILOT ═════════════════════════════════════════
          Soft warm slate — NOT black.
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#EAE8E2] border-t border-[#E5E3DC] py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Label>Pilot program</Label>
              <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-6 leading-[1.08]">
                Running a pilot with your plant?
              </h2>
              <p className="text-[#78716C] text-base leading-relaxed max-w-sm">
                We're working with a small number of processing plants to run Muster in a live operation. We'll configure it around your team, your vendors and your programs — at no cost for the pilot period.
              </p>
            </div>
            <div className="lg:pt-24 flex flex-col gap-4 lg:items-start">
              <a href="#contact"
                className="inline-flex items-center gap-3 bg-[#D97706] text-[#1C1917] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#B45309] transition-colors">
                Apply for the pilot
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
              <p className="text-[#B8B0A4] text-xs">Limited to a small number of plants</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
