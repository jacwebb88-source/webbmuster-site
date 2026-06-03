import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import DashboardMockup from "../components/DashboardMockup";

/* ─── Data ─────────────────────────────────────────── */

const capabilities = [
  {
    number: "01",
    title: "Intake Coordination",
    body: "Manage every vendor booking from first contact to kill day. Paperwork, head counts, specs and transport — tracked in one place.",
  },
  {
    number: "02",
    title: "Compliance Management",
    body: "NVDs, HGP declarations, MSA requirements and export certificates managed automatically. No last-minute surprises on the kill floor.",
  },
  {
    number: "03",
    title: "Kill Scheduling",
    body: "Forward scheduling across vendors, species and programs. Know your capacity, your gaps and your commitments weeks ahead.",
  },
  {
    number: "04",
    title: "Operations Agent",
    body: "AI-powered morning briefing and real-time alerts. Know what needs attention before the shift starts — without checking five systems.",
  },
  {
    number: "05",
    title: "Vendor Scorecard",
    body: "Reliability, NVD compliance, change rates and pH performance scored for every supplier. Data to have the right conversations.",
  },
  {
    number: "06",
    title: "Market Intelligence",
    body: "Live grid prices, trends and forecasting for producers. Know what the market is paying before you make a move.",
  },
];

const platforms = [
  {
    tag: "Processing",
    to: "/processing",
    title: "WebbMuster Processing",
    body: "For abattoirs and processing plants. Scheduling, vendor coordination, compliance and animal traceability from booking to boning.",
    tags: ["Kill Scheduling", "Vendor Scorecard", "Compliance", "Operations Agent", "Forecasting"],
  },
  {
    tag: "On Farm",
    to: "/on-farm",
    title: "WebbMuster On Farm",
    body: "For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI agents.",
    tags: ["Market Intelligence", "Livestock Traceability", "AI Agents", "Kill Results", "Bid Calculator"],
  },
];

/* ─── Sub-components ────────────────────────────────── */

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative bg-[#050e07] overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none opacity-60" />
        <div className="hero-glow absolute inset-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-0 md:pt-28">
          {/* Label */}
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 border border-white/10 bg-white/[0.06] rounded-full px-3.5 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/55 text-xs font-medium tracking-wide">Operational infrastructure for red meat processors</span>
          </div>

          {/* Headline */}
          <h1 className="fade-up fade-up-2 text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.06] tracking-tight mb-6 max-w-3xl">
            Coordinate livestock intake.<br />
            <span className="text-white/40">Before it reaches the floor.</span>
          </h1>

          <p className="fade-up fade-up-3 text-white/45 text-lg leading-relaxed max-w-xl mb-10">
            WebbMuster gives processors the tools to manage vendor bookings, compliance and kill scheduling — and gives producers the market intelligence to make better selling decisions.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-4 flex flex-wrap gap-3 mb-16">
            <Link
              to="/processing"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              WebbMuster Processing <Chevron />
            </Link>
            <Link
              to="/on-farm"
              className="inline-flex items-center gap-2 border border-white/15 text-white/65 hover:text-white hover:border-white/30 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              WebbMuster On Farm <Chevron />
            </Link>
          </div>

          {/* Dashboard mockup — bleeds to bottom of hero */}
          <div className="fade-up fade-up-4 relative">
            {/* Fade gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050e07] to-transparent z-10 pointer-events-none" />
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ── Proof strip ──────────────────────────────── */}
      <section className="border-b border-gray-100 py-6 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Built for</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {["Abattoirs", "Processing plants", "Pastoral companies", "Feedlots", "Graziers"].map(w => (
              <span key={w} className="text-sm font-medium text-gray-400">{w}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two platforms ────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 mb-4">Two platforms</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.08]">
                One product for<br className="hidden md:block" /> every side of the chain.
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Processors and producers each get a platform built around how they actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {platforms.map(p => (
              <Link
                key={p.to}
                to={p.to}
                className="group flex flex-col rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-0.5 p-8 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">{p.tag}</span>
                  <span className="text-gray-300 group-hover:text-gray-500 transition-colors">
                    <ArrowUpRight />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] font-medium text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities grid ────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 mb-4">Platform</p>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">What WebbMuster does</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {capabilities.map(c => (
              <div key={c.number}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[11px] font-mono font-bold text-gray-300 select-none shrink-0">{c.number}</span>
                  <h3 className="font-semibold text-gray-900">{c.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-[calc(11px+0.75rem)]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pilot CTA ────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050e07]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400 mb-5">Pilot Program</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.08] mb-5">
                Running a pilot with<br className="hidden md:block" /> your processing plant?
              </h2>
              <p className="text-white/40 text-base leading-relaxed">
                We're working with a small number of processors to run WebbMuster in a live operation. If you're interested, get in touch — we'll work through the configuration directly with your team.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Apply for the pilot <Chevron />
              </a>
              <p className="text-center text-white/25 text-xs">Limited availability</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
