import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const pillars = [
  {
    title: "Market Intelligence",
    description:
      "Real time grid prices, market trends and forecasting across breeds, specs and processors — so every decision is backed by current data.",
  },
  {
    title: "AI Powered Agents",
    description:
      "Intelligent agents working across your operation to surface the right information at the right time — without you having to go looking for it.",
  },
  {
    title: "End to End Traceability",
    description:
      "Every animal tracked from paddock to plant. NVDs, compliance, kill results and provenance — connected in one system.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a3d2b] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="WebbMuster" className="h-16 w-16 rounded-xl object-cover" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Better decisions.<br />Better data.<br />Better results.
          </h1>
          <p className="text-xl text-green-100 mb-4 max-w-2xl mx-auto">
            Software for the Australian red meat industry.
          </p>
          <p className="text-lg text-green-200 max-w-2xl mx-auto">
            WebbMuster gives producers, feedlots and processors the data and tools to make better decisions and run more efficient operations.
          </p>
        </div>
      </section>

      {/* Entry points */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Where do you work?</h2>
          <p className="text-gray-500 text-center mb-10">Two platforms, built for the people who use them.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/on-farm"
              className="group block border-2 border-gray-200 hover:border-green-700 rounded-2xl p-8 transition-all"
            >
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WebbMuster On Farm</h3>
              <p className="text-gray-600 mb-6">
                For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI powered agents to make the best decisions when selling, buying, trading and breeding.
              </p>
              <span className="text-green-800 font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>
            <Link
              to="/processing"
              className="group block border-2 border-gray-200 hover:border-green-700 rounded-2xl p-8 transition-all"
            >
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WebbMuster Processing</h3>
              <p className="text-gray-600 mb-6">
                For abattoirs and processing plants. Scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
              </p>
              <span className="text-green-800 font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">What WebbMuster does</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-7 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
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
