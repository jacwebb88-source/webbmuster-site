const bookings = [
  { vendor: "Smithfield Pastoral",   date: "Mon 9 Jun",  head: 120, spec: "Angus MSA",    status: "Confirmed",    nvd: true  },
  { vendor: "Outback Cattle Co.",    date: "Mon 9 Jun",  head: 85,  spec: "GFF 100-day",  status: "NVD Required", nvd: false },
  { vendor: "Murray Downs Station", date: "Tue 10 Jun", head: 200, spec: "Brahman Export",status: "Confirmed",    nvd: true  },
  { vendor: "Mackay Grazing",        date: "Wed 11 Jun", head: 150, spec: "Angus MSA",    status: "Pending",      nvd: null  },
  { vendor: "Thompson Brothers",     date: "Thu 12 Jun", head: 95,  spec: "Wagyu GFF",    status: "Confirmed",    nvd: true  },
];

const stats = [
  { label: "Booked this week", value: "650", unit: "head" },
  { label: "Capacity utilisation", value: "86", unit: "%" },
  { label: "NVDs outstanding", value: "3", unit: "" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "Confirmed":     "bg-emerald-50 text-emerald-700 border border-emerald-200",
    "NVD Required":  "bg-amber-50  text-amber-700  border border-amber-200",
    "Pending":       "bg-gray-100  text-gray-500   border border-gray-200",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${styles[status] ?? "bg-gray-100 text-gray-500"}`}>
      {status}
    </span>
  );
}

function NVDBadge({ nvd }: { nvd: boolean | null }) {
  if (nvd === true)  return <span className="text-emerald-500 text-sm">✓</span>;
  if (nvd === false) return <span className="text-amber-500 text-xs font-semibold">Required</span>;
  return <span className="text-gray-300 text-sm">—</span>;
}

export default function DashboardMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden card-soft">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50/80">
        <div className="w-3 h-3 rounded-full bg-red-400/70" />
        <div className="w-3 h-3 rounded-full bg-amber-400/70" />
        <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] text-gray-400 font-medium">WebbMuster Processing — Kill Schedule</span>
      </div>

      {/* Inner layout */}
      <div className="p-5 bg-white">
        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Kill Schedule</h3>
            <p className="text-xs text-gray-400 mt-0.5">Week of 9 Jun — 5 vendors · 650 head booked</p>
          </div>
          <div className="flex gap-2">
            <button className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-100 transition-colors">
              Export
            </button>
            <button className="text-xs font-semibold text-white bg-gray-900 rounded-lg px-3 py-1.5 hover:bg-gray-800 transition-colors">
              + New Booking
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {stats.map(s => (
            <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-xl p-3">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
              <p className="text-xl font-bold text-gray-900">
                {s.value}<span className="text-xs font-medium text-gray-400 ml-0.5">{s.unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-3.5 py-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Vendor</th>
                <th className="text-left px-3.5 py-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide hidden md:table-cell">Date</th>
                <th className="text-left px-3.5 py-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide hidden lg:table-cell">Spec</th>
                <th className="text-right px-3.5 py-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Head</th>
                <th className="text-left px-3.5 py-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide pl-4">Status</th>
                <th className="text-left px-3.5 py-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide hidden sm:table-cell">NVD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bookings.map((b, i) => (
                <tr
                  key={i}
                  className={`transition-colors hover:bg-gray-50/80 ${i === 1 ? "bg-amber-50/30" : ""}`}
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">{b.vendor}</td>
                  <td className="px-3.5 py-2.5 text-gray-500 hidden md:table-cell">{b.date}</td>
                  <td className="px-3.5 py-2.5 text-gray-500 hidden lg:table-cell">{b.spec}</td>
                  <td className="px-3.5 py-2.5 text-right font-semibold text-gray-700">{b.head}</td>
                  <td className="px-3.5 py-2.5 pl-4"><StatusBadge status={b.status} /></td>
                  <td className="px-3.5 py-2.5 hidden sm:table-cell"><NVDBadge nvd={b.nvd} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alert bar */}
        <div className="mt-4 flex items-center gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5">
          <span className="text-amber-500 text-base leading-none">⚠</span>
          <p className="text-[11px] text-amber-700 font-medium">
            Outback Cattle Co. NVD not received — kill day is Monday. <span className="underline cursor-pointer">Send reminder</span>
          </p>
        </div>
      </div>
    </div>
  );
}
