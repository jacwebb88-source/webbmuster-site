const steps = [
  {
    label: "Farm & Feedlot",
    detail: "Vendor confirms booking",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    highlight: false,
  },
  {
    label: "Transport",
    detail: "Movement confirmed",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    highlight: false,
  },
  {
    label: "WebbMuster",
    detail: "Scheduling · Compliance · Alerts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    highlight: true,
  },
  {
    label: "Kill Floor",
    detail: "Ready. No surprises.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    highlight: false,
  },
];

const floatingCards = [
  { label: "NVD received",       status: "ok",      delay: "0s" },
  { label: "Capacity: 86%",      status: "neutral",  delay: "0.15s" },
  { label: "⚠ 1 action needed", status: "warn",     delay: "0.3s" },
];

export default function WorkflowDiagram() {
  return (
    <div className="relative select-none">
      {/* Main flow */}
      <div className="flex flex-col sm:flex-row items-center gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col sm:flex-row items-center flex-1 min-w-0">
            {/* Node */}
            <div className={`relative flex flex-col items-center rounded-2xl p-5 w-full sm:w-auto sm:min-w-[130px] transition-all ${
              step.highlight
                ? "bg-[#111111] text-white shadow-xl shadow-black/20"
                : "bg-white border border-[#E5E2DB] text-[#111111]"
            }`}>
              {step.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#111111] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Muster
                </div>
              )}
              <div className={`mb-3 mt-1 ${step.highlight ? "text-[#F5A623]" : "text-[#6B7280]"}`}>
                {step.icon}
              </div>
              <p className={`text-xs font-bold leading-tight text-center mb-1 ${step.highlight ? "text-white" : "text-[#111111]"}`}>
                {step.label}
              </p>
              <p className={`text-[10px] leading-tight text-center ${step.highlight ? "text-white/55" : "text-[#6B7280]"}`}>
                {step.detail}
              </p>
            </div>

            {/* Arrow connector */}
            {i < steps.length - 1 && (
              <div className="sm:flex-1 flex sm:flex-row flex-col items-center justify-center px-1 sm:px-2 py-2 sm:py-0">
                <div className="hidden sm:flex items-center gap-1 flex-1">
                  <div className="flex-1 h-px bg-[#E5E2DB]" />
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D1C9BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div className="sm:hidden w-px h-6 bg-[#E5E2DB]" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating status cards */}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {floatingCards.map(c => (
          <div key={c.label}
            style={{ animationDelay: c.delay }}
            className={`fade-up inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-medium ${
              c.status === "ok"      ? "border-emerald-200 bg-emerald-50 text-emerald-700" :
              c.status === "warn"    ? "border-amber-200 bg-amber-50 text-amber-700" :
              "border-[#E5E2DB] bg-white text-[#6B7280]"
            }`}>
            {c.status === "ok" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}
