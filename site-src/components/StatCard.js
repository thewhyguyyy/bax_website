export default function StatCard({ number, label, detail, subBullets }) {
  return (
    <div className="group rounded-2xl bg-lavender-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <p className="font-display text-4xl font-bold tracking-tight text-coral-500 transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
        {number}
      </p>
      <h3 className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-indigo-900">
        {label}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-indigo-900/70">{detail}</p>
      {subBullets && (
        <p className="mt-4 font-body text-xs uppercase tracking-wide text-indigo-900/40">
          {subBullets.join(" · ")}
        </p>
      )}
    </div>
  );
}
