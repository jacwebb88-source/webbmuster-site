import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const features = [
  {
    title: "Kill Scheduling",
    description: "Forward kill planning and booking management. Know what's coming in, when, and from who — weeks ahead.",
  },
  {
    title: "Vendor Coordination",
    description: "Manage supplier bookings, NVDs and compliance in one place. Chase outstanding paperwork before it becomes a problem on kill day.",
  },
  {
    title: "Compliance Management",
    description: "Export certificates, HGP conflicts, MSA requirements and establishment credentials tracked automatically. No more last minute surprises.",
  },
  {
    title: "Animal Traceability",
    description: "QR code provenance from lot to retail pack. Every animal tracked from the booking through to the boning room.",
  },
  {
    title: "Operations Agent",
    description: "AI powered morning briefings and real time alerts for your kill floor. Know what needs attention before the shift starts.",
  },
  {
    title: "Vendor Scorecard",
    description: "Reliability scoring and performance tracking for every supplier. NVD compliance, change rates, pH performance and transport confirmation — all in one view.",
  },
  {
    title: "Kill Grading",
    description: "Data entry and reporting for MSA grading, pH and carcase specs. Track performance by vendor, breed and program.",
  },
  {
    title: "Forecasting",
    description: "12 week kill volume and revenue projections based on forward bookings and historical patterns. Plan your floor and your finances.",
  },
];

export default function Processing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a3d2b] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="text-green-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-8">Processing</p>
          <h1 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-tight mb-6 max-w-lg">
            WebbMuster Processing
          </h1>
          <p className="text-green-100/80 text-base md:text-lg leading-relaxed max-w-lg mb-10">
            WebbMuster Processing gives abattoirs the scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
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
          {["Abattoirs", "Processing plants of all sizes"].map((who) => (
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Scales with your plant</h2>
          <p className="text-gray-500 mb-4 max-w-md text-sm leading-relaxed">Pricing is based on kill volume and the modules your operation needs.</p>
          <p className="text-gray-400 text-sm">Contact us to discuss what suits you.</p>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
