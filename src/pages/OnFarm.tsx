import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const features = [
  { n: "01", title: "Market Intelligence",      body: "Live grid prices, market trends and forecasting across breeds, specs and processors. Know what the market is paying before you move." },
  { n: "02", title: "Livestock Traceability",   body: "Every animal tracked from purchase through to kill results. Full history, NVD records and compliance in one place." },
  { n: "03", title: "Kill Results",             body: "Grading data, MSA scores and HSCW results after every kill. Know how your stock is performing against spec." },
  { n: "04", title: "Financial Tools",          body: "Every dollar in and out. P&L, livestock trading account and FMD tracker across your operation." },
  { n: "05", title: "Environmental Conditions", body: "Rainfall, pasture and conditions data tied to your decisions. Understand how your environment is affecting your operation." },
  { n: "06", title: "AI Agents",                body: "Agents working across your data to surface the right information at the right time — without you having to go looking." },
  { n: "07", title: "Forecasting",              body: "8-week market price outlook and best time to sell by mob. Know what your stock is likely to be worth before you book them." },
  { n: "08", title: "Bid Calculator",           body: "Know what you can pay for store stock and still hit your targets. Run the numbers before you go to the sale." },
];

export default function OnFarm() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-8 md:px-10">

          <p className="fade-up d1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8A29E] pt-36 md:pt-56 mb-12">
            Livestock
          </p>

          <h1 className="display fade-up d2 text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-[#1C1917] leading-[1.05]">
            Muster<br />
            <span className="text-[#C4BDB6]">Livestock.</span>
          </h1>

          <p className="fade-up d3 text-xl md:text-2xl text-[#78716C] leading-relaxed max-w-lg mt-16 md:mt-20">
            Market intelligence, decision making and livestock traceability. For feedlots, backgrounders, pastoral companies and producers.
          </p>

          <div className="fade-up d4 mt-16 pb-40 md:pb-56">
            <a href="#contact"
              className="inline-flex items-center bg-[#1C1917] text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-[#2C2825] transition-colors">
              Get in touch
            </a>
          </div>

        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════ */}
      <section className="bg-[#F3F1EB] border-t border-[#E5E3DC] py-40 md:py-64 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8A29E] mb-12">Platform</p>

          <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-20 md:mb-28">
            What's included.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {features.map(f => (
              <div key={f.n}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#C4BDB6] select-none shrink-0">{f.n}</span>
                  <h3 className="text-base font-bold text-[#1C1917]">{f.title}</h3>
                </div>
                <p className="text-base text-[#78716C] leading-relaxed pl-[calc(11px+1rem)]">{f.body}</p>
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
