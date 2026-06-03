const rows = [
  { vendor: "Smithfield Pastoral",  date: "Mon 9 Jun",  spec: "Angus MSA",     head: 120, status: "Ready",        nvd: "Received" },
  { vendor: "Outback Cattle Co.",   date: "Mon 9 Jun",  spec: "GFF 100-day",   head: 85,  status: "NVD Required", nvd: "Overdue"  },
  { vendor: "Murray Downs Station", date: "Tue 10 Jun", spec: "Brahman Export", head: 200, status: "Ready",        nvd: "Received" },
  { vendor: "Mackay Grazing",       date: "Wed 11 Jun", spec: "Angus MSA",     head: 150, status: "Pending",      nvd: "Awaiting" },
  { vendor: "Thompson Brothers",    date: "Thu 12 Jun", spec: "Wagyu GFF",     head: 95,  status: "Ready",        nvd: "Received" },
];

function StatusPill({ s }: { s: string }) {
  const map: Record<string, string> = {
    "Ready":        "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    "NVD Required": "bg-amber-50   text-amber-700   ring-1 ring-amber-200",
    "Pending":      "bg-slate-100  text-slate-500   ring-1 ring-slate-200",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${map[s] ?? "bg-slate-100 text-slate-500"}`}>
      {s}
    </span>
  );
}

function NVDCell({ v }: { v: string }) {
  if (v === "Received") return <span className="text-emerald-600 text-xs font-medium">✓ Received</span>;
  if (v === "Overdue")  return <span className="text-amber-600  text-xs font-semibold">⚠ Overdue</span>;
  return <span className="text-slate-400 text-xs">Awaiting</span>;
}

export default function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden bg-white">
      {/* App top bar */}
      <div className="border-b border-slate-100 px-5 py-3.5 flex items-center justify-between bg-slate-50/80">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-white border border-slate-200 rounded-md px-3 py-1">
            <span className="text-[11px] text-slate-400 font-medium">WebbMuster / Intake Schedule / Week 24</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200 rounded-md px-3 py-1.5 hover:bg-slate-50">Export</button>
          <button className="text-[11px] font-semibold text-white bg-slate-900 rounded-md px-3 py-1.5">+ New Booking</button>
        </div>
      </div>

      <div className="p-5">
        {/* Page header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-base font-bold text-slate-900">Intake Schedule</h2>
            <p className="text-xs text-slate-400 mt-0.5">Week of 9 Jun 2025 &nbsp;·&nbsp; 5 vendors &nbsp;·&nbsp; 650 head booked</p>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
            <span className="text-amber-500 text-xs">⚠</span>
            <span className="text-[11px] font-semibold text-amber-700">1 action required</span>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Head booked", value: "650", sub: "This week" },
            { label: "Capacity", value: "86%", sub: "Floor utilisation" },
            { label: "NVDs outstanding", value: "3", sub: "Due before Monday" },
          ].map(k => (
            <div key={k.label} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">{k.label}</p>
              <p className="text-2xl font-bold text-slate-900 leading-none mb-0.5">{k.value}</p>
              <p className="text-[11px] text-slate-400">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl border border-slate-100 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {["Vendor", "Kill date", "Spec", "Head", "Status", "NVD"].map((h, i) => (
                  <th key={h} className={`text-left px-4 py-2.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wide ${i >= 4 ? "hidden md:table-cell" : ""} ${i === 2 ? "hidden lg:table-cell" : ""}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-b border-slate-50 last:border-0 hover:bg-slate-50/70 transition-colors ${r.status === "NVD Required" ? "bg-amber-50/30" : ""}`}>
                  <td className="px-4 py-3 font-semibold text-slate-800 text-[13px]">{r.vendor}</td>
                  <td className="px-4 py-3 text-slate-500">{r.date}</td>
                  <td className="px-4 py-3 text-slate-500 hidden lg:table-cell">{r.spec}</td>
                  <td className="px-4 py-3 font-semibold text-slate-700">{r.head}</td>
                  <td className="px-4 py-3 hidden md:table-cell"><StatusPill s={r.status} /></td>
                  <td className="px-4 py-3 hidden md:table-cell"><NVDCell v={r.nvd} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alert */}
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <span className="text-amber-500 text-sm mt-0.5 shrink-0">⚠</span>
          <div>
            <p className="text-[12px] font-semibold text-amber-800">Outback Cattle Co. — NVD not received</p>
            <p className="text-[11px] text-amber-600 mt-0.5">Kill day is Monday. <span className="underline cursor-pointer font-medium">Send automated reminder →</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
