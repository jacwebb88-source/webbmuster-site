import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WorkflowDiagram from "../components/WorkflowDiagram";

/* ── Shared atoms ─────────────────────────────── */

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-6 ${light ? "text-[#F5A623]" : "text-[#F5A623]"}`}>
      {children}
    </p>
  );
}

function Divider() {
  return <div className="w-12 h-px bg-[#E5E2DB] my-0" />;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF7]">
      <Nav />

      {/* ══ HERO ══════════════════════════════════ */}
      {/* Cream background, two column, HUGE whitespace */}
      <section className="bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-8 md:px-14 pt-28 md:pt-40 pb-28 md:pb-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — headline + copy + CTA */}
            <div>
              <div className="fade-up d1 inline-flex items-center gap-2 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111111]/50">
                  Intake Coordination · Red Meat Processing
                </span>
              </div>

              <h1 className="display fade-up d2 text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] font-extrabold text-[#111111] mb-8 max-w-lg">
                Every booking.<br />
                Every vendor.<br />
                <span className="text-[#111111]/30">Nothing missed.</span>
              </h1>

              <p className="fade-up d3 text-lg text-[#6B7280] leading-relaxed max-w-sm mb-12">
                WebbMuster coordinates livestock intake for red meat processors — from the first booking through to the kill floor.
              </p>

              <div className="fade-up d4 flex flex-wrap gap-4">
                <a href="#contact"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-[#111111] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#E09610] transition-colors shadow-sm shadow-[#F5A623]/20">
                  Apply for the pilot
                </a>
                <Link to="/processing"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#111111]/60 hover:text-[#111111] transition-colors py-3.5">
                  How it works
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — workflow diagram */}
            <div className="fade-up d3 hidden lg:block">
              <div className="bg-[#F4F2ED] rounded-3xl p-10 border border-[#E5E2DB]">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111111]/30 mb-8 text-center">
                  The intake chain
                </p>
                <WorkflowDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM ═══════════════════════════════ */}
      {/* Dark charcoal — one bold statement */}
      <section className="bg-[#111111] py-28 md:py-40 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <SectionLabel light>The problem</SectionLabel>
          <blockquote className="display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] max-w-4xl mb-10">
            "Processor intake is still managed with spreadsheets, email chains and phone calls."
          </blockquote>
          <Divider />
          <div className="mt-10 max-w-2xl space-y-4">
            <p className="text-[#6B7280] text-lg leading-relaxed">
              There's no single source of truth. NVDs go missing. Bookings change the night before. The operations team finds out on the day.
            </p>
            <p className="text-white/80 font-semibold text-lg">
              It's a system built on exceptions, not structure.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SOLUTION ══════════════════════════════ */}
      {/* White — three clean pillars with space */}
      <section className="bg-white py-28 md:py-40 px-8 md:px-14 border-b border-[#E5E2DB]">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>The solution</SectionLabel>
          <h2 className="display text-4xl md:text-5xl font-bold text-[#111111] mb-20 max-w-xl">
            One platform. Three things done right.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                n: "01",
                title: "Scheduling",
                body: "Kill weeks planned weeks in advance. Every booking linked to a vendor, spec and head count. Capacity tracked automatically — no more double-booking, no more gaps.",
              },
              {
                n: "02",
                title: "Compliance",
                body: "NVDs, HGP declarations, MSA requirements and export certificates tracked per vendor, per kill. Outstanding paperwork flagged automatically. Nothing falls through the gaps.",
              },
              {
                n: "03",
                title: "Communication",
                body: "Automated reminders for outstanding paperwork. AI-powered morning briefings for your operations team. Vendors kept in the loop — without the phone calls.",
              },
            ].map(p => (
              <div key={p.n} className="flex flex-col">
                <span className="text-[11px] font-bold font-mono text-[#F5A623] mb-6 select-none">{p.n}</span>
                <h3 className="text-xl font-bold text-[#111111] mb-5">{p.title}</h3>
                <p className="text-[#6B7280] text-sm leading-loose flex-1">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM FEATURES ═════════════════════ */}
      {/* Cream — features listed cleanly, no cards */}
      <section className="bg-[#FAFAF7] py-28 md:py-40 px-8 md:px-14 border-b border-[#E5E2DB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <SectionLabel>Platform</SectionLabel>
              <h2 className="display text-4xl md:text-5xl font-bold text-[#111111] mb-8 max-w-sm">
                Built for processors.
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-xs">
                Every feature in WebbMuster Processing exists because a processor needed it.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { title: "Kill Scheduling",       body: "Forward booking management with capacity tracking across vendors, species and programs." },
                { title: "Vendor Coordination",   body: "Every supplier, every booking, every outstanding document — in one view." },
                { title: "Compliance Management", body: "NVDs, HGP conflicts, MSA requirements and export certificates. Tracked automatically." },
                { title: "Operations Agent",      body: "AI morning briefing and real-time alerts. Know what needs attention before the shift starts." },
                { title: "Vendor Scorecard",      body: "Reliability and compliance performance for every supplier. Data to have the right conversations." },
                { title: "Forecasting",           body: "12-week kill volume and revenue projections based on forward bookings and historical data." },
              ].map((f, i) => (
                <div key={f.title} className="flex gap-8 pb-8 border-b border-[#E5E2DB] last:border-0 last:pb-0">
                  <span className="text-[11px] font-mono font-bold text-[#111111]/20 pt-0.5 select-none shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-2">{f.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TWO PLATFORMS ═════════════════════════ */}
      <section className="bg-white py-28 md:py-40 px-8 md:px-14 border-b border-[#E5E2DB]">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Two platforms</SectionLabel>
          <h2 className="display text-4xl md:text-5xl font-bold text-[#111111] mb-16">
            Processing and On Farm.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Processing",
                to: "/processing",
                title: "WebbMuster Processing",
                body: "For abattoirs and processing plants. Kill scheduling, vendor coordination, compliance management and animal traceability from booking to boning.",
                tags: ["Kill Scheduling", "Vendor Scorecard", "NVD Compliance", "Operations Agent", "Forecasting"],
              },
              {
                tag: "On Farm",
                to: "/on-farm",
                title: "WebbMuster On Farm",
                body: "For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI agents to make better decisions.",
                tags: ["Market Intelligence", "Livestock Traceability", "Kill Results", "Bid Calculator", "AI Agents"],
              },
            ].map(p => (
              <Link key={p.to} to={p.to}
                className="group flex flex-col rounded-2xl border border-[#E5E2DB] bg-[#FAFAF7] p-10 hover:border-[#111111]/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F5A623]">{p.tag}</span>
                  <svg className="text-[#E5E2DB] group-hover:text-[#111111]/30 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-4">{p.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-10 flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] font-medium text-[#6B7280] bg-white border border-[#E5E2DB] rounded-full px-3 py-1.5">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PILOT ═════════════════════════════════ */}
      <section className="bg-[#111111] py-28 md:py-40 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel light>Pilot program</SectionLabel>
              <h2 className="display text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                Running a pilot with your plant?
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-sm">
                We're working with a small number of processing plants to run WebbMuster in a live operation. We'll configure it around your team and your vendors — at no cost for the pilot period.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:items-end">
              <a href="#contact"
                className="inline-flex items-center gap-3 bg-[#F5A623] text-[#111111] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#E09610] transition-colors shadow-lg shadow-[#F5A623]/20">
                Apply for the pilot
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
              <p className="text-[#6B7280] text-xs">Limited to a small number of plants</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
