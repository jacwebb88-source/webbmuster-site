import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.location.href = `mailto:jacwebb88@gmail.com?subject=Muster enquiry from ${data.get("name")}&body=${data.get("message")}%0A%0AOperation: ${data.get("type")}%0AEmail: ${data.get("email")}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#FAFAF8] border-t border-[#E5E3DC] py-28 md:py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#78716C] mb-5">Contact</p>
            <h2 className="display text-4xl md:text-5xl font-bold text-[#1C1917] mb-5">Get in touch.</h2>
            <p className="text-[#78716C] text-sm leading-relaxed">Tell us about your plant and we'll be in touch to discuss the pilot.</p>
          </div>
          <div>
            {submitted ? (
              <div className="flex items-center gap-5 rounded-2xl border border-[#E5E3DC] bg-[#F3F1EB] p-8">
                <div className="w-10 h-10 rounded-full bg-[#D97706]/15 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1C1917]">Message sent.</p>
                  <p className="text-[#78716C] text-sm mt-0.5">We'll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#78716C] mb-2">Name</label>
                    <input name="name" required type="text" placeholder="Your name"
                      className="w-full border border-[#E5E3DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1917] placeholder:text-[#C8C4BC] bg-white focus:outline-none focus:border-[#1C1917]/25 focus:ring-2 focus:ring-[#1C1917]/5 transition-all"/>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#78716C] mb-2">Email</label>
                    <input name="email" required type="email" placeholder="you@example.com"
                      className="w-full border border-[#E5E3DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1917] placeholder:text-[#C8C4BC] bg-white focus:outline-none focus:border-[#1C1917]/25 focus:ring-2 focus:ring-[#1C1917]/5 transition-all"/>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#78716C] mb-2">Operation type</label>
                  <select name="type" required
                    className="w-full border border-[#E5E3DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1917] bg-white focus:outline-none focus:border-[#1C1917]/25 focus:ring-2 focus:ring-[#1C1917]/5 transition-all">
                    <option value="">Select your operation</option>
                    <option>Abattoir / Processing Plant</option>
                    <option>Producer / Grazier</option>
                    <option>Backgrounder</option>
                    <option>Feedlot / Pastoral Company</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#78716C] mb-2">Message</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your plant or operation..."
                    className="w-full border border-[#E5E3DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1917] placeholder:text-[#C8C4BC] bg-white focus:outline-none focus:border-[#1C1917]/25 focus:ring-2 focus:ring-[#1C1917]/5 transition-all resize-none"/>
                </div>
                <button type="submit"
                  className="bg-[#D97706] text-[#1C1917] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#B45309] transition-colors">
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
