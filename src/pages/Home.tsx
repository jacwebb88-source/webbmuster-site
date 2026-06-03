import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WorkflowDiagram from "../components/WorkflowDiagram";

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

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-8 md:px-10 text-center">

          <div className="pt-36 md:pt-56 fade-up d1">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#A8A29E]">
                Red Meat · Processing · On Farm
              </span>
            </div>
          </div>

          <h1 className="display fade-up d2 text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-[#1C1917] mt-16 md:mt-20 leading-[1.05]">
            From booking.<br />
            <span className="text-[#C4BDB6]">To the floor.</span><br />
            Nothing lost.
          </h1>

          <div className="fade-up d3 mt-16 flex items-center justify-center gap-8">
            <Link to="/processing"
              className="inline-flex items-center bg-[#1C1917] text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-[#2C2825] transition-colors">
              Muster Processing →
            </Link>
            <Link to="/on-farm"
              className="text-base font-medium text-[#A8A29E] hover:text-[#1C1917] transition-colors">
              Muster On Farm →
            </Link>
          </div>

          <div className="fade-up d4 mt-36 md:mt-48 pb-40 md:pb-56">
            <div className="bg-[#F3F1EB] rounded-3xl border border-[#E5E3DC] px-10 py-14 md:px-16 md:py-20 shadow-2xl shadow-black/[0.05]">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C4BDB6] mb-16 text-center">
                The intake chain
              </p>
              <WorkflowDiagram />
            </div>
          </div>

        </div>
      </section>

      {/* ══ PROBLEM ═══════════════════════════════════════ */}
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
