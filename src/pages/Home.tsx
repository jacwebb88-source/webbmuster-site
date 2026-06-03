import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WorkflowDiagram from "../components/WorkflowDiagram";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#1C1917] min-h-screen flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-8 md:px-16 pb-24 md:pb-32 w-full">

          <div className="max-w-4xl">
            <p className="fade-up d1 text-[11px] font-bold uppercase tracking-[0.24em] text-[#78716C] mb-16">
              Muster — Red Meat Processing
            </p>

            <h1 className="display fade-up d2 text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-extrabold text-white leading-[1.02]">
              Every animal.<br />
              Every booking.<br />
              <span className="text-[#D97706]">Nothing missed.</span>
            </h1>

            <p className="fade-up d3 text-lg md:text-xl text-white/50 leading-relaxed max-w-xl mt-12 md:mt-16">
              Muster coordinates livestock intake for red meat processors. Scheduling, compliance and vendor communication — before livestock reach the kill floor.
            </p>

            <div className="fade-up d4 mt-12 md:mt-16 flex flex-wrap items-center gap-6">
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-[#D97706] text-[#1C1917] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#B45309] transition-colors">
                Apply for the pilot
              </a>
              <Link to="/processing"
                className="text-base font-medium text-white/40 hover:text-white/80 transition-colors">
                See how it works →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══ PROBLEM ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#A8A29E] mb-16">
            The problem
          </p>

          <h2 className="display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.08] max-w-4xl mb-24 md:mb-32">
            Processor intake is still managed with spreadsheets, email chains and phone calls.
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-[#E5E3DC]">
            {[
              {
                n: "01",
                label: "No source of truth",
                body: "Bookings live in someone's inbox. Head counts change the night before. Nobody has the full picture.",
              },
              {
                n: "02",
                label: "Compliance is reactive",
                body: "NVDs are chased the morning before kill day. HGP conflicts surface at the gate.",
              },
              {
                n: "03",
                label: "Operations fly blind",
                body: "The kill floor team finds out about changes when the truck arrives. Not before.",
              },
            ].map(p => (
              <div key={p.n} className="border-b md:border-b-0 md:border-r border-[#E5E3DC] last:border-0 pt-12 pb-12 md:pr-12 md:pl-0 first:pl-0 [&:not(:first-child)]:md:pl-12">
                <span className="text-[11px] font-mono font-bold text-[#D6D3CB] block mb-8">{p.n}</span>
                <h3 className="text-base font-bold text-[#1C1917] mb-4">{p.label}</h3>
                <p className="text-base text-[#78716C] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SOLUTION ══════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F1EB] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#A8A29E] mb-16">
            The solution
          </p>

          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] leading-[1.08] mb-10">
                One system. From booking to the floor.
              </h2>
              <p className="text-base text-[#78716C] leading-relaxed max-w-md">
                Muster gives your team a single place to manage kill scheduling, vendor coordination and compliance — so nothing gets missed between booking and kill day.
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {[
                { title: "Kill scheduling",       body: "Forward kill planning with full vendor visibility. Know who's coming, when, and how many — weeks out." },
                { title: "Compliance tracking",   body: "NVDs, HGP status, MSA requirements and export credentials tracked automatically. No more morning chases." },
                { title: "Vendor communication",  body: "Automated reminders, confirmation workflows and change notifications. Your vendors stay informed without a phone call." },
                { title: "Operations briefing",   body: "AI-generated kill floor briefings every morning. Your team starts the shift knowing exactly what's happening." },
              ].map((item, i) => (
                <div key={i} className="border-t border-[#E5E3DC] py-8">
                  <div className="flex items-start gap-6">
                    <span className="text-[11px] font-mono font-bold text-[#C4BDB6] mt-1 shrink-0">0{i + 1}</span>
                    <div>
                      <h3 className="text-base font-bold text-[#1C1917] mb-2">{item.title}</h3>
                      <p className="text-base text-[#78716C] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#A8A29E] mb-16">
            How Muster works
          </p>

          <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-24 md:mb-32">
            The intake chain.
          </h2>

          <div className="bg-[#F3F1EB] rounded-3xl border border-[#E5E3DC] px-8 py-16 md:px-16 md:py-20">
            <WorkflowDiagram />
          </div>

        </div>
      </section>

      {/* ══ TWO PLATFORMS ═════════════════════════════════════════════════ */}
      <section className="bg-[#F3F1EB] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#A8A29E] mb-16">
            Two platforms
          </p>

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
                className="group flex flex-col rounded-2xl border border-[#E5E3DC] bg-[#FAFAF8] p-12 hover:border-[#C8C4BC] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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
                    <span key={t} className="text-[12px] font-medium text-[#78716C] bg-[#F3F1EB] border border-[#E5E3DC] rounded-full px-4 py-1.5">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══ PILOT CTA ═════════════════════════════════════════════════════ */}
      <section className="bg-[#1C1917] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#78716C] mb-12">
              Pilot program
            </p>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-10">
              Running a pilot with your plant.
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-md mb-14">
              We're working with a small number of processing plants to run Muster in a live operation. We'll configure it around your team, your vendors and your programs — at no cost for the pilot period.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-[#D97706] text-[#1C1917] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#B45309] transition-colors">
              Apply for the pilot
            </a>
            <p className="text-[#4A4440] text-sm mt-6">Limited to a small number of plants.</p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
