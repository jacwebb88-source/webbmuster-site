import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.location.href = `mailto:jacwebb88@gmail.com?subject=WebbMuster enquiry from ${data.get("name")}&body=${data.get("message")}%0A%0AOperation: ${data.get("type")}%0AEmail: ${data.get("email")}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#FAFAF7] border-t border-[#E5E2DB] py-28 md:py-40 px-8 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F5A623] mb-6">Contact</p>
            <h2 className="display text-4xl md:text-5xl font-bold text-[#111111] mb-6">Get in touch.</h2>
            <p className="text-[#6B7280] text-base leading-relaxed max-w-xs">
              Tell us about your plant and we'll be in touch to discuss WebbMuster.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-center gap-5 rounded-2xl border border-[#E5E2DB] bg-white p-8">
                <div className="w-10 h-10 rounded-full bg-[#F5A623]/15 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">Message sent.</p>
                  <p className="text-[#6B7280] text-sm mt-0.5">We'll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111]/50 uppercase tracking-wide mb-2">Name</label>
                    <input name="name" required type="text" placeholder="Your name"
                      className="w-full border border-[#E5E2DB] rounded-xl px-4 py-3.5 text-sm text-[#111111] placeholder:text-[#111111]/25 bg-white focus:outline-none focus:border-[#111111]/30 focus:ring-2 focus:ring-[#111111]/5 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#111111]/50 uppercase tracking-wide mb-2">Email</label>
                    <input name="email" required type="email" placeholder="you@example.com"
                      className="w-full border border-[#E5E2DB] rounded-xl px-4 py-3.5 text-sm text-[#111111] placeholder:text-[#111111]/25 bg-white focus:outline-none focus:border-[#111111]/30 focus:ring-2 focus:ring-[#111111]/5 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111111]/50 uppercase tracking-wide mb-2">Operation type</label>
                  <select name="type" required
                    className="w-full border border-[#E5E2DB] rounded-xl px-4 py-3.5 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#111111]/30 focus:ring-2 focus:ring-[#111111]/5 transition-all appearance-none">
                    <option value="">Select your operation</option>
                    <option>Abattoir / Processing Plant</option>
                    <option>Producer / Grazier</option>
                    <option>Backgrounder</option>
                    <option>Feedlot / Pastoral Company</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111111]/50 uppercase tracking-wide mb-2">Message</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your plant or operation..."
                    className="w-full border border-[#E5E2DB] rounded-xl px-4 py-3.5 text-sm text-[#111111] placeholder:text-[#111111]/25 bg-white focus:outline-none focus:border-[#111111]/30 focus:ring-2 focus:ring-[#111111]/5 transition-all resize-none" />
                </div>
                <button type="submit"
                  className="bg-[#F5A623] text-[#111111] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#E09610] transition-colors shadow-sm shadow-[#F5A623]/20">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
