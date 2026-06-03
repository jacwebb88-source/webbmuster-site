import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const features = [
  { n: "01", title: "Market Intelligence",     body: "Live grid prices, market trends and forecasting across breeds, specs and processors. Know what the market is paying before you move." },
  { n: "02", title: "Livestock Traceability",  body: "Every animal tracked from purchase through to kill results. Full history, NVD records and compliance in one place." },
  { n: "03", title: "Kill Results",            body: "Grading data, MSA scores and HSCW results after every kill. Know how your stock is performing against spec." },
  { n: "04", title: "Financial Tools",         body: "Every dollar in and out. P&L, livestock trading account and FMD tracker across your operation." },
  { n: "05", title: "Environmental Conditions",body: "Rainfall, pasture and conditions data tied to your decisions. Understand how your environment is affecting your operation." },
  { n: "06", title: "AI Agents",               body: "Agents working across your data to surface the right information at the right time — without you having to go looking." },
  { n: "07", title: "Forecasting",             body: "8-week market price outlook and best time to sell by mob. Know what your stock is likely to be worth before you book them." },
  { n: "08", title: "Bid Calculator",          body: "Know what you can pay for store stock and still hit your targets. Run the numbers before you go to the sale." },
];

const tiers = [
  {
    name: "Starter",
    sub: "Single property",
    body: "Core market intelligence and traceability tools for producers managing their own stock.",
    dark: false,
  },
  {
    name: "Growth",
    sub: "Mid-size operations",
    body: "Full financial tools and AI agents. For backgrounders, small feedlots and growing operations.",
    dark: true,
  },
  {
    name: "Enterprise",
    sub: "Large operations",
    body: "Full platform with advanced forecasting and enterprise reporting. For large feedlots, pastoral companies and multi-property operations.",
    dark: false,
  },
];

const timeline = [
  { step: "01", title: "Get in touch",    body: "Tell us about your operation. We'll understand your setup, breeds, processors and what you need." },
  { step: "02", title: "Configuration",  body: "We configure WebbMuster for your operation — processors, breeds, programs and traceability setup." },
  { step: "03", title: "Go live",        body: "Market intelligence, traceability and AI agents active from day one." },
];

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function OnFarm() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#050e07] overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none opacity-60" />
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-32 md:pb-36">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400 mb-8 fade-up fade-up-1">
            On Farm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.06] tracking-tight mb-6 max-w-2xl fade-up fade-up-2">
            WebbMuster<br />On Farm
          </h1>
          <p className="text-white/45 text-lg leading-relaxed max-w-lg mb-10 fade-up fade-up-3">
            Market intelligence, livestock traceability and AI powered agents. Everything a producer needs to make the best decisions when selling, buying, trading and breeding.
          </p>
          <a
            href="#contact"
            className="fade-up fade-up-4 inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch <Chevron />
          </a>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-gray-100 py-5 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-medium uppercase tracking-widest text-gray-300 mr-2">For</span>
          {["Producers", "Graziers", "Backgrounders", "Feedlots", "Pastoral companies"].map(w => (
            <span key={w} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3.5 py-1.5">{w}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 mb-4">Platform</p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-16">What's included</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
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

      {/* Pricing */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600 mb-4">Pricing</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Scales with your operation</h2>
            <p className="text-gray-400 text-sm">Contact us to discuss pricing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map(t => (
              <div
                key={t.name}
                className={`rounded-2xl p-8 border transition-all ${
                  t.dark
                    ? "bg-gray-900 border-gray-900 text-white"
                    : "bg-white border-gray-200"
                }`}
              >
                {t.dark && (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-400 block mb-4">
                    Most popular
                  </span>
                )}
                <p className={`text-[11px] font-medium mb-1.5 ${t.dark ? "text-gray-500" : "text-gray-400"}`}>{t.sub}</p>
                <h3 className={`text-xl font-bold mb-3 ${t.dark ? "text-white" : "text-gray-900"}`}>{t.name}</h3>
                <p className={`text-sm leading-relaxed ${t.dark ? "text-gray-400" : "text-gray-500"}`}>{t.body}</p>
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
