function FeatureCard({
  title,
  description,
  icon,
}) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition">
      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;