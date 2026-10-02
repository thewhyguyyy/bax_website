export default function PillarCard({ title, body, highlight = false, Icon, tag }) {
  return (
    <div
      className={`rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
        highlight ? "bg-gold-500 text-indigo-900" : "bg-lavender-50 text-indigo-900"
      }`}
    >
      {Icon && (
        <Icon
          size={28}
          className={highlight ? "text-indigo-900" : "text-purple-600"}
          aria-hidden="true"
        />
      )}
      {tag && (
        <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-widest text-coral-500">
          {tag}
        </p>
      )}
      <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed opacity-80">{body}</p>
    </div>
  );
}
