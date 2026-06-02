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
  },
  {
    name: "Growth",
    description: "Mid size operations, backgrounders and small feedlots. Full financial tools and AI agents.",
  },
  {
    name: "Enterprise",
    description: "Large feedlots, pastoral companies and multi-property operations. Full platform with advanced forecasting and enterprise reporting.",
  },
];

export default function OnFarm() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a3d2b] text-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 font-medium mb-4 uppercase tracking-widest text-sm">On Farm</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            WebbMuster On Farm
          </h1>
          <p className="text-xl text-green-100 leading-relaxed">
            WebbMuster On Farm combines market intelligence, livestock traceability and AI powered agents so producers can make the best decisions when selling, buying, trading and breeding.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 bg-white text-green-900 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Who it's for</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["Producers and graziers", "Backgrounders", "Feedlots", "Pastoral companies"].map((who) => (
              <div key={who} className="bg-green-50 border border-green-100 rounded-lg px-5 py-4">
                <p className="text-green-900 font-medium text-sm">{who}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            WebbMuster On Farm scales from a single property through to a large multi-site enterprise.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">What's included</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Pricing</h2>
          <p className="text-gray-600 mb-10">WebbMuster On Farm scales with your operation. Contact us for pricing.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div key={t.name} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Contact us to discuss which tier suits your operation.
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
