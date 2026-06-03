import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const type = data.get("type");
    const message = data.get("message");
    window.location.href = `mailto:jacwebb88@gmail.com?subject=WebbMuster enquiry from ${name}&body=${message}%0A%0AOperation type: ${type}%0AEmail: ${email}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white border-t border-slate-100 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-lg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 mb-5">Contact</p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-3">Get in touch.</h2>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            Tell us about your plant and we'll get back to you to discuss the pilot.
          </p>

          {submitted ? (
            <div className="flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Message sent</p>
                <p className="text-slate-500 text-sm">We'll be in touch shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Name</label>
                  <input name="name" required type="text" placeholder="Your name"
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email</label>
                  <input name="email" required type="email" placeholder="you@example.com"
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 bg-white transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Operation type</label>
                <select name="type" required
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 bg-white transition-all">
                  <option value="">Select your operation</option>
                  <option>Abattoir / Processing Plant</option>
                  <option>Producer / Grazier</option>
                  <option>Backgrounder</option>
                  <option>Feedlot / Pastoral Company</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us about your plant or operation..."
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 bg-white transition-all resize-none" />
              </div>
              <button type="submit"
                className="bg-slate-900 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-sm">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
