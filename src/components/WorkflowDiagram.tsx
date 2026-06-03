const nodes = [
  {
    id: "vendor",
    label: "Vendor",
    sub: "Pastoral company,\ngrazier or feedlot",
    accent: false,
    muster: false,
  },
  {
    id: "transit",
    label: "Transport",
    sub: "Livestock in transit\nto the plant",
    accent: false,
    muster: false,
  },
  {
    id: "muster",
    label: "Muster",
    sub: "Scheduling · Compliance\nVendor coordination",
    accent: true,
    muster: true,
  },
  {
    id: "floor",
    label: "Kill Floor",
    sub: "Operations ready.\nNo surprises.",
    accent: false,
    muster: false,
  },
];

const details = [
  { label: "NVD received",      ok: true  },
  { label: "Vendor confirmed",  ok: true  },
  { label: "Capacity: 86%",     ok: null  },
  { label: "1 NVD overdue",     ok: false },
];

function ArrowRight() {
  return (
    <div className="hidden md:flex flex-col items-center justify-center px-1 shrink-0">
      <div className="flex items-center gap-0">
        <div className="w-12 lg:w-20 h-px bg-[#D6D3CB]" />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="#D6D3CB">
          <path d="M0 5h8M5 1l4 4-4 4" stroke="#D6D3CB" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

export default function WorkflowDiagram() {
  return (
    <div className="w-full">
      {/* Main flow row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-0">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex flex-col md:flex-row items-center">
            {/* Node card */}
            <div className={`
              relative rounded-2xl px-6 py-6 w-full md:w-[168px] lg:w-[184px] text-center
              transition-all duration-300
              ${node.muster
                ? "bg-[#1C1917] shadow-2xl shadow-[#1C1917]/25 ring-2 ring-[#D97706]/60 scale-105 z-10"
                : "bg-white border border-[#E5E3DC] shadow-lg shadow-black/[0.04]"
              }
            `}>
              {node.muster && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D97706] text-[#1C1917] text-[10px] font-black uppercase tracking-[0.18em] px-3.5 py-1 rounded-full whitespace-nowrap">
                  Coordination layer
                </div>
              )}
              <p className={`text-base font-bold mb-2 ${node.muster ? "text-white" : "text-[#1C1917]"}`}>
                {node.label}
              </p>
              <p className={`text-[11px] leading-[1.6] whitespace-pre-line ${node.muster ? "text-white/45" : "text-[#78716C]"}`}>
                {node.sub}
              </p>
            </div>

            {/* Connector */}
            {i < nodes.length - 1 && <ArrowRight />}
          </div>
        ))}
      </div>

      {/* Detail pills row */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
        {details.map(d => (
          <div key={d.label}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
              d.ok === true
                ? "border-emerald-200/80 bg-emerald-50 text-emerald-700"
                : d.ok === false
                ? "border-amber-200/80 bg-amber-50 text-amber-700"
                : "border-[#E5E3DC] bg-white text-[#78716C]"
            }`}>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              d.ok === true ? "bg-emerald-500" : d.ok === false ? "bg-amber-500" : "bg-[#D6D3CB]"
            }`} />
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}
