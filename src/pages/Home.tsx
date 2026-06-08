import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-8 md:px-10">

          <h1 className="display fade-up d1 text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-[#1C1917] pt-36 md:pt-56 leading-[1.05]">
            From booking.<br />
            <span className="text-[#C4BDB6]">To the floor.</span><br />
            Nothing lost.
          </h1>

          <div className="fade-up d2 mt-16 flex items-center gap-8">
            <Link to="/processing"
              className="inline-flex items-center bg-[#1C1917] text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-[#2C2825] transition-colors">
              Muster Processing →
            </Link>
            <Link to="/on-farm"
              className="text-base font-medium text-[#A8A29E] hover:text-[#1C1917] transition-colors">
              Muster Livestock →
            </Link>
          </div>

        </div>
      </section>

      {/* ══ TWO PLATFORMS ═════════════════════════════════ */}
      <section className="bg-[#FAFAF8] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8A29E] mb-12">Two platforms</p>

          <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-20 md:mb-28">
            Processing and Livestock.
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
                tag: "Livestock", to: "/on-farm",
                title: "Muster Livestock",
                body: "For feedlots, backgrounders, pastoral companies and producers. Market intelligence, decision making and livestock traceability.",
                tags: ["Market Intelligence", "Bid Calculator", "Seasonal Planner", "Kill Results", "AI Agents"],
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

      <ContactForm />
      <Footer />
    </div>
  );
}
