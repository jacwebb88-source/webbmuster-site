import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const features = [
  { n: "01", title: "Kill Scheduling",       body: "Forward kill planning and booking management. Know what's coming in, when, and from who — weeks ahead." },
  { n: "02", title: "Vendor Coordination",   body: "Manage supplier bookings, NVDs and compliance in one place. Chase outstanding paperwork before kill day." },
  { n: "03", title: "Compliance Management", body: "Export certificates, HGP conflicts, MSA requirements and establishment credentials tracked automatically." },
  { n: "04", title: "Animal Traceability",   body: "Every animal tracked from booking to boning room. Full QR code provenance from lot to retail pack." },
  { n: "05", title: "Operations Agent",      body: "AI-powered morning briefings and real-time kill floor alerts. Know what needs attention before the shift starts." },
  { n: "06", title: "Vendor Scorecard",      body: "Reliability scoring for every supplier. NVD compliance, change rates, pH performance and transport confirmation." },
  { n: "07", title: "Kill Grading",          body: "MSA grading, pH and carcase spec data entry and reporting. Track performance by vendor, breed and program." },
  { n: "08", title: "Forecasting",           body: "12-week kill volume and revenue projections based on forward bookings and historical patterns." },
];

const timeline = [
  { step: "01", title: "Apply for the pilot",  body: "Tell us about your plant. We're working with a small number of processors first and will work through the fit together." },
  { step: "02", title: "Setup and config",     body: "We configure WebbMuster for your vendors, programs, specs and compliance requirements. Typically one to two weeks." },
  { step: "03", title: "Go live",              body: "Scheduling, vendor coordination and the Operations Agent active from your first kill week." },
];

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Processing() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#050e07] overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none opacity-60" />
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-32 md:pb-36">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400 mb-8 fade-up fade-up-1">
            Processing
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.06] tracking-tight mb-6 max-w-2xl fade-up fade-up-2">
            WebbMuster<br />Processing
          </h1>
          <p className="text-white/45 text-lg leading-relaxed max-w-lg mb-10 fade-up fade-up-3">
            Scheduling, vendor coordination, compliance and animal traceability. Operational infrastructure for red meat processors — from booking to boning.
          </p>
          <div className="flex flex-wrap gap-3 fade-up fade-up-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply for the pilot <Chevron />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 hover:text-white hover:border-white/30 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-gray-100 py-5 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-medium uppercase tracking-widest text-gray-300 mr-2">For</span>
          {["Abattoirs", "Processing plants of all sizes"].map(w => (
            <span key={w} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3.5 py-1.5">{w}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 mb-4">Platform</p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-16">What's included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-12">
            {features.map(f => (
              <div key={f.n}>
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="text-[11px] font-mono font-bold text-gray-300 select-none shrink-0">{f.n}</span>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-[calc(11px+0.75rem)]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 mb-4">Getting started</p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map(t => (
              <div key={t.step} className="rounded-2xl border border-gray-100 bg-gray-50 p-7">
                <span className="text-[11px] font-mono font-bold text-gray-300 block mb-4">{t.step}</span>
                <h3 className="font-semibold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050e07]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400 mb-5">Pilot Program</p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Be part of the first group.</h2>
            <p className="text-white/40 text-sm leading-relaxed">
              We're running WebbMuster Processing in a small number of plants. If you're interested, get in touch — we'll configure it around your operation.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shrink-0"
          >
            Apply for the pilot <Chevron />
          </a>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
