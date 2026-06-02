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
    <section id="contact" className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <p className="text-green-700 text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in touch</h2>
        <p className="text-gray-500 mb-10 text-lg">
          Tell us about your operation and we'll be in touch to walk you through WebbMuster.
        </p>
        {submitted ? (
          <div className="bg-[#f0f7f3] border border-green-200 rounded-2xl p-10 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-gray-900 font-semibold text-lg">Thanks — we'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/40 focus:border-green-600 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/40 focus:border-green-600 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Operation type</label>
              <select
                name="type"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/40 focus:border-green-600 bg-white transition-colors"
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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/40 focus:border-green-600 transition-colors resize-none"
                placeholder="Tell us about your operation and what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#1a3d2b] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#14301f] transition-colors w-full md:w-auto text-sm"
            >
              Get in Touch
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
