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
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in touch</h2>
        <p className="text-gray-600 mb-8">
          Tell us about your operation and we'll be in touch to walk you through WebbMuster.
        </p>
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <p className="text-green-800 font-medium text-lg">Thanks — we'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Operation type</label>
              <select
                name="type"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 bg-white"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Tell us about your operation and what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-800 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-900 transition-colors w-full md:w-auto"
            >
              Get in Touch
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
