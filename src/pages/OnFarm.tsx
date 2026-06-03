import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const features = [
  {
    title: "Market Intelligence",
    description: "Live grid prices, market trends and forecasting across breeds, specs and processors. Know what the market is doing before you make a move.",
  },
  {
    title: "Livestock Traceability",
    description: "Track every animal from purchase through to kill results. Full history, NVD records and compliance in one place.",
  },
  {
    title: "Kill Results",
    description: "See your grading data, MSA scores and HSCW results after every kill. Know how your stock is performing against spec.",
  },
  {
    title: "Financial Tools",
    description: "Track every dollar in and out across your livestock operation. P&L, livestock trading account and FMD tracker built in.",
  },
  {
    title: "Environmental Conditions",
    description: "Rainfall, pasture and conditions data relevant to your decisions. Understand how your environment is affecting your operation.",
  },
  {
    title: "AI Agents",
    description: "Intelligent agents working across your data to surface the right information at the right time — without you having to go looking for it.",
  },
  {
    title: "Forecasting",
    description: "8 week market price outlook and best time to sell by mob. Know what your stock is likely to be worth before you book them in.",
  },
  {
    title: "Bid Calculator",
    description: "Know what you can pay for store stock and still hit your targets. Run the numbers before you go to the sale.",
  },
];

const tiers = [
  {
    name: "Starter",
    description: "Single property, own stock. Core market intelligence and traceability tools.",
    highlight: false,
  },
  {
    name: "Growth",
    description: "Mid size operations, backgrounders and small feedlots. Full financial tools and AI agents.",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Large feedlots, pastoral companies and multi-property operations. Full platform with advanced forecasting and enterprise reporting.",
    highlight: false,
  },
];

export default function OnFarm() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a3d2b] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="text-green-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-8">On Farm</p>
          <h1 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-tight mb-6 max-w-lg">
            WebbMuster On Farm
          </h1>
          <p className="text-green-100/80 text-base md:text-lg leading-relaxed max-w-lg mb-10">
            WebbMuster On Farm combines market intelligence, livestock traceability and AI powered agents so producers can make the best decisions when selling, buying, trading and breeding.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#1a3d2b] font-semibold px-7 py-3.5 rounded-full hover:bg-green-50 transition-colors text-sm"
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-10 px-6 md:px-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mr-2">For</p>
          {["Producers and graziers", "Backgrounders", "Feedlots", "Pastoral companies"].map((who) => (
            <div key={who} className="bg-[#f0f7f3] border border-green-100 rounded-full px-4 py-2">
              <p className="text-green-800 font-medium text-xs">{who}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#f0f7f3]">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">What's included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
              >
                <div className="w-1.5 h-5 bg-green-600 rounded-full mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Pricing</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Scales with your operation</h2>
          <p className="text-gray-500 mb-12 max-w-md text-sm leading-relaxed">Contact us to discuss pricing for your operation.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-7 border transition-all ${
                  t.highlight
                    ? "border-green-600 bg-[#f0f7f3]"
                    : "border-gray-200 bg-white"
                }`}
              >
                {t.highlight && (
                  <p className="text-green-700 text-[10px] font-semibold uppercase tracking-[0.14em] mb-4">Most popular</p>
                )}
                <h3 className="text-base font-bold text-gray-900 mb-3">{t.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.description}</p>
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
