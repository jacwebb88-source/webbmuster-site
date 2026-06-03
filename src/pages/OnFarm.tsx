import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const features = [
  { title: "Market Intelligence", description: "Live grid prices, market trends and forecasting across breeds, specs and processors. Know what the market is paying before you make a move." },
  { title: "Livestock Traceability", description: "Track every animal from purchase through to kill results. Full history, NVD records and compliance in one place." },
  { title: "Kill Results", description: "Grading data, MSA scores and HSCW results after every kill. Know how your stock is performing against spec." },
  { title: "Financial Tools", description: "Every dollar in and out across your livestock operation. P&L, livestock trading account and FMD tracker." },
  { title: "Environmental Conditions", description: "Rainfall, pasture and conditions data relevant to your decisions. Understand how your environment is affecting your operation." },
  { title: "AI Agents", description: "Agents working across your data to surface the right information at the right time — without you having to go looking for it." },
  { title: "Forecasting", description: "8 week market price outlook and best time to sell by mob. Know what your stock is likely to be worth before you book them in." },
  { title: "Bid Calculator", description: "Know what you can pay for store stock and still hit your targets. Run the numbers before you go to the sale." },
];

const tiers = [
  { name: "Starter", price: "Single property", description: "Core market intelligence and traceability tools for producers managing their own stock.", highlight: false },
  { name: "Growth", price: "Mid-size operations", description: "Full financial tools and AI agents. Suitable for backgrounders, small feedlots and growing operations.", highlight: true },
  { name: "Enterprise", price: "Large operations", description: "Full platform with advanced forecasting and enterprise reporting. For large feedlots, pastoral companies and multi-property operations.", highlight: false },
];

const timeline = [
  { step: "01", title: "Get in touch", body: "Tell us about your operation. We'll understand your setup and what you need." },
  { step: "02", title: "Configuration", body: "We configure WebbMuster for your breeds, processors and operation type." },
  { step: "03", title: "Go live", body: "Your data starts flowing. Market intelligence, traceability and agents working from day one." },
];

export default function OnFarm() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#060d08] overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-32 md:pb-36">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-400 mb-8 fade-up fade-up-1">On Farm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6 max-w-xl fade-up fade-up-2">
            WebbMuster<br />On Farm
          </h1>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-10 fade-up fade-up-3">
            Market intelligence, livestock traceability and AI powered agents so producers can make the best decisions when selling, buying, trading and breeding.
          </p>
          <a
            href="#contact"
            className="fade-up fade-up-4 inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-gray-100 py-5 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-medium uppercase tracking-widest text-gray-300 mr-1">For</span>
          {["Producers", "Graziers", "Backgrounders", "Feedlots", "Pastoral companies"].map(who => (
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

      {/* Pricing */}
      <section className="py-24 px-6 md:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600 mb-4">Pricing</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Scales with your operation</h2>
            <p className="text-gray-400 text-sm">Contact us for pricing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {tiers.map(t => (
              <div
                key={t.name}
                className={`rounded-2xl p-7 border transition-all ${
                  t.highlight
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                {t.highlight && (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-green-400 mb-4 block">Most popular</span>
                )}
                <p className={`text-[11px] font-medium mb-2 ${t.highlight ? "text-gray-400" : "text-gray-400"}`}>{t.price}</p>
                <h3 className={`text-lg font-bold mb-3 ${t.highlight ? "text-white" : "text-gray-900"}`}>{t.name}</h3>
                <p className={`text-sm leading-relaxed ${t.highlight ? "text-gray-400" : "text-gray-500"}`}>{t.description}</p>
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
