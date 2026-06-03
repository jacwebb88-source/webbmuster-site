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
    <section id="contact" className="bg-white border-t border-gray-100 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600 mb-4">Contact</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Get in touch</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Tell us about your operation and we'll be in touch to walk you through WebbMuster.
          </p>

          {submitted ? (
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 text-center">
              <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-gray-900 font-semibold text-sm">Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Name</label>
                  <input name="name" required type="text"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-colors bg-white placeholder:text-gray-300"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
                  <input name="email" required type="email"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-colors bg-white placeholder:text-gray-300"
                    placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Operation type</label>
                <select name="type" required
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 bg-white transition-colors text-gray-700">
                  <option value="">Select your operation</option>
                  <option>Producer / Grazier</option>
                  <option>Backgrounder</option>
                  <option>Feedlot / Pastoral Company</option>
                  <option>Abattoir / Processing Plant</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Message</label>
                <textarea name="message" rows={4}
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-colors resize-none bg-white placeholder:text-gray-300"
                  placeholder="Tell us about your operation..." />
              </div>
              <button type="submit"
                className="bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
