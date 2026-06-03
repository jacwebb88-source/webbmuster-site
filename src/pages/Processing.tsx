import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const features = [
  { title: "Kill Scheduling", description: "Forward kill planning and booking management. Know what's coming in, when, and from who — weeks ahead." },
  { title: "Vendor Coordination", description: "Manage supplier bookings, NVDs and compliance in one place. Chase outstanding paperwork before kill day." },
  { title: "Compliance Management", description: "Export certificates, HGP conflicts, MSA requirements and establishment credentials tracked automatically." },
  { title: "Animal Traceability", description: "Every animal tracked from the booking through to the boning room. Full QR code provenance from lot to retail pack." },
  { title: "Operations Agent", description: "AI powered morning briefings and real time alerts for your kill floor. Know what needs attention before the shift starts." },
  { title: "Vendor Scorecard", description: "Reliability scoring for every supplier. NVD compliance, change rates, pH performance and transport confirmation in one view." },
  { title: "Kill Grading", description: "Data entry and reporting for MSA grading, pH and carcase specs. Track performance by vendor, breed and program." },
  { title: "Forecasting", description: "12 week kill volume and revenue projections based on forward bookings and historical patterns." },
];

const timeline = [
  { step: "01", title: "Apply for the pilot", body: "Tell us about your plant. We're working with a small number of processors first." },
  { step: "02", title: "Setup and config", body: "We configure WebbMuster for your vendors, specs, programs and compliance requirements." },
  { step: "03", title: "Go live", body: "Scheduling, vendor coordination and the Operations Agent working from your first kill week." },
];

export default function Processing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#060d08] overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-32 md:pb-36">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-400 mb-8 fade-up fade-up-1">Processing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6 max-w-xl fade-up fade-up-2">
            WebbMuster<br />Processing
          </h1>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-10 fade-up fade-up-3">
            Scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
          </p>
          <div className="flex flex-wrap gap-3 fade-up fade-up-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply for the pilot
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
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
      <section className="border-b border-gray-100 py-5 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-medium uppercase tracking-widest text-gray-300 mr-1">For</span>
          {["Abattoirs", "Processing plants of all sizes"].map(who => (
            <span key={who} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3.5 py-1.5">{who}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600 mb-4">Platform</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-16">What's included</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {features.map((f, i) => (
              <div key={f.title}>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-[11px] font-mono text-gray-300 select-none">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{f.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-8">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-10 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600 mb-4">Getting started</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map(t => (
              <div key={t.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-900 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0">{t.step}</span>
                  <div className="w-px flex-1 bg-gray-100 mt-3 hidden md:block" />
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{t.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-24 px-6 md:px-10 bg-[#060d08]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-400 mb-4">Pilot Program</p>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                Be part of the first group.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                We're running a pilot with a small number of processing plants. If you're interested in being part of the first group, get in touch and we'll work through the setup directly with your team.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
            >
              Apply for the pilot
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
