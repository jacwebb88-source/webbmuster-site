import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const pillars = [
  {
    title: "Market Intelligence",
    description: "Live grid prices, market trends and forecasting across breeds, specs and processors.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "AI Powered Agents",
    description: "Intelligent agents that surface the right information at the right time — without you having to go looking for it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "End to End Traceability",
    description: "Every animal tracked from paddock to plant. NVDs, compliance, kill results and provenance in one system.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const Chevron = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a3d2b] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="text-green-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-8">
            Australian Red Meat Industry
          </p>
          <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.08] tracking-tight mb-7 max-w-lg">
            Better decisions.<br />
            Better data.<br />
            Better results.
          </h1>
          <p className="text-green-100/75 text-base md:text-lg max-w-sm leading-relaxed mb-14">
            Software for the Australian red meat industry — for producers, feedlots and processors.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <Link
              to="/on-farm"
              className="group flex items-center justify-between bg-white/10 hover:bg-white/[0.15] border border-white/[0.18] hover:border-white/30 rounded-xl px-6 py-4 transition-all flex-1"
            >
              <div>
                <p className="text-green-400 text-[10px] font-semibold uppercase tracking-[0.14em] mb-0.5">On Farm</p>
                <p className="text-white font-medium text-sm">Producers &amp; feedlots</p>
              </div>
              <span className="text-white/35 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all ml-5 shrink-0">
                <Chevron />
              </span>
            </Link>
            <Link
              to="/processing"
              className="group flex items-center justify-between bg-white/10 hover:bg-white/[0.15] border border-white/[0.18] hover:border-white/30 rounded-xl px-6 py-4 transition-all flex-1"
            >
              <div>
                <p className="text-green-400 text-[10px] font-semibold uppercase tracking-[0.14em] mb-0.5">Processing</p>
                <p className="text-white font-medium text-sm">Abattoirs &amp; plants</p>
              </div>
              <span className="text-white/35 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all ml-5 shrink-0">
                <Chevron />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Two platforms */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Two platforms</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Choose your platform.</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              to="/on-farm"
              className="group flex flex-col border border-gray-200 hover:border-green-600 hover:shadow-md rounded-2xl p-8 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-[#f0f7f3] rounded-xl flex items-center justify-center text-green-700 mb-6 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2.5">WebbMuster On Farm</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI powered agents to make the best decisions when selling, buying, trading and breeding.
              </p>
              <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                Explore On Farm <Chevron />
              </span>
            </Link>
            <Link
              to="/processing"
              className="group flex flex-col border border-gray-200 hover:border-green-600 hover:shadow-md rounded-2xl p-8 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-[#f0f7f3] rounded-xl flex items-center justify-center text-green-700 mb-6 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2.5">WebbMuster Processing</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                For abattoirs and processing plants. Scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
              </p>
              <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                Explore Processing <Chevron />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#f0f7f3]">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">What WebbMuster does</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#f0f7f3] rounded-xl flex items-center justify-center text-green-700 mb-5">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
