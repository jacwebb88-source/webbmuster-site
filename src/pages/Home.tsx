import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WorkflowDiagram from "../components/WorkflowDiagram";

/* ─── Design system
   Headings:   display class, tight tracking
   Body text:  text-base (16px) min — never text-sm for real content
   Labels:     11px uppercase, 0.22em tracking
   Sections:   py-40 md:py-64 (160–256px)
   Between label → heading: mb-12
   Between heading → body:  mt-10 md:mt-14
   Between body → cards:    mt-20 md:mt-28
──────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8A29E] mb-12">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════
          Centered. Enormous breathing room.
      ═════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-8 md:px-10 text-center">

          {/* Eyebrow */}
          <div className="pt-36 md:pt-56 fade-up d1">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#A8A29E]">
                Intake Coordination · Red Meat Processing
              </span>
            </div>
          </div>

          {/* H1 — 80px below eyebrow */}
          <h1 className="display fade-up d2 text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-[#1C1917] mt-16 md:mt-20 leading-[1.05]">
            From booking.<br />
            <span className="text-[#C4BDB6]">To the floor.</span><br />
            Nothing lost.
          </h1>

          {/* Body — 80px below H1 */}
          <p className="fade-up d3 text-xl md:text-2xl text-[#78716C] leading-relaxed max-w-lg mx-auto mt-16 md:mt-20">
            Muster coordinates livestock intake for red meat processors. Scheduling, compliance and vendor communication — in one system.
          </p>

          {/* CTA — 64px below body */}
          <div className="fade-up d4 mt-16 flex items-center justify-center gap-8">
            <a href="#contact"
              className="inline-flex items-center bg-[#D97706] text-[#1C1917] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#B45309] transition-colors">
              Apply for the pilot
            </a>
            <Link to="/processing"
              className="text-base font-medium text-[#A8A29E] hover:text-[#1C1917] transition-colors">
              How it works →
            </Link>
          </div>

          {/* Diagram — 160px below CTA */}
          <div className="fade-up d5 mt-36 md:mt-48 pb-40 md:pb-56">
            <div className="bg-[#F3F1EB] rounded-3xl border border-[#E5E3DC] px-10 py-14 md:px-16 md:py-20 shadow-2xl shadow-black/[0.05]">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C4BDB6] mb-16 text-center">
                The intake chain
              </p>
              <WorkflowDiagram />
            </div>
          </div>

        </div>
      </section>

      {/* ══ PROBLEM ═══════════════════════════════════════
          Stone bg. Big quote. Body text at real size.
      ═════════════════════════════════════════════════ */}
      <section className="bg-[#F3F1EB] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <Label>The problem</Label>

          <blockquote className="display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-[1.15] max-w-4xl">
            "Processor intake is still managed with spreadsheets, email chains and phone calls."
          </blockquote>

          <div className="w-16 h-px bg-[#D6D3CB] mt-20 mb-20" />

          <div className="grid md:grid-cols-3 gap-16 max-w-5xl">
            {[
              { label: "No source of truth",     body: "Bookings live in someone's inbox. Head counts change the night before. Nobody has the full picture." },
              { label: "Compliance is reactive",  body: "NVDs are chased the morning before kill day. HGP conflicts surface at the gate." },
              { label: "Operations fly blind",    body: "The kill floor team finds out about changes when the truck arrives. Not before." },
            ].map(p => (
              <div key={p.label}>
                <p className="text-base font-bold text-[#1C1917] mb-5">{p.label}</p>
                <p className="text-base text-[#78716C] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SOLUTION ══════════════════════════════════════
          Warm white. One heading. Three columns with real body text.
      ═════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <Label>The solution</Label>

          <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] max-w-xl">
            One platform.<br />Three things done right.
          </h2>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24 mt-24 md:mt-32">
            {[
              { n: "01", title: "Scheduling",    body: "Kill weeks planned weeks in advance. Every booking linked to a vendor, spec and head count. Capacity tracked automatically — no more double bookings, no more gaps." },
              { n: "02", title: "Compliance",    body: "NVDs, HGP declarations, MSA requirements and export certificates tracked per vendor, per kill. Outstanding paperwork flagged automatically. Nothing falls through." },
              { n: "03", title: "Communication", body: "Automated reminders for outstanding paperwork. AI-powered morning briefings for your operations team. Vendors kept informed — without the phone calls." },
            ].map(p => (
              <div key={p.n}>
                <span className="block text-[11px] font-bold font-mono text-[#D97706] select-none mb-8">{p.n}</span>
                <h3 className="text-2xl font-bold text-[#1C1917] mb-6">{p.title}</h3>
                <p className="text-base text-[#78716C] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ PLATFORM ══════════════════════════════════════
          Stone bg. Two-col: intro left, feature list right.
      ═════════════════════════════════════════════════ */}
      <section className="bg-[#F3F1EB] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-20 lg:gap-32">

            <div className="lg:sticky lg:top-32 lg:self-start">
              <Label>Platform</Label>
              <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-8">
                Built for processors.
              </h2>
              <p className="text-base text-[#78716C] leading-relaxed max-w-xs">
                Every feature in Muster Processing exists because a processor needed it.
              </p>
            </div>

            <div>
              {[
                { title: "Kill Scheduling",       body: "Forward booking management with capacity tracking across vendors, species and programs. Weeks ahead, not the day of." },
                { title: "Vendor Coordination",   body: "Every supplier, every booking, every outstanding document in one view. Nothing chased over email." },
                { title: "Compliance Management", body: "NVDs, HGP conflicts, MSA requirements and export certificates. Tracked automatically, flagged early." },
                { title: "Operations Agent",      body: "AI morning briefing and real-time kill floor alerts. Know what needs attention before the shift starts." },
                { title: "Vendor Scorecard",      body: "Reliability and compliance performance scored for every supplier. The data to have the right conversations." },
                { title: "Forecasting",           body: "12-week kill volume and revenue projections based on forward bookings and historical patterns." },
              ].map((f, i) => (
                <div key={f.title} className={`flex gap-10 py-12 border-b border-[#DDD9D2] ${i === 0 ? "pt-0" : ""}`}>
                  <span className="text-[11px] font-mono font-bold text-[#C8C4BC] pt-1 select-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1C1917] mb-3">{f.title}</h3>
                    <p className="text-base text-[#78716C] leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ TWO PLATFORMS ═════════════════════════════════ */}
      <section className="bg-[#FAFAF8] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <Label>Two platforms</Label>

          <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-20 md:mb-28">
            Processing and On Farm.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Processing", to: "/processing",
                title: "Muster Processing",
                body: "For abattoirs and processing plants. Kill scheduling, vendor coordination, compliance and animal traceability from booking to boning.",
                tags: ["Kill Scheduling", "Vendor Scorecard", "NVD Compliance", "Operations Agent", "Forecasting"],
              },
              {
                tag: "On Farm", to: "/on-farm",
                title: "Muster On Farm",
                body: "For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI agents.",
                tags: ["Market Intelligence", "Livestock Traceability", "Kill Results", "Bid Calculator", "AI Agents"],
              },
            ].map(p => (
              <Link key={p.to} to={p.to}
                className="group flex flex-col rounded-2xl border border-[#E5E3DC] bg-[#F3F1EB] p-12 hover:border-[#C8C4BC] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-14">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8A29E]">{p.tag}</span>
                  <svg className="text-[#D6D3CB] group-hover:text-[#78716C] transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1C1917] mb-6">{p.title}</h3>
                <p className="text-base text-[#78716C] leading-relaxed mb-14 flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[12px] font-medium text-[#78716C] bg-white border border-[#E5E3DC] rounded-full px-4 py-1.5">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══ PILOT ═════════════════════════════════════════ */}
      <section className="bg-[#EAE8E2] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div>
              <Label>Pilot program</Label>
              <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] leading-[1.1] mb-10">
                Running a pilot with your plant?
              </h2>
              <p className="text-base text-[#78716C] leading-relaxed max-w-sm">
                We're working with a small number of processing plants to run Muster in a live operation. We'll configure it around your team, your vendors and your programs — at no cost for the pilot period.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:items-end">
              <a href="#contact"
                className="inline-flex items-center gap-3 bg-[#D97706] text-[#1C1917] font-bold text-base px-9 py-5 rounded-xl hover:bg-[#B45309] transition-colors">
                Apply for the pilot
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
              <p className="text-[#B8B0A4] text-sm">Limited to a small number of plants</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
