import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import DashboardMockup from "../components/DashboardMockup";

/* ── Shared atoms ─────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 mb-5">
      {children}
    </p>
  );
}

function ChevronRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ── Solution pillars ─────────────────────────────── */

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Scheduling",
    body: "Kill weeks planned weeks in advance. Every booking linked to a vendor, spec and head count. Capacity tracked automatically.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Compliance",
    body: "NVDs, HGP declarations, MSA requirements and export certificates tracked per vendor and per kill. Nothing falls through the gaps.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Communication",
    body: "Automated reminders for outstanding paperwork. Morning briefings for your operations team. Vendors kept informed without the phone calls.",
  },
];

/* ── Home page ────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ══ HERO ══════════════════════════════════════ */}
      <section className="relative bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle dot grid — light, no glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.45,
          }}
        />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
          {/* Eyebrow */}
          <div className="fade-up delay-1 mb-8">
            <span className="inline-flex items-center gap-2 border border-emerald-200 bg-emerald-50 text-emerald-700 text-[11px] font-semibold tracking-wide px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              Intake Coordination Platform · Red Meat Processing
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up delay-2 text-[3rem] md:text-[4.25rem] lg:text-[5rem] font-extrabold text-slate-900 leading-[1.04] tracking-tight max-w-3xl mb-7">
            Smart Scheduling.<br />
            Full Visibility.<br />
            <span className="text-slate-400">Less Waste.</span>
          </h1>

          {/* Sub */}
          <p className="fade-up delay-3 text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
            WebbMuster coordinates livestock intake for red meat processors — from the first vendor booking through to the kill floor.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-4 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
            >
              Apply for the pilot <ChevronRight />
            </a>
            <Link
              to="/processing"
              className="inline-flex items-center gap-2 border border-slate-200 text-slate-600 font-medium text-sm px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              See how it works <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM ════════════════════════════════════ */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <Label><span className="text-emerald-400">The Problem</span></Label>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.18] tracking-tight mb-8">
              "Processor intake is still coordinated through spreadsheets, email chains and phone calls."
            </blockquote>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-6">
              There's no single source of truth. NVDs go missing. Bookings change the night before. The operations team finds out on the day. It's a system built on exceptions, not structure.
            </p>
            <p className="text-slate-300 font-semibold text-lg">
              WebbMuster replaces that with structured intake coordination.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SOLUTION ═══════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <Label>The Solution</Label>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Scheduling.<br />Compliance.<br />Communication.
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Three things processors struggle to coordinate. One platform that handles all of them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6">
                  {p.icon}
                </div>
                <div className="text-[11px] font-mono text-slate-300 mb-3 select-none">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM SCREENSHOT ════════════════════════ */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Label>Platform</Label>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                Built for how processors<br className="hidden md:block" /> actually work.
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Every booking, every vendor, every NVD — in one place. Your operations team knows exactly where things stand.
            </p>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* ══ BOTH PLATFORMS ═════════════════════════════ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <Label>Two platforms</Label>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-14">
            Processing and On Farm.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                tag: "Processing",
                to: "/processing",
                title: "WebbMuster Processing",
                body: "Kill scheduling, vendor coordination, compliance management and animal traceability. Operational infrastructure for abattoirs and processing plants.",
                tags: ["Kill Scheduling", "Vendor Scorecard", "NVD Compliance", "Operations Agent", "Forecasting"],
                cta: "See Processing →",
              },
              {
                tag: "On Farm",
                to: "/on-farm",
                title: "WebbMuster On Farm",
                body: "Market intelligence, livestock traceability and AI powered agents. Everything a producer needs to make better decisions when selling, buying, trading and breeding.",
                tags: ["Market Intelligence", "Livestock Traceability", "Kill Results", "Bid Calculator", "AI Agents"],
                cta: "See On Farm →",
              },
            ].map(p => (
              <Link
                key={p.to}
                to={p.to}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">{p.tag}</span>
                  <span className="text-slate-300 group-hover:text-slate-500 transition-colors text-sm font-medium">{p.cta}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{p.body}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PILOT CTA ══════════════════════════════════ */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="max-w-2xl">
            <Label><span className="text-emerald-400">Pilot Program</span></Label>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              Running a pilot with<br className="hidden md:block" /> your plant?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We're working with a small number of processing plants to run WebbMuster in a live operation. If you're interested, we'll work through the configuration directly with your team — at no cost for the pilot period.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold text-sm px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-sm"
            >
              Apply for the pilot <ChevronRight />
            </a>
            <p className="text-center text-slate-600 text-xs">Limited to a small number of plants</p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
