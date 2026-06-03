import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const type = data.get("type");
    const message = data.get("message");
    window.location.href = `mailto:jacwebb88@gmail.com?subject=WebbMuster enquiry from ${name}&body=${message}%0A%0AOperation type: ${type}%0AEmail: ${email}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl">
          <p className="text-green-700 text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Get in touch</h2>
          <p className="text-gray-500 mb-10 text-sm leading-relaxed">
            Tell us about your operation and we'll be in touch to walk you through WebbMuster.
          </p>
          {submitted ? (
            <div className="bg-[#f0f7f3] border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-gray-900 font-semibold">Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Name</label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-colors bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-colors bg-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Operation type</label>
                <select
                  name="type"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 bg-white transition-colors"
                >
                  <option value="">Select your operation</option>
                  <option>Producer / Grazier</option>
                  <option>Backgrounder</option>
                  <option>Feedlot / Pastoral Company</option>
                  <option>Abattoir / Processing Plant</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-colors resize-none bg-white"
                  placeholder="Tell us about your operation and what you're looking for..."
                />
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  className="bg-[#1a3d2b] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#14301f] transition-colors text-sm"
                >
                  Get in Touch
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
