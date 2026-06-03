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

export default function Processing() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      <Nav />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-8 md:px-10">

          <p className="fade-up d1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8A29E] pt-36 md:pt-56 mb-12">
            Processing
          </p>

          <h1 className="display fade-up d2 text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-[#1C1917] leading-[1.05]">
            Muster<br />
            <span className="text-[#C4BDB6]">Processing.</span>
          </h1>

          <p className="fade-up d3 text-xl md:text-2xl text-[#78716C] leading-relaxed max-w-lg mt-16 md:mt-20">
            Scheduling, vendor coordination, compliance and animal traceability. For abattoirs and processing plants — from booking to boning.
          </p>

          <div className="fade-up d4 mt-16 pb-40 md:pb-56">
            <a href="#contact"
              className="inline-flex items-center bg-[#D97706] text-[#1C1917] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#B45309] transition-colors">
              Apply for the pilot
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
