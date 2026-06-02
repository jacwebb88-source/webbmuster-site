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
      <section className="bg-[#1a3d2b] text-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 font-medium mb-4 uppercase tracking-widest text-sm">Processing</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            WebbMuster Processing
          </h1>
          <p className="text-xl text-green-100 leading-relaxed">
            WebbMuster Processing gives abattoirs the scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
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
          <div className="grid md:grid-cols-2 gap-4">
            {["Abattoirs", "Processing plants of all sizes"].map((who) => (
              <div key={who} className="bg-green-50 border border-green-100 rounded-lg px-5 py-4">
                <p className="text-green-900 font-medium text-sm">{who}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            WebbMuster Processing scales with your plant — from single shift operations through to large multi-species facilities.
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
          <p className="text-gray-600 mb-6">WebbMuster Processing scales with your plant. Contact us for pricing.</p>
          <p className="text-sm text-gray-500">
            Pricing is based on kill volume and the modules your operation needs. Contact us to discuss what suits you.
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
